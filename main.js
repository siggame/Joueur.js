var Client = require("./client");
var argh = require("argh");
var args = argh.argv;
require("./extensions/"); // extends built in JavaScript objects. Extend with care, prototypes can get funky if you are not careful

// parse args
var gameName = args.game;
var server = args.server || "localhost";
var port = args.port || server.split(":")[1] || 3000;
var session = args.session || "*";
var playerName = args.playerName;

if(!gameName || gameName === true) {
	console.log("missing the game name arg via '-g' or '--game'");
	process.exit();
}


var gameDir = ("./" + gameName + "/");
var gameClass = require(gameDir + "game");
var aiClass = require(gameDir + "ai")

var game = new gameClass(session);
var ai = new aiClass(game);
var client = new Client(game, ai, server, port);

client.ready(playerName);
