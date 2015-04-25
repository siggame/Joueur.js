var Class = require("./utilities/class");

// @class BaseAI: the base functions all AIs should do
var BaseAI = Class({
	init: function(game) {
		this.game = game;
	},

	start: function(data) {
		this._playerID = data.playerID; // will be used to find its in game player
	},

	connected: function(data) {
		this._serverConstants = data.constants;
	},

	connectPlayer: function(id) {
		this.player = this.game.getGameObject(this._playerID);
	},

	gameInitialized: function() {
		// intended to be overridden by the AI class
	},

	gameUpdated: function() {
		// intended to be overridden by the AI class
	},

	respondTo: function(request, args) {
		var callback = this[request]; // this function should be generated via Creer in the inherited AI function

		if(callback) {
			return callback.apply(this, args);

			
		}
		else {
			console.error("AI has no function", request, "to respond with");
		}
	},

	invalid: function(data) {
		console.log("AI was told this is invalid", data);
	},

	over: function() {
		// intended to be overridden by the AI class
	},
});

module.exports = BaseAI;
