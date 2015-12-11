var color = require("./ansiColorCoder");

module.exports = function(args) {
    var splitServer = args.server.split(':');
    args.server = splitServer[0];
    args.port = splitServer[1] || args.port;

    var handleError = require("./handleError");
    var client = require("./client");

    var gameDir = (__basedir + "games/" + args.game.lowercaseFirst() + "/");
    try {
        require.resolve(gameDir + "game")
    }
    catch(err) {
        return handleError("GAME_NOT_FOUND", err, "Cannot find Game '" + args.game + "'.");
    }

    var gameClass = undefined;
    try {
        gameClass = require(gameDir + "game");
    }
    catch(err) {
        return handleError("REFLECTION_FAILED", err, "Error requiring the Game Class for '" + args.game + "'.");
    }

    var aiClass = undefined;
    try {
        aiClass = require(gameDir + "ai");
    }
    catch(err) {
        return handleError("AI_ERRORED", err, "Error requiring the AI Class for '" + args.game + "'. Probably a syntax error.");
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
        gameSettings: args.gameSettings,
    });

    var lobbyData = client.waitForEvent("lobbied");

    console.log(color.text("cyan") + "In lobby for game '" + lobbyData.gameName + "' in session '" + lobbyData.gameSession + "'." + color.reset());

    client.gameManager.setConstants(lobbyData.constants);

    var startData = client.waitForEvent("start");

    console.log(color.text("green") + "Game is starting." + color.reset());

    ai.player = game.getGameObject(startData.playerID);
    try {
        ai.start();
        ai.gameUpdated();
    }
    catch(err) {
        handleError("AI_ERRORED", err, "AI errored when game initially started.");
    }

    client.play();
};
