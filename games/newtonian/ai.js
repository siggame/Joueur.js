// This is where you build your AI for the Newtonian game.

const BaseAI = require(`${__basedir}/joueur/baseAI`);

// <<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
// <<-- /Creer-Merge: requires -->>

/**
 * This is the class to play the Newtonian game. This is where you should build your AI.
 * @memberof Newtonian
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
    return 'Newtonian JavaScript Player';
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

    /**
     * Please note: This code is intenionally bad. You should try to optimize everything here. The code here is only to show you how to use the
     *              game's mechanics with the MegaMinerAI server framework.
     */

    // Goes through all the units that you own.
      for (let unit of this.player.units) {
          // Only tries to do something if the unit actually exists.
          if (unit !== null && unit.tile !== null) {
              if (unit.job.title === 'physicist') {
                  // If the unit is a physicist, tries to work on machines that are ready to be worked. If there are no machines available
                  // it finds and attacks enemy managers.

                  // Tries to find a workable machine for blueium ore.
                  // Note: You need to get redium ore as well.
                  let target = null;

                  // Goes through all the machines in the game and picks one that is ready to be worked.
                  for (let machine of this.game.machines) {
                      if (machine.tile.blueiumOre >= machine.refineInput) {
                          target = machine.tile;
                      }
                  }

                  if (target === null) {
                      // Chases down enemy managers if there are no machines that are workable.
                      for (let enemy of this.game.units) {
                          // Only does anything if the unit that we found is an enemy manager.
                          if (enemy.tile != null && enemy.owner === this.player.opponent && enemy.job.title === 'manager') {
                              // Moves towards the manager.
                              while (unit.moves > 0 && this.findPath(unit.tile, enemy.tile) > 0) {
                                  // Moves until there are no moves left for the physicist.
                                  if (!unit.move(this.findPath(unit.tile, enemy.tile)[0])) {
                                      break;
                                  }
                              }

                              if (unit.tile in enemy.tile.getNeighbors()) {
                                  if (enemy.stunTime === 0 && enemy.stunImmune === 0) {
                                      // Stuns the enemy manager if they are not stunned and not immune.
                                      unit.act(enemy.tile);
                                  } else {
                                      // Attacks the manager otherwise.
                                      unit.attack(enemy.tile);
                                  }
                              }

                              break;
                          }
                      }
                  } else {
                      // Gets the tile of the targeted machine if adjacent to it.
                      let adjacent = false;
                      for (let tile of target.getNeighbors()) {
                          if (tile === unit.tile) {
                              adjacent = true;
                          }
                      }

                      // If there is a machine that is waiting to be worked on, go to it.
                      while (unit.moves > 0 && this.findPath(unit.tile, target) > 1 && !adjacent) {
                          if (!unit.move(this.findPath(unit.tile, target)[0])) {
                              break;
                          }
                      }

                      // Act on the target machine to run it if the physicist is adjacent.
                      if (adjacent && !unit.acted) {
                          unit.act(target);
                      }
                  }
              } else if (unit.job.title === 'intern') {
                  // If the unit is an intern, collects blueium ore.
                  // Note: You also need to collect redium ore.

                  // Goes to gather resources if currently carrying less than the carry limit.
                  if (unit.blueiumOre < unit.job.carryLimit) {
                      // Your intern's current target.
                      let target = null;

                      // Goes to collect blueium ore that isn't on a machine.
                      for (let tile of this.game.tiles) {
                          if (tile.blueiumOre > 0 && tile.machine === null) {
                              target = tile;
                              break;
                          }
                      }

                      // Moves towards our target until at the target or out of moves.
                      if (this.findPath(unit.tile, target).length > 0) {
                          while (unit.moves > 0 && this.findPath(unit.tile, target).length > 0) {
                              if (!unit.move(this.findPath(unit.tile, target)[0])) {
                                  break;
                              }
                          }
                      }

                      // Picks up the appropriate resource once we reach our target's tile.
                      if (unit.tile === target && target.blueiumOre > 0) {
                          unit.pickup(target, 0, 'blueium ore');
                      }
                  } else {
                      // Deposits blueium ore in a machine for it if we have any.

                      // Finds a machine in the game's tiles that takes blueium ore.
                      for (let tile of this.game.tiles) {
                          if (tile.machine !== null && tile.machine.oreType === 'blueium') {
                              // Moves towards the found machine until we reach it or are out of moves.
                              while (unit.moves > 0 && this.findPath(unit.tile, tile).length > 1) {
                                  if (!unit.move(this.findPath(unit.tile, tile)[0])) {
                                      break;
                                  }
                              }

                              // Deposits blueium ore on the machine if we have reached it.
                              if (this.findPath(unit.tile, tile).length <= 1) {
                                  unit.drop(tile, 0, 'blueium ore');
                              }
                          }
                      }
                  }
              } else if (unit.job.title === 'manager') {
                  // Finds enemy interns, stuns and attacks them if there is no blueium to take to the generator.
                  let target = null;

                  for (let tile of this.game.tiles) {
                      if (tile.blueium > 1 && unit.blueium < unit.job.carry_limit) {
                          target = tile;
                      }
                  }

                  if (target === null && unit.blueium === 0) {
                      for (let enemy of this.game.units) {
                          // Only does anything for an intern that is owned by your opponent.
                          if (enemy.tile !== null && enemy.owner === this.player.opponent && enemy.job.title === 'intern') {
                              // Moves towards the intern until reached or out of moves.
                              while (unit.moves > 0 && this.findPath(unit.tile, enemy.tile).length > 0) {
                                  if (!unit.move(this.findPath(unit.tile, enemy.tile)[0])) {
                                      break;
                                  }
                              }

                              // Either stuns or attacks the intern if we are within range.
                              if (unit.tile in enemy.tile.getNeighbors()) {
                                  if (enemy.stunTime === 0 && enemy.stunImmune === 0) {
                                      // Stuns the enemy intern if they are not stunned and not immune.
                                      unit.act(enemy.tile);
                                  } else {
                                      // Attacks the intern otherwise.
                                      unit.attack(enemy.tile);
                                  }
                              }

                              break;
                          }
                      }
                  } else if (target !== null) {
                      // Moves towards our target until at the target or out of moves.
                      while (unit.moves > 0 && this.findPath(unit.tile, target).length > 1) {
                          if (!unit.move(this.findPath(unit.tile, target)[0])) {
                              break;
                          }
                      }

                      // Picks up blueium once we reach our target's tile.
                      if (this.findPath(unit.tile, target).length <= 1 && target.blueium > 0) {
                          unit.pickup(target, 0, 'blueium');
                      }
                  } else if (target === null && unit.blueium > 0) {
                      // Stores a tile that is part of your generator.
                      let genTile = this.player.generatorTiles[0];

                      // Goes to your generator and drops blueium in.
                      while (unit.moves > 0 && this.findPath(unit.tile, genTile).length > 0) {
                          if (!unit.move(this.findPath(unit.tile, genTile)[0])) {
                              break;
                          }
                      }

                      // Deposits blueium in our generator if we have reached it.
                      if (this.findPath(unit.tile, genTile).length <= 1) {
                          unit.drop(genTile, 0, 'blueium');
                      }
                  }
              }
          }
      }
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
