var Class = require("./utilities/class");

// @class BaseAI: the base functions all AIs should do
var BaseAI = Class({
	init: function(game) {
		this.game = game;
	},

	setPlayer: function(player) {
		this.player = player;
	},

	start: function() {
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

	getName: function() {
		return "JavaScript Player"; // intended to be overridden by the AI class
	},

	invalid: function(data) {
		console.log("AI was told this is invalid", data);
	},

	end: function(won, reason) {
		// intended to be overridden by the AI class
	},
});

module.exports = BaseAI;
