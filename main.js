require("./extensions/"); // extends built in JavaScript objects. Extend with care, prototypes can get funky if you are not careful
var Client = require("./client");
var ArgumentParser = require('argparse').ArgumentParser;

var parser = new ArgumentParser({description: 'Run the JavaScript client with options to connect to a game server. Must provide a game name to play.'});
parser.addArgument(['-g', '--game'], {action: 'store', dest: 'game', required: true, help: 'the game name you want to play on the server'});
parser.addArgument(['-s', '--server'], {action: 'store', dest: 'server', defaultValue: 'localhost', help: 'the url to the server you want to connect to e.g. locahost:3000'});
parser.addArgument(['-p', '--port'], {action: 'store', dest: 'port', defaultValue: 3000, help: 'the port to connect to on the server. Can be defined on the server arg via server:port'});
parser.addArgument(['-n', '--name'], {action: 'store', dest: 'name', help: 'the name you want to use as your AI\'s player name'});
parser.addArgument(['-S', '--session'], {action: 'store', dest: 'session', help: 'the game session you want to play on the server', defaultValue: '*'});
parser.addArgument(['--printIO'], {action: 'storeTrue', dest: 'printIO', help: '(debugging) print IO through the TCP socket to the terminal'});

var args = parser.parseArgs();

// parse args

var splitServer = args.server.split(':');
args.server = splitServer[0];
args.port = splitServer[1] || args.port;

var gameDir = ("./" + args.game + "/");
var gameClass = require(gameDir + "game");
var aiClass = require(gameDir + "ai")

var game = new gameClass(args.session);
var ai = new aiClass(game);
var client = new Client(game, ai, args.server, args.port, args);

client.ready(args.name);
