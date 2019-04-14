// This is where you build your AI for the Stardash game.

const BaseAI = require(`${__basedir}/joueur/baseAI`);

// <<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
// <<-- /Creer-Merge: requires -->>

/**
 * This is the class to play the Stardash game. This is where you should build your AI.
 * @memberof Stardash
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
    return 'Stardash JavaScript Player';
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
    // Note that this code is not efficient whatsoever, you should make improvements to almost every aspect of it.
    // This code is only to demonstrate the use of some of the game's functions.
    // For more information about these and other game mechanics, refer to the documentation here: TODO: ADD LINK
    // Feel free to look at all the functions in the other files in this directory, but do not edit anything other than this file.

    // Gets the coordinates of your home base(planet).
    let home_x = this.player.home_base.x;
    let home_y = this.player.home_base.y;

    // Gets the coordinates of the sun.
    let sun = this.game.bodies[2];

    // Checks if we have any units.
    if (len(this.player.units) === 0) {
       // If we don't have any units, spawn a miner.
       this.player.home_base.spawn(home_x, home_y, "miner");
    }

    
    // Gets the first unit in our list of units.
    let unit = this.player.units[0];
   
    if (unit.energy < 0.5 * unit.job.energy) {
        // If the miner is below 50 % energy, goes back to its home base to heal.
        this.find_dash(unit, home_x, home_y);
    } else if (unit.genarium < unit.job.carry_limit) {
        // If there is space in our inventory, go mine an asteroid for genarium (the worst mineral btw).
        let target = null;
        let best_dist = 9999;
        let distance = 9999;
        // Finds the closest asteroid that contains genarium to target.
        for (let body of this.game.bodies) {
            // Only looks at asteroids that contain genarium
            if (body.material_type === 'genarium') {
                // Gets the distance from the unit to the body
                distance = this.distance(unit.x, unit.y, body.x, body.y);

                // Updates the target if the new asteroid is closer to our unit.
                if (distance < best_dist) {
                    target = body;
                    best_dist = distance;
                }
            }
        }

        if (target !== null) {
            // Tries to move to the asteroid.
            this.find_dash(unit, target.x, target.y);

            // Checks if the miner is within mining range of the target asteroid.
            if (this.distance(unit.x, unit.y, target.x, target.y) < unit.job.range) {
                unit.mine(target);
            }
        }
    } else {
        // Otherwise return to home base and drop off any mined genarium and restore energy in the process.
        this.find_dash(unit, home_x, home_y);
    }

    return true;
    // <<-- /Creer-Merge: runTurn -->>
  }

  /**
   * Returns the Euclidian distance between two points.
   * 
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * 
   * @returns {float} - The distance between two points.
   */
  distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2.0) + Math.pow((y1 - y2), 2.0));
  }

  /**
   * This is an EXTREMELY basic pathfinding function to move your ship until it can dask to your target.
   * You REALLY should improve this functionality or make your own new one, since this is VERY basic and inefficient.
   * Like, for real.
   * 
   * @param {Stardash.Unit} unit
   * @param {number} x
   * @param {number} y
   * 
   */
  find_dash(unit, x, y) {
    // Gets the sun from the list of bodies.
    let sun = this.game.bodies[2];
    while (unit.moves >= 1) {
      if (unit.safe(x, y) && unit.energy >= math.ceil((this.distance(unit.x, unit.y, x, y) / this.game.dash_distance) * this.game.dash_cost)) {
        // Dashes if it is safe to dash to the point and we have enough energy to dash there.
        unit.dash(x, y);

        // Breaks out of the loop since we can't do anything else now.
        break;
      }
      else {
        // Otherwise tries moving towards the target.

        // The x and y modifiers for movement.
        let x_mod = 0;
        let y_mod = 0;

        if (unit.x < x || (y < sun.y && unit.y > sun.y || y > sun.y && unit.y < sun.y) && x > sun.x) {
          // Move to the right if the destination is to the right or on the other side of the sun on the right side.
          x_mod = 1;
        } else if (unit.x > x || (y < sun.y && unit.y > sun.y || y > sun.y && unit.y < sun.y) && x < sun.x) {
          // Move to the left if the destination is to the left or on the other side of the sun on the left side.
          x_mod = -1;
        } 

        if (unit.y < y || (x < sun.x && unit.x > sun.x || x > sun.x && unit.x < sun.x) && y > sun.y) {
          // Move down if the destination is down or on the other side of the sun on the lower side.
          y_mod = 1;
        } else if (unit.y > y || (x < sun.x && unit.x > sun.x || x > sun.x && unit.x < sun.x) && y < sun.y) {
          // Move up if the destination is up or on the other side of the sun on the upper side.
          y_mod = -1;
        }

        if (x_mod != 0 && y_mod != 0 && !(unit.safe(unit.x + x_mod, unit.y + y_mod))) {
          // Special case if we cannot safely move diagonally.
          if (unit.safe(unit.x + x_mod, unit.y)) {
            // Only move horizontally if it is safe.
            y_mod = 0;
          } else if (unit.safe(unit.x, unit.y + y_mod)) {
            // Only move vertically if it is safe.
            x_mod = 0;
          }
        }

        if (unit.moves < Math.sqrt(2) && x_mod !== 0 && y_mod !== 0) {
          // Special case if we only have 1 move left and are trying to move 2.
          if (unit.safe(unit.x + x_mod, unit.y)) {
            y_mod = 0;
          } else if (unit.safe(unit.x, unit.y + y_mod)) {
            x_mod = 0;
          } else {
            break;
          }
        }

        if ((x_mod !== 0 || y_mod !== 0) && (Math.sqrt(Math.pow(x_mod, 2) + Math.pow(y_mod, 2)) >= unit.moves)) {
          // Tries to move if either of the modifiers is not zero (we are actually moving somewhere).
          unit.move(unit.x + x_mod, unit.y + y_mod);
        } else {
          // Breaks otherwise, since something probably went wrong.
          break;
        }
      }
    }
    
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add for your AI
  //<<-- /Creer-Merge: functions -->>

}

module.exports = AI;
