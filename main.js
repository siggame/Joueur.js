require("./extensions/"); // extends built in JavaScript objects. Extend with care, prototypes can get funky if you are not careful
var ArgumentParser = require('argparse').ArgumentParser;

var parser = new ArgumentParser({description: 'Run the JavaScript client with options to connect to a game server. Must provide a game name to play.'});
parser.addArgument(['game'], {action: 'store', help: 'the name of the game you want to play on the server'});
parser.addArgument(['-s', '--server'], {action: 'store', dest: 'server', defaultValue: '127.0.0.1', help: 'the url to the server you want to connect to e.g. locahost:3000'});
parser.addArgument(['-p', '--port'], {action: 'store', dest: 'port', defaultValue: 3000, help: 'the port to connect to on the server. Can be defined on the server arg via server:port'});
parser.addArgument(['-n', '--name'], {action: 'store', dest: 'playerName', help: 'the name you want to use as your AI\'s player name'});
parser.addArgument(['-w', '--password'], {action: 'store', dest: 'password', help: 'the password required for authentication on official servers'});
parser.addArgument(['-r', '--session'], {action: 'store', dest: 'session', help: 'the requested game session you want to play on the server', defaultValue: '*'});
parser.addArgument(['--printIO'], {action: 'storeTrue', dest: 'printIO', help: '(debugging) print IO through the TCP socket to the terminal'});

var args = parser.parseArgs();

var splitServer = args.server.split(':');
args.server = splitServer[0];
args.port = splitServer[1] || args.port;


var handleError = require("./handleError");
var client = require("./client");
var gameClass = undefined;
var aiCLass = undefined;

try {
    var gameDir = ("./games/" + args.game.lowercaseFirst() + "/");
    gameClass = require(gameDir + "game");
    aiClass = require(gameDir + "ai");
}
catch(err) {
    handleError("GAME_NOT_FOUND", err, "Cannot find or construct Game or AI class for '" + args.game + "'.");
}

var game = new gameClass();
var ai = new aiClass(game);
client.setup(game, ai, args.server, args.port, args);

client.send("play", {
    gameName: game.name,
    password: args.password,
    requestedSession: args.session,
    clientType: "JavaScript",
    playerName: args.playerName || ai.getName() || "JavaScript Player",
});

var lobbyData = client.waitForEvent("lobbied");

console.log("In lobby for game '" + lobbyData.gameName + "' in session '" + lobbyData.gameSession + "'.");

client.gameManager.setConstants(lobbyData.constants);

var startData = client.waitForEvent("start");

console.log("Game starting.");

ai.player = game.getGameObject(startData.playerID);
try {
    ai.start();
    ai.gameUpdated();
}
catch(err) {
    handleError("AI_ERRORED", err, "AI errored when game initially started.");
}

client.play();
