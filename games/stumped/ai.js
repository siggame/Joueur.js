// This is where you build your AI for the Stumped game.

const BaseAI = require(`${__basedir}/joueur/baseAI`);

// <<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
function randomElement(items) {
  return items[Math.floor(Math.random()*items.length)];
}

// Simply returns a shuffled copy of an array
function shuffled(a) {
  a = a.slice();
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
  return a;
}
// <<-- /Creer-Merge: requires -->>

/**
 * This is the class to play the Stumped game. This is where you should build your AI.
 * @memberof Stumped
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
    return 'Stumped JavaScript Player';
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
    // This is your Stumped ShellAI
    // ShellAI is intended to be a simple AI that does everything possible in the game, but plays the game very poorly
    // This example code does the following:
    // 1. Grabs a single beaver
    // 2. tries to move the beaver
    // 3. tries to do one of the 5 actions on it
    // 4. Grabs a lodge and tries to recruit a new beaver

    // First let's do a simple print statement telling us what turn we are on
    console.log(`My Turn ${this.game.currentTurn} with ${this.player.beavers.length} Beavers`);

    // 1. get the first beaver to try to do things with
    for (const beaver of this.player.beavers) {

      // if we have a beaver, and it's not distracted, and it is alive (health greater than 0)
      if (beaver && beaver.turnsDistracted === 0 && beaver.health > 0) {
        // then let's try to do stuff with it

        // 2. Try to move the beaver
        if (beaver.moves >= 3) {
          // then it has enough moves to move in any direction, so let's move it

          // find a spawner to move to
          let target = null;
          for (const tile of this.game.tiles) {
            if (tile.spawner && tile.spawner.health > 1) {
              // then we found a healthy spawner, let's target that tile to move to
              target = tile;
              break;
            }
          }

          // If we found a target tile, path to it
          if (target) {
            // use the pathfinding algorithm below to make a path to the spawner's target tile
            const path = this.findPath(beaver.tile, target);

            // if there is a path, move to it
            //      length 0 means no path could be found to the tile
            //      length 1 means the target is adjacent, and we can't move onto the same tile as the spawner
            //      length 2+ means we have to move towards it
            if (path.length > 1) {
              console.log(`Moving ${beaver} towards ${target}`);
              beaver.move(path[0]);
            }
          }
        }

        // 3. Try to do an action on the beaver
        if (beaver.actions > 0) {
          // then let's try to do an action!

          // Do a random action!
          const action = randomElement(['buildLodge', 'attack', 'pickup', 'drop', 'harvest']);

          // how much this beaver is carrying, used for calculations
          const load = beaver.branches + beaver.food;

          switch (action) {
            case 'buildLodge':
              // if the beaver has enough branches to build a lodge
              //   and the tile does not already have a lodge, then do so
              if ((beaver.branches + beaver.tile.branches) >= this.player.branchesToBuildLodge && !beaver.tile.lodgeOwner) {
                console.log(`${beaver} building lodge`);
                beaver.buildLodge();
              }
              break;
            case 'attack':
              // look at all our neighbor tiles and if they have a beaver attack it!
              for (const neighbor of shuffled(beaver.tile.getNeighbors())) {
                if (neighbor.beaver) {
                  console.log(`${beaver} attacking ${neighbor.beaver}`);
                  beaver.attack(neighbor.beaver);
                  break;
                }
              }
              break;
            case 'pickup':
              // make an array of our neighboring tiles + our tile as all can be picked up from
              const pickupTiles = shuffled(beaver.tile.getNeighbors().concat([beaver.tile]));

              // if the beaver can carry more resources, try to pick something up
              if (load < beaver.job.carryLimit) {
                for (const tile of pickupTiles) {
                  // try to pickup branches
                  if (tile.branches > 0) {
                    console.log(`${beaver} picking up branches`);
                    beaver.pickup(tile, 'branches', 1);
                    break;
                  }
                  // try to pickup food
                  else if (tile.food > 0) {
                    console.log(`${beaver} picking up food`);
                    beaver.pickup(tile, 'food', 1);
                    break;
                  }
                }
              }
              break;
            case 'drop':
              // choose a random tile from our neighbors + out tile to drop stuff on
              const dropTiles = shuffled(beaver.tile.getNeighbors().concat([beaver.tile]));

              // find a valid tile to drop resources onto
              let tileToDropOn = null;
              for (const tile of dropTiles) {
                if (!tile.spawner) {
                  tileToDropOn = tile;
                  break;
                }
              }

              // if there is a tile that resources can be dropped on
              if (tileToDropOn) {
                // if we have branches to drop
                if (beaver.branches > 0) {
                  console.log(`${beaver} dropping 1 branch`);
                  beaver.drop(tileToDropOn, 'branches', 1);
                }
                // or if we have food to drop
                else if (beaver.food > 0) {
                  console.log(`${beaver} dropping 1 food`);
                  beaver.drop(tileToDropOn, 'food', 1);
                }
              }
              break;
            case 'harvest':
              // if we can carry more, try to harvest something
              if (load < beaver.job.carryLimit) {
                // try to find a neighboring tile with a spawner on it to harvest from
                for (const neighbor of shuffled(beaver.tile.getNeighbors())) {
                  // if it has a spawner on that tile, harvest from it
                  if(neighbor.spawner) {
                    console.log(`${beaver} harvesting ${neighbor.spawner}`);
                    beaver.harvest(neighbor.spawner);
                    break;
                  }
                }
              }
              break;
          }
        }
      }
    }

    // now try to spawn a beaver if we have lodges

    for (const lodge of this.player.lodges) {
      // if we found a lodge and it has no beaver blocking it
      if (lodge && !lodge.beaver) {
        // then this lodge can have a new beaver appear here

        // We need to know how many beavers we have to see if they are free to spawn
        let aliveBeavers = this.player.beavers.filter((b) => b.health > 0).length;

        // and we need a Job to spawn
        const job = randomElement(this.game.jobs);

        // if we have less beavers than the freeBeavers count, it is free to spawn
        //    otherwise if that lodge has enough food on it to cover the job's cost
        if (aliveBeavers < this.game.freeBeaversCount || lodge.food >= job.cost) {
          // then spawn a new beaver of that job!
          console.log(`recruiting ${job} to ${lodge}`);
          job.recruit(lodge);
          aliveBeavers++;
        }
      }
    }

    console.log('Done with our turn');
    return true; // to signify that we are truly done with this turn
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
