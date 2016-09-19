// Please do not modify this file.
// Instead have a look at `README.md` for how to start writing you AI.

process.title = "Joueur.js Game Client";
global.__basedir = __dirname + '/'; // hackish way to store the base directory we are in now so we don't need require("../../../../whatever") and instead require(__base + "root/path/to/whatever")
require("cadre-js-extensions"); // extends built in JavaScript objects. Extend with care, prototypes can get funky if you are not careful

var ArgumentParser = require('argparse').ArgumentParser;
var parser = new ArgumentParser({description: 'Run the JavaScript client with options to connect to a game server. Must provide a game name to play.'});
parser.addArgument(['game'], {action: 'store', help: 'the name of the game you want to play on the server'});
parser.addArgument(['-s', '--server'], {action: 'store', dest: 'server', defaultValue: '127.0.0.1', help: 'the url to the server you want to connect to e.g. locahost:3000'});
parser.addArgument(['-p', '--port'], {action: 'store', dest: 'port', defaultValue: 3000, help: 'the port to connect to on the server. Can be defined on the server arg via server:port'});
parser.addArgument(['-n', '--name'], {action: 'store', dest: 'playerName', help: 'the name you want to use as your AI\'s player name'});
parser.addArgument(['-i', '--index'], {action: 'store', dest: 'index', help: 'the player number you want to be, with 0 being the first player'});
parser.addArgument(['-w', '--password'], {action: 'store', dest: 'password', help: 'the password required for authentication on official servers'});
parser.addArgument(['-r', '--session'], {action: 'store', dest: 'session', help: 'the requested game session you want to play on the server', defaultValue: '*'});
parser.addArgument(['--gameSettings'], {action: 'store', dest: 'gameSettings', help: 'Any settings for the game server to force. Must be url parms formatted (key=value&otherKey=otherValue)'});
parser.addArgument(['--printIO'], {action: 'storeTrue', dest: 'printIO', help: '(debugging) print IO through the TCP socket to the terminal'});

require("./joueur/run")(parser.parseArgs());
