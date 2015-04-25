var Class = require("./class");

// @class Command: a data structure that contains information about running a server side command
// NOTE: this class will be directly serialized, so do not add any keys you don't explicitly want getting sent to the server
var Command = Class({
	init: function(caller, command, args) {
		this._caller = caller;
		this._command = command;

		if(args) {
			for(var key in args) {
				if(args.hasOwnProperty(key)) {
					this[key] = args[key];
				}
			}
		}
	},
});

module.exports = Command;
