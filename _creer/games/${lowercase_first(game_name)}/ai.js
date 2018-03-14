// This is where you build your AI for the ${game_name} game.
<%include file='functions.noCreer' />
const BaseAI = require(`${'$'}{__basedir}/joueur/baseAI`);

${merge('// ', 'requires', '// any additional requires you want can be required here safely between creer runs', optional=True)}

/**
 * This is the class to play the ${game_name} game. This is where you should build your AI.
 * @memberof ${game_name}
 */
class AI extends BaseAI {
  /**
   * The reference to the Game instance this AI is playing.
   *
   * @member {Game} game
   */

  /**
   * The reference to the Player this AI controls in the Game.
   *
   * @member {Player} player
   */

  /**
   * This is the name you send to the server so your AI will control the player named this string.
   *
   * @returns {string} - The name of your Player.
   */
  getName() {
${merge('    // ', 'getName', "    return '" + game_name + " JavaScript Player';")}
  }

  /**
   * This is called once the game starts and your AI knows its playerID and game. You can initialize your AI here.
   */
  start() {
${merge('    // ', 'start', '    // pass')}
  }

  /**
   * This is called every time the game's state updates, so if you are tracking anything you can update it here.
   */
  gameUpdated() {
${merge('    // ', 'gameUpdated', '    // pass')}
  }

  /**
   * This is called when the game ends, you can clean up your data and dump files here if need be.
   *
   * @param {boolean} won - True means you won, false means you lost.
   * @param {string} reason - The human readable string explaining why you won or lost.
   */
  ended(won, reason) {
${merge('    // ', 'ended', '    // pass')}
  }

% for function_name in ai['function_names']:
<%
  function_parms = ai['functions'][function_name]
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
   * @param {${shared['js']['type'](arg_parms['type'])}} ${arg_parms['name']} - ${arg_parms['description']}
% endfor
% endif
% if function_parms['returns']:
   * @returns {${shared['js']['type'](function_parms['returns']['type'])}} - ${function_parms['returns']['description']}
% endif
   */
  ${function_name}(${argument_string}) {
${merge('    // ', function_name,
'''    // Put your game logic here for {0}
    return {1};
'''.format(function_name, shared['js']['default'](function_parms['returns']['type'], function_parms['returns']['default']) if function_parms['returns'] else 'undefined')
)}
  }
% endfor

% if 'TiledGame' in game['serverParentClasses']: #// then we need to add some client side utility functions
  /**
   * A very basic path finding algorithm (Breadth First Search) that when given a starting Tile, will return a valid path to the goal Tile.
   *
   * @param {Tile} start - the starting Tile
   * @param {Tile} goal - the goal Tile
   * @returns {Array.<Tile>} An array of Tiles representing the path, the the first element being a valid adjacent Tile to the start, and the last element being the goal.
   */
  findPath(start, goal) {
    if (start === goal) {
      // no need to make a path to here...
      return [];
    }

    // queue of the tiles that will have their neighbors searched for 'goal'
    let fringe = [];

    // How we got to each tile that went into the fringe.
    let cameFrom = {};

    // Enqueue start as the first tile to have its neighbors searched.
    fringe.push(start);

    // keep exploring neighbors of neighbors... until there are no more.
    while (fringe.length > 0) {
      // the tile we are currently exploring.
      let inspect = fringe.shift();

      // cycle through the tile's neighbors.
      for (const neighbor of inspect.getNeighbors()) {
        // if we found the goal, we have the path!
        if (neighbor === goal) {
          // Follow the path backward to the start from the goal and return it.
          let path = [goal];

          // Starting at the tile we are currently at, insert them retracing our steps till we get to the starting tile
          while (inspect !== start) {
            path.unshift(inspect);
            inspect = cameFrom[inspect.id];
          }

          return path;
        }
        // else we did not find the goal, so enqueue this tile's neighbors to be inspected

        // if the tile exists, has not been explored or added to the fringe yet, and it is pathable
        if (neighbor && neighbor.id && !cameFrom[neighbor.id] && neighbor.isPathable()) {
          // add it to the tiles to be explored and add where it came from for path reconstruction.
          fringe.push(neighbor);
          cameFrom[neighbor.id] = inspect;
        }
      }
    }

    // if we got here, no path was found
    return [];
  }

% endif
${merge('  //', 'functions', '  // any additional functions you want to add for your AI', optional=True)}

}

module.exports = AI;
