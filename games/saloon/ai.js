// This is where you build your AI for the Saloon game.

const BaseAI = require(`${__basedir}/joueur/baseAI`);

var seed = 4589347543;
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

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

    // This is "ShellAI", some basic code we've provided that does
    // everything in the game for demo purposed, but poorly so you
    // can get to optimizing or overwriting it ASAP
    //
    // ShellAI does a few things:
    // 1. Tries to spawn a new Cowboy
    // 2. Tries to move to a Piano
    // 3. Tries to play a Piano
    // 4. Tries to act

    const randomElement = (items) => items[Math.floor(random()*items.length)];
    console.log("Start of my turn: " + this.game.currentTurn, this.game.maxCowboysPerJob);

    // for steps 2, 3, and 4 we will use this cowboy:

    //--- 1. Try to spawn a Cowboy --\\

    // Randomly select a job.
    var callInJob = randomElement(this.game.jobs);
    var jobCount = 0;
    for(let i = 0; i < this.player.cowboys.length; i++) {
        var myCowboy = this.player.cowboys[i];
        if(!myCowboy.isDead && myCowboy.job === callInJob) {
            jobCount++;
        }
    }

    // Call in the new cowboy with that job if there aren't too many
    //   cowboys with that job already.
    if(this.player.youngGun.canCallIn && jobCount < this.game.maxCowboysPerJob) {
        console.log("1. Calling in: " + callInJob);
        this.player.youngGun.callIn(callInJob);
    }

    // Now let's use him
    for(let i = 0; i < this.player.cowboys.length; i++) {
        console.log("iteration", i);
      var activeCowboy = this.player.cowboys[i];
        //--- 2. Try to move to a Piano ---\\

        // find a piano
        var piano;
        for(let i = 0; i < this.game.furnishings.length; i++) {
            var furnishing = this.game.furnishings[i];
            if(furnishing.isPiano && !furnishing.isDestroyed) {
                piano = furnishing;
                break;
            }
        }

        // There will always be pianos or the game will end. No need to check for existence.
        // Attempt to move toward the piano by finding a path.
        if(activeCowboy.canMove && !activeCowboy.isDead) {
            console.log(`Trying to do stuff with ${activeCowboy}`);

            // find a path from the Tile this cowboy is on to the tile the piano is on
            var path = this.findPath(activeCowboy.tile, piano.tile);

            // if there is a path, move to it
            //      length 0 means no path could be found to the tile
            //      length 1 means the piano is adjacent, and we can't move onto the same tile as the piano
            if(path.length > 1) {
                console.log("2. Moving to Tile #" + path[0].id);
                activeCowboy.move(path[0]);
            }
        }



        //--- 3. Try to play a piano ---\\\

        // make sure the cowboy is alive and is not busy
        if(!activeCowboy.isDead && activeCowboy.turnsBusy === 0) {
            // look at all the neighboring (adjacent) tiles, and if they have a piano, play it
            var neighbors = activeCowboy.tile.getNeighbors();
            for(let i = 0; i < neighbors.length; i++) {
                var neighbor = neighbors[i];

                // if the neighboring tile has a piano
                if(neighbor.furnishing && neighbor.furnishing.isPiano && !neighbor.furnishing.isDestroyed) {
                    // then play it
                    console.log("3. Playing Furnishing (piano) #" + neighbor.furnishing.id);
                    activeCowboy.play(neighbor.furnishing);
                    break;
                }
            }
        }



        //--- 4. Try to act ---\\

        // make sure the cowboy is alive and is not busy
        console.log("cowboy #", activeCowboy.id, "is", activeCowboy.isDrunk, activeCowboy.turnsBusy);
        if(!activeCowboy.isDrunk && !activeCowboy.isDead && activeCowboy.turnsBusy === 0 && !this.player.siesta) {
            // Get a random neighboring tile.
            var randomNeighbor = randomElement(activeCowboy.tile.getNeighbors());

            // Based on job, act accordingly.
            switch(activeCowboy.job) {
                case "Bartender":
                    // Bartenders throw Bottles in a direction, and the Bottle makes cowboys drunk which causes them to walk in random directions
                    // so throw the bottle on a random neighboring tile, and make drunks move in a random direction
                    var direction = randomElement(activeCowboy.tile.directions());
                    console.log("4. Bartender acting on Tile #" + randomNeighbor.id + " with drunkDirection " + direction);
                    activeCowboy.act(randomNeighbor, direction);
                    break;
                case "Brawler":
                    // Brawlers cannot act, they instead automatically attack all neighboring tiles on the end of their owner's turn.
                    console.log("4. Brawlers cannot act.");
                    break;
                case "Sharpshooter":
                    // Sharpshooters build focus by standing still, they can then act(tile) on a neighboring tile to fire in that direction
                    if(activeCowboy.focus > 0) {
                        console.log("4. Sharpshooter acting on Tile #" + randomNeighbor.id);
                        activeCowboy.act(randomNeighbor); // fire in a random direction
                    }
                    else {
                        console.log("4. Sharpshooter doesn't have enough focus. (focus == " + activeCowboy.focus + ")");
                    }
                    break;
            }
        }
    }

    console.log("Ending my turn.");

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
