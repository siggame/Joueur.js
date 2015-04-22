var Class = require("./utilities/class");
var Serializer = require("./utilities/serializer");
var net = require("net");
var EOT_CHAR = String.fromCharCode(4);

// @class Client: talks to the server recieving game information and sending commands to execute via TCP socket. Clients perform no game logic
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

		console.log("connecting to: " + this.server + ":" + this.port)

		this.socket = new net.Socket();
		this.socket.setEncoding('utf8');

		(function(self) {
			self.socket.connect(self.port, self.server, function() {
				self.connected();
			});

			var buffer = "";
			self.socket.on("data", function(str) {
				buffer += str;

				var split = buffer.split(EOT_CHAR); // split on "end of text" character (basically end of transmition)

				buffer = split.pop(); // the last item will either be "" if the last char was an EOT_CHAR, or a partial data we need to buffer anyways

				for(var i = 0; i < split.length; i++) {
					self.onJsonData(split[i]);
				}
			});

			self.socket.on("close", function() {
				self.disconnected();
			});

			self.socket.on("error", function() {
				console.log("server encountered unexpected error");
			});
		})(this);
	},

	connected: function(data) {
		console.log("successfully connected to server at:", this.server + ":" + this.port);
	},

	disconnected: function() {
		console.log("Disconnected from server...");
		this.socket.destroy();
		process.exit();
	},

	onJsonData: function(json) {
		var parsed = JSON.parse(json);
		this['on' + parsed.event.capitalize()].call(this, parsed.data);
	},



	/// tells the server this player is ready to play a game
	ready: function(playerName) {
		this.sendEvent("play", {
			clientType: "JavaScript",
			playerName: playerName || this.ai.getName() || "JavaScript Player",
			gameName: this.game.name,
			gameSession: this.game.session || "*",
		});
	},

	sendEvent: function(event, data) {
		this.socket.write(
			JSON.stringify({
				sendTime: (new Date()).getTime(),
				event: event,
				data: data,
			})
			+ EOT_CHAR
		);
	},

	/// sends a command on behalf of a caller game object to the server
	sendCommand: function(caller, command, data) {
		data.caller = caller;
		data.command = command;

		this.sendEvent("command", Serializer.serialize(data));
	},



	//--- Socket on data functions ---\\

	onPlaying: function(data) {
		this.game.connected(data);
		this.ai.connected(data);
		console.log("Connection successful to game '" + this.game.name + "'' in session '" + this.game.session + "'");
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

	onDelta: function(delta) {
		this.game.applyDeltaState(delta);
	},

	onOver: function() {
		this.ai.over();
		this.disconnected();
	},
});

module.exports = Client;
