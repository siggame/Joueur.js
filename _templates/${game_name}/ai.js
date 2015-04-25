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

	// this is called when the game closes (ends), you can clean up your data and dump files here if need be
	close: function(){
		// pass
	},


	//--- Response Functions: functions you must fill out to send data to the game server to actually play the game! --\\\

% for function_name, function_parms in ai['functions'].items():
<%
	argument_string = ""
	argument_names = []
	if 'arguments' in function_parms:
		for arg_parms in function_parms['arguments']:
			argument_names.append(arg_parms['name'])
		argument_string = ", ".join(argument_names)
%>
	/// ${function_parms['description']}
% if 'arguments' in function_parms:
% for arg_parms in function_parms['arguments']:
	// @param <${arg_parms['type']}> ${arg_parms['name']}: ${arg_parms['description']}
% endfor
% endif
	// @return <${function_parms['return']['type']}> ${function_parms['return']['description']}
	${function_name}: function(${argument_string}) {
		// Put your game logic here for ${function_name}
	},
% endfor
};

module.exports = AI;
