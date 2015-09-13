module.exports = function(args) {
    var splitServer = args.server.split(':');
    args.server = splitServer[0];
    args.port = splitServer[1] || args.port;

    var handleError = require("./handleError");
    var client = require("./client");
    var gameClass = undefined;
    var aiCLass = undefined;

    //try {
        var gameDir = (__basedir + "/games/" + args.game.lowercaseFirst() + "/");
        gameClass = require(gameDir + "game");
        aiClass = require(gameDir + "ai");
    //}
    //catch(err) {
        //handleError("GAME_NOT_FOUND", err, "Cannot find or construct Game or AI class for '" + args.game + "'.");
    //}

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
};
