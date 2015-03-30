var Class = require("./utilities/class");
var Serializer = require("./utilities/serializer");
var io = require("socket.io-client");

// @class Client: talks to the server recieving game information and sending commands to execute. Clients perform no game logic
var Client = Class({
	init: function(game, ai, server, port) {
		server = server || 'localhost';
		port = port || 3000;

		this.game = game;
		this.ai = ai;
		this.server = server;
		this.port = port;

		this.game.setClient(this);
		this.game.setAI(this.ai);

		console.log("connecting to: " + this.sever + ":" + this.port)

		this.socket = io.connect("http://" + this.server + ":" + this.port, {
			reconnect: false,
		});

		for(var key in this) {
			var value = this[key];
			if(typeof(key) == "string" && typeof(value) == "function" && key.substr(0, 2) === "on") {
				(function(self, key) {
					self.socket.on(key.substr(2).toLowerCase(), function(message) {
						self[key].call(self, message && JSON.parse(message));
					});
				})(this, key);
			}
		}
	},

	/// tells the server this player is ready to play a game
	ready: function(playerName) {
		this.socket.emit("play", JSON.stringify({
			clientType: "JavaScript",
			playerName: playerName || this.ai.getName() || "JavaScript Player",
			gameName: this.game.name,
			gameSession: this.game.session || "*",
		}));
	},

	/// sends a command on behalf of a caller game object to the server
	sendCommand: function(caller, command, data) {
		data.caller = caller;
		data.command = command;

		data = Serializer.serialize(data);
		this.socket.emit("command", JSON.stringify(data));
	},


	//--- Socket On functions ---\\

	onConnected: function(data) {
		this.game.connected(data);
		this.ai.connected(data);
		console.log("Connection successful to game '" + this.game.name + "'' in session '" + this.game.session + "'");
	},

	onDelta: function(delta) {
		this.game.applyDeltaState(delta);
	},

	onStart: function(data) {
		this.ai.start(data);
	},

	onAwaiting: function() {
		this.ai.run();
	},

	onIgnoring: function() {
		this.ai.ignoring();
	},

	onOver: function() {
		this.ai.over();
		this.socket.disconnect();
	},

	/*onDisconnect: function() {
		console.log("Disconnected from server...");
		process.exit();
	},*/
});

module.exports = Client;
