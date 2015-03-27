// ${header}
// This is where you build your AI for the ${game_name} game.
var Class = require("../utilities/class");
var BaseAI = require("../baseAI");

/// @class AI: the AI functions for the ${game_name} game.
var AI = Class(BaseAI, {
	// this is the name you send to the server to play as.
	getName: function() {
		return "${game_name} Javascript Player";
	},

	// this is called once the game starts and your AI knows its playerID and game. You can initialize your AI here.
	gameInitialized: function() {
		// pass
	},

	// this is called when the game's state updates, so if you are tracking anything you can update it here.
	gameUpdated: function() {
		// pass
	},

	// this is called every time the server tells you that you can send a command. Once you send a command you must return. This is where most of your game logic will probably go
	run: function(){
		// pass
	},

	// this is called when the server is no longer taking game commands from you, normally when you turn ends and another players begins.
	ignoring: function() {
		// pass
	},

	// this is called when the game closes (ends), you can clean up your data and dump files here if need be
	close: function(){
		// pass
	},
});

module.exports = AI;
