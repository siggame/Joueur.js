// ${obj_key}: ${obj['description']}

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.
<%include file='functions.noCreer' />
<% parent_classes = obj['parentClasses']
%>const client = require(`${'$'}{__basedir}/joueur/client`);
% if len(parent_classes) > 0:
% for parent_class in parent_classes:
const ${parent_class} = require('./${lowercase_first(parent_class)}');
% endfor
% else:
<% if obj_key == 'Game':
  parent_classes = [ 'BaseGame' ]
else:
  parent_classes = [ 'BaseGameObject' ]
%>const ${parent_classes[0]} = require(`${'$'}{__basedir}/joueur/${lowercase_first(parent_classes[0])}`);
% endif

${merge('//', 'requires', '// any additional requires you want can be required here safely between creer runs', optional=True)}

/**
 * ${obj['description']}
% for parent_class in reversed(parent_classes):
 * @extends ${(game_name + '.') if not 'Base' in parent_class else ''}${parent_class}
% endfor
 * @memberof ${game_name}
 */
class ${obj_key} extends ${', '.join(parent_classes)} {
  /**
   * Initializes a ${obj_key} with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
% for parent_class in reversed(parent_classes):
    super(...args);
% endfor


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.
% if obj_key == 'Game':

    /**
     * The name of the game.
     * @type {string}
     */
    this.name = '${game_name}';
% endif

    // default values for private member values
% for attr_name in obj['attribute_names']:
<%
  attr_parms = obj['attributes'][attr_name]
  attr_default = shared['js']['default'](attr_parms['type'])
%>    this.${attr_name} = ${attr_default};
% endfor
% if obj_key == 'Game':
% endif

${merge('    //', 'init', '    // any additional init logic you want can go here', optional=True)}
  }


  // Member variables

% for attr_name in obj['attribute_names']:
<%
  attr_parms = obj['attributes'][attr_name]
  attr_default = shared['js']['default'](attr_parms['type'])
%>  /**
   * ${attr_parms['description']}
   *
   * @type {${shared['js']['type'](attr_parms['type'])}}
   */
  get ${attr_name}() {
    return client.gameManager.getMemberValue(this, '${attr_name}');
  }

  set ${attr_name}(value) {
    client.gameManager.setMemberValue(this, '${attr_name}', value);
  }


% endfor
% for function_name in obj['function_names']:
<%
  function_parms = obj['functions'][function_name]
  argument_string = ''
  argument_names = []
  if 'arguments' in function_parms:
    for arg_parms in function_parms['arguments']:
      argument_names.append(arg_parms['name'])
    argument_string = ', '.join(argument_names)
%>
  /**
   * ${function_parms['description']}
   *
% if 'arguments' in function_parms:
% for arg_parms in function_parms['arguments']:
   * @param {${shared['js']['type'](arg_parms['type'])}} ${('[' + arg_parms['name'] + ']') if arg_parms['optional'] else arg_parms['name']} - ${arg_parms['description']}
% endfor
% endif
% if function_parms['returns']:
   * @returns {${shared['js']['type'](function_parms['returns']['type'])}} - ${function_parms['returns']['description']}
% endif
   */
  ${function_name}(${', '.join(function_parms['argument_names'])}) {
% if 'arguments' in function_parms:
% for i, arg_parms in enumerate(function_parms['arguments']):
% if arg_parms['optional']:
    if(arguments.length <= ${i}) {
      ${arg_parms['name']} = ${shared['js']['value'](arg_parms['type'], arg_parms['default'])};
    }

% endif
% endfor
% endif
    return client.runOnServer(this, '${function_name}', {
% for argument_name in argument_names:
      ${argument_name}: ${argument_name},
% endfor
    });
  }

% endfor
% if 'Tile' in game_objs:
% if 'TiledGame' in game['serverParentClasses']: #// then we need to add some client side utility functions
% if obj_key == 'Game':
  /**
   * Gets the Tile at a specified (x, y) position
   *
   * @param {number} x - integer between 0 and the mapWidth
   * @param {number} y - integer between 0 and the mapHeight
   * @returns {Tile|null} - the Tile at (x, y) or null if out of bounds
   */
  getTileAt(x, y) {
    if(x < 0 || y < 0 || x >= this.mapWidth || y >= this.mapHeight) { // out of bounds
      return null;
    }

    return this.tiles[x + y * this.mapWidth] || null;
  }
% elif obj_key == 'Tile':
  /**
   * Gets the valid directions that tiles can be in, "North", "East", "South", or "West"
   *
   * @returns {Array.<string>} "North", "East", "South", and "West"
   */
  directions() {
    return ["North", "East", "South", "West"];
  }

  /**
   * Gets the neighbors of this Tile
   *
   * @returns {Array.<Tile>} - The neighboring (adjacent) Tiles to this tile
   */
  getNeighbors() {
    let neighbors = [];

    for (const direction of this.directions()) {
      const neighbor = this[`tile${'$'}{direction}`];
      if (neighbor) {
        neighbors.push(neighbor);
      }
    }

    return neighbors;
  }

  /**
   * Checks if a Tile is pathable to units
   *
   * @returns {boolean} - True if pathable, false otherwise
   */
  isPathable() {
${merge("    // ", "is_pathable_builtin", "    return false; // DEVELOPER ADD LOGIC HERE")}
  }

  /**
   * Checks if this Tile has a specific neighboring Tile
   *
   * @returns {boolean} true if the tile is a neighbor of this Tile, false otherwise
   */
  hasNeighbor(tile) {
    return Boolean(tile && (this.tileNorth === tile || this.tileEast === tile || this.tileSouth === tile || this.tileEast === tile));
  }
% endif
% endif

% endif
${merge('  //', 'functions', '  // any additional functions you want to add to this class can be preserved here', optional=True)}
}

module.exports = ${obj_key};
