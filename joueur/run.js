const color = require('./ansiColorCoder');
const fs = require('fs');

module.exports = function(args) {
  const splitServer = args.server.split(':');
  args.server = splitServer[0];
  args.port = splitServer[1] || args.port;

  const handleError = require('./handleError');
  const client = require('./client');

  try {
    client.connect(args.server, args.port, args)
  }
  catch (err) {
    return handleError('COULD_NOT_CONNECT', err, 'Error creating synchronous socket.');
  }

  client.send('alias', args.game);
  let gameName = client.waitForEvent('named');

  let gameDir = (`${__basedir}games/${gameName[0].toLowerCase() + gameName.substr(1)}/`);

  // get syntax errors in files because the syntax errors node throws are half useless
  const walk = require('./walk');
  const check = require('syntax-error');
  const gameFiles = walk(gameDir);
  for (let i = 0; i < gameFiles.length; i++) {
    let filename = gameFiles[i];
    let file = gameDir + filename;
    let src = fs.readFileSync(file);

    let err = check(src, file);
    if (err) {
      err.message = err.annotated.substr(1); // chop off the newline

      return handleError('AI_ERRORED', err, `Error requiring file ${file}`);
    }
  }

  try {
    require.resolve(`${gameDir}game`);
  }
  catch (err) {
    return handleError('GAME_NOT_FOUND', err, `Cannot find Game '${gameName}'.`);
  }

  let gameClass;
  try {
    gameClass = require(`${gameDir}game`);
  }
  catch (err) {
    return handleError('REFLECTION_FAILED', err, `Error requiring the Game Class for '${gameName}'.`);
  }

  let gameManagerClass;
  try {
    gameManagerClass = require(`${gameDir}gameManager`);
  }
  catch (err) {
    return handleError('REFLECTION_FAILED', err, `Error requiring the GameManager Class for '${gameName}'.`);
  }

  let aiClass;
  try {
    aiClass = require(`${gameDir}ai`);
  }
  catch (err) {
    return handleError('AI_ERRORED', err, `Error requiring the AI Class for '${gameName}'. Probably a syntax error.`);
  }

  client.setup(gameClass, aiClass, gameManagerClass);
  let game = client.game;
  let ai = client.ai;

  ai.setSettings(args.aiSettings);

  client.send('play', {
    gameName: gameName,
    password: args.password,
    requestedSession: args.session,
    clientType: 'JavaScript',
    playerName: args.playerName || ai.getName() || 'JavaScript Player',
    playerIndex: args.index,
    gameSettings: args.gameSettings,
  });

  let lobbyData = client.waitForEvent('lobbied');

  if (lobbyData.gameVersion !== gameManagerClass.gameVersion) {
    console.warn(
`${color.text('yellow')}WARNING: Game versions do not match.
-> Your local game version is:     ${gameManagerClass.gameVersion.substr(0, 8)}
-> Game Server's game version is:  ${lobbyData.gameVersion.substr(0, 8)}

Version mismatch means that unexpected crashes may happen due to differing game structures!${color.reset()}`);
}

  console.log(`${color.text('cyan')}In lobby for game '${lobbyData.gameName}' in session '${lobbyData.gameSession}'.${color.reset()}`);

  client.gameManager.setConstants(lobbyData.constants, game);

  let startData = client.waitForEvent('start');

  console.log(`${color.text('green')}Game is starting.${color.reset()}`);

  ai.player = game.getGameObject(startData.playerID);
  try {
    ai.start();
    ai.gameUpdated();
  }
  catch (err) {
    handleError('AI_ERRORED', err, 'AI errored when game initially started.');
  }

  client.play();
};
