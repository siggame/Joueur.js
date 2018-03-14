// This is where you build your AI for the Saloon game.

const BaseAI = require(`${__basedir}/joueur/baseAI`);

// <<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
// <<-- /Creer-Merge: requires -->>

/**
 * This is the class to play the Saloon game. This is where you should build your AI.
 * @memberof Saloon
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
    // <<-- Creer-Merge: getName -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    return 'Saloon JavaScript Player';
    // <<-- /Creer-Merge: getName -->>
  }

  /**
   * This is called once the game starts and your AI knows its playerID and game. You can initialize your AI here.
   */
  start() {
    // <<-- Creer-Merge: start -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // pass
    // <<-- /Creer-Merge: start -->>
  }

  /**
   * This is called every time the game's state updates, so if you are tracking anything you can update it here.
   */
  gameUpdated() {
    // <<-- Creer-Merge: gameUpdated -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // pass
    // <<-- /Creer-Merge: gameUpdated -->>
  }

  /**
   * This is called when the game ends, you can clean up your data and dump files here if need be.
   *
   * @param {boolean} won - True means you won, false means you lost.
   * @param {string} reason - The human readable string explaining why you won or lost.
   */
  ended(won, reason) {
    // <<-- Creer-Merge: ended -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // pass
    // <<-- /Creer-Merge: ended -->>
  }


  /**
   * This is called every time it is this AI.player's turn.
   *
   * @returns {boolean} - Represents if you want to end your turn. True means end your turn, False means to keep your turn going and re-call this function.
   */
  runTurn() {
    // <<-- Creer-Merge: runTurn -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // Put your game logic here for runTurn
    return true;
    // <<-- /Creer-Merge: runTurn -->>
  }

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

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add for your AI
  //<<-- /Creer-Merge: functions -->>

}

module.exports = AI;
