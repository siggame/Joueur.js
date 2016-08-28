// This is a simple class to represent the ${obj_key} object in the game. You can extend it by adding utility functions here in this file.
<%include file="functions.noCreer" />
<% parent_classes = obj['parentClasses']
%>var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
% if len(parent_classes) > 0:
% for parent_class in parent_classes:
var ${parent_class} = require("./${lowercase_first(parent_class)}");
% endfor
% else:
<% if obj_key == "Game":
    parent_classes = [ 'BaseGame' ]
else:
    parent_classes = [ 'BaseGameObject' ]
%>var ${parent_classes[0]} = require(__basedir + "/joueur/${lowercase_first(parent_classes[0])}");
% endif

% if obj_key == "Game":
// game object classes
% for game_obj_key, game_obj in game_objs.items():
var ${game_obj_key} = require("./${lowercase_first(game_obj_key)}");
% endfor

% endif

${merge("//", "requires", "// any additional requires you want can be required here safely between creer runs")}

/**
 * @class
 * @classdesc ${obj['description']}
% for parent_class in reversed(parent_classes):
 * @extends ${parent_class}
% endfor
 */
var ${obj_key} = Class(${", ".join(parent_classes)}, {
    /**
     * initializes a ${obj_key} with basic logic as provided by the Creer code generator
     *
     * @memberof ${obj_key}
     * @private
     */
    init: function() {
% for parent_class in reversed(parent_classes):
        ${parent_class}.init.apply(this, arguments);
% endfor


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.
% if obj_key == "Game":

        /**
         * The name of the game.
         */
        this.name = "${game_name}";
% endif

% for attr_name in obj['attribute_names']:
<%
    attr_parms = obj['attributes'][attr_name]
    attr_default = shared['js']['default'](attr_parms['type'])
%>
        /**
         * ${attr_parms['description']}
         *
         * @name ${obj_key}#${attr_name}
         * @type ${shared['js']['type'](attr_parms['type'])}
         */
        this.${attr_name} = ${attr_default};
% endfor
% if obj_key == "Game":


        this._gameObjectClasses = {
% for game_obj_key, game_obj in game_objs.items():
            "${game_obj_key}": ${game_obj_key},
% endfor
        };
% endif

${merge("        //", "init", "        // any additional init logic you want can go here")}

    },

% for function_name in obj['function_names']:
<%
    function_parms = obj['functions'][function_name]
    argument_string = ""
    argument_names = []
    if 'arguments' in function_parms:
        for arg_parms in function_parms['arguments']:
            argument_names.append(arg_parms['name'])
        argument_string = ", ".join(argument_names)
%>
    /**
     * ${function_parms['description']}
     *
     * @memberof ${obj_key}
     * @instance
% if 'arguments' in function_parms:
% for arg_parms in function_parms['arguments']:
     * @param {${shared['js']['type'](arg_parms['type'])}} ${("[" + arg_parms['name'] + "]") if arg_parms['optional'] else arg_parms['name']} - ${arg_parms['description']}
% endfor
% endif
% if function_parms['returns']:
     * @returns {${shared['js']['type'](function_parms['returns']['type'])}} - ${function_parms['returns']['description']}
% endif
     */
    ${function_name}: function(${", ".join(function_parms['argument_names'])}) {
% if 'arguments' in function_parms:
% for i, arg_parms in enumerate(function_parms['arguments']):
% if arg_parms['optional']:
        if(arguments.length <= ${i}) {
            ${arg_parms['name']} = ${shared['js']['value'](arg_parms['type'], arg_parms['default'])};
        }

% endif
% endfor
% endif
        return client.runOnServer(this, "${function_name}", {
% for argument_name in argument_names:
            ${argument_name}: ${argument_name},
% endfor
        });
    },
% endfor


${merge("    //", "functions", "    // any additional functions you want to add to this class can be perserved here")}

});

module.exports = ${obj_key};
