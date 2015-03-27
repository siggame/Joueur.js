// ${header}
// This is a simple class to represent the ${obj_key} object in the game. You can extend it by adding utility functions here in this file.
<% parent_classes = obj['parentClasses'] %>
var Class = require("../utilities/class");
% if len(parent_classes) > 0:
% for parent_class in parent_classes:
var ${parent_class} = require("./${uncapitalize(parent_class)}");
% endfor
% else:
<% if obj_key == "Game":
	parent_classes = [ 'BaseGame' ]
else:
	parent_classes = [ 'BaseGameObject' ]
%>var ${parent_classes[0]} = require("../${uncapitalize(parent_classes[0])}");
% endif

% if obj_key == "Game":
// game object classes
% for game_obj_key, game_obj in game_objs.items():
var ${game_obj_key} = require("./${uncapitalize(game_obj_key)}");
% endfor

% endif
/// @class ${obj_key}: ${obj['description']}
var ${obj_key} = Class(${", ".join(parent_classes)}, {
	/// initializes a ${obj_key} with basic logic as provided by the Creer code generator
	// @param <object> data: initialization data
	init: function(data) {
% for parent_class in reversed(parent_classes):
		${parent_class}.init.call(this, data);
% endfor

% for attr_name, attr_parms in obj['attributes'].items():
<%
	attr_default = attr_parms["default"] if 'default' in attr_parms else None
	attr_type = attr_parms["type"]
	attr_cast = "";

	if attr_type == "string":
		attr_default = '"' + (attr_default if attr_default != None else '') + '"'
		attr_cast = "String"
	elif attr_type == "array":
		attr_default = '[]'
	elif attr_type == "int":
		attr_default = attr_default or 0
		attr_cast = "parseInt"
	elif attr_type == "float":
		attr_default = attr_default or 0
		attr_cast = "parseFloat"
	elif attr_type == "dictionary":
		attr_default = '{}'
	elif attr_type == "boolean":
		attr_default = 'false'
	else:
		attr_default = "null"
%>		this.${attr_name} = ${attr_cast}(data.${attr_name} === undefined ? ${attr_default} : data.${attr_name});
% endfor
% if obj_key == "Game":

		this.name = "${game_name}"

		this._gameObjectClasses = {
% for game_obj_key, game_obj in game_objs.items():
			"${game_obj_key}": ${game_obj_key},
% endfor
		};
% endif
	},

% for function_name, function_parms in obj['functions'].items():
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
	${function_name}: function(${argument_string}) {
		return this._client.sendCommand(this, "${function_name}", {
% for argument_name in argument_names:
			${argument_name}: ${argument_name},
% endfor
		});
	},
% endfor
});

module.exports = ${obj_key};
