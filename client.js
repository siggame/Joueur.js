var Class = require("./utilities/class");
var Serializer = require("./utilities/serializer");
var net = require("net");
var EOT_CHAR = String.fromCharCode(4);

// @class Client: talks to the server recieving game information and sending commands to execute via TCP socket. Clients perform no game logic
var Client = Class({
	init: function(game, ai, server, port, options) {
		server = server || 'localserver';
		port = port || 3000;

		this.game = game;
		this.ai = ai;
		this.server = server;
		this.port = port;
		this._printIO = options.printIO;

		this._gotInitialState = false;

		console.log("connecting to:", this.server + ":" + this.port)

		this.socket = new net.Socket();
		this.socket.setEncoding('utf8');

		(function socketSetup(self) {
			self.socket.connect(self.port, self.server, function() {
				self._connected();
			});

			var buffer = "";
			self.socket.on("data", function onSocketData(str) {
				if(self._printIO) {
					console.log("FROM SERVER <--", str, '\n--');
				}
				buffer += str;

				var split = buffer.split(EOT_CHAR); // split on "end of text" character (basically end of transmition)

				buffer = split.pop(); // the last item will either be "" if the last char was an EOT_CHAR, or a partial data we need to buffer anyways

				for(var i = 0; i < split.length; i++) {
					self._onJsonData(split[i]);
				}
			});

			self.socket.on("close", function onSocketData() {
				self.disconnect();
			});

			self.socket.on("error", function onSocketError() {
				console.log("server encountered unexpected error");
			});
		})(this);
	},

	_connected: function(data) {
		console.log("successfully connected to server at:", this.server + ":" + this.port);
	},

	disconnect: function() {
		console.log("Disconnected from server...");
		this.socket.destroy();
		process.exit();
	},

	_onJsonData: function(json) {
		var parsed = JSON.parse(json);
		this['_on' + parsed.event.capitalize()].call(this, parsed.data);
	},



	/// tells the server this player is ready to play a game
	ready: function(playerName) {
		this.send("play", {
			clientType: "JavaScript",
			playerName: playerName || this.ai.getName() || "JavaScript Player",
			gameName: this.game.name,
			gameSession: this.game.session || "*",
		});
	},

	_sendRaw: function(str) {
		if(this._printIO) {
			console.log("TO SERVER -->", str, '\n--');
		}
		this.socket.write(str);
	},

	send: function(event, data) {
		this._sendRaw(
			JSON.stringify({
				sentTime: (new Date()).getTime(),
				event: event,
				data: Serializer.serialize(data),
			})
			+ EOT_CHAR
		);
	},



	//--- Socket on data functions ---\\

	_onLobbied: function(data) {
		this.game.onLobbied(data);
		this.ai.onLobbied(data);
		console.log("Connection successful to game '" + this.game.name + "'' in session '" + this.game.session + "'");
	},

	_onStart: function(data) {
		this.ai.start(data);
	},

	_onRequest: function(data) {
		var response = this.ai.respondTo(data.request, data.args);

		if(response === undefined) {
			console.error("no response returned to", data.request, " erroring out.");
			this.disconnect();
		}
		else { // the response was successful
			this.send("response", {
				response: data.request,
				data: response,
			});
		}
	},

	_onDelta: function(delta) {
		this.game.applyDeltaState(delta);

		if(!this._gotInitialState) {
			this._gotInitialState = true;

			this.ai.connectPlayer();
			this.ai.gameInitialized();
		}

		this.ai.gameUpdated();
	},

	_onInvalid: function(data) {
		this.ai.invalid(data);
		this.disconnect();
	},

	_onOver: function() {
		this.ai.over();
		this.disconnect();
	},
});

module.exports = Client;
