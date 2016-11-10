var color = require("./ansiColorCoder");
var fs = require("fs");

module.exports = function(args) {
    var splitServer = args.server.split(':');
    args.server = splitServer[0];
    args.port = splitServer[1] || args.port;

    var handleError = require("./handleError");
    var client = require("./client");

    client.connect(args.server, args.port, args);

    client.send("alias", args.game);
    var gameName = client.waitForEvent("named");

    var gameDir = (__basedir + "games/" + gameName.lowercaseFirst() + "/");

    // get syntax errors in files because the syntax errors node throws are half useless
    var walk = require("./walk");
    var check = require('syntax-error');
    var gameFiles = walk(gameDir);
    for(var i = 0; i < gameFiles.length; i++) {
        var filename = gameFiles[i];
        var file = gameDir + filename;
        var src = fs.readFileSync(file);

        var err = check(src, file);
        if(err) {
            err.message = err.annotated.substr(1); // chop off the newline

            return handleError("AI_ERRORED", err, "Error requiring file {}.".format(file));
        }
    }

    try {
        require.resolve(gameDir + "game");
    }
    catch(err) {
        return handleError("GAME_NOT_FOUND", err, "Cannot find Game '" + gameName + "'.");
    }

    var gameClass;
    try {
        gameClass = require(gameDir + "game");
    }
    catch(err) {
        return handleError("REFLECTION_FAILED", err, "Error requiring the Game Class for '" + gameName + "'.");
    }

    var aiClass;
    try {
        aiClass = require(gameDir + "ai");
    }
    catch(err) {
        return handleError("AI_ERRORED", err, "Error requiring the AI Class for '" + gameName + "'. Probably a syntax error.");
    }

    var game = new gameClass();
    var ai = new aiClass(game);
    client.setup(game, ai);

    client.send("play", {
        gameName: gameName,
        password: args.password,
        requestedSession: args.session,
        clientType: "JavaScript",
        playerName: args.playerName || ai.getName() || "JavaScript Player",
        playerIndex: args.index,
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
