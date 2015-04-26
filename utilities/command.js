module.exports = function makeCommand(caller, command, args) {
	args._caller = caller;
	args._command = command;

	return args;
};
