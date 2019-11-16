// This is where you build your AI for the Necrowar game.

const BaseAI = require(`${__basedir}/joueur/baseAI`);

// <<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
// <<-- /Creer-Merge: requires -->>

/**
 * This is the class to play the Necrowar game. This is where you should build your AI.
 * @memberof Necrowar
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
    return 'Necrowar JavaScript Player';
    // <<-- /Creer-Merge: getName -->>
  }

  /**
   * This is called once the game starts and your AI knows its playerID and game. You can initialize your AI here.
   */
  start() {
    // <<-- Creer-Merge: start -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // add your own start logic here
    // Set up varibales to track all relevant information
    this.spawnUnitTile = None
    this.spawnWorkerTile = None
    this.goldMines = []
    this.miners = []
    this.builders = []
    this.units = []
    this.grassByPath = []
    this.enemyCastle = this.player.opponent.towers[0]
    this.myCastle = this.player.towers[0]

    // Fill our variables with tile data
    for (let tile of this.player.side) {
      if (tile.isUnitSpawn)
            this.spawnUnitTile = tile
        else if (tile.isUnitSpawn)
            this.spawnWorkerTile = tile
        else if (tile.isGoldMine)
            this.goldMines.append(tile)
        else if (tile.isGrass)
            for (let neighbor of tile.getNeighbors())
                if (neighbor.isPath)
                    this.grassByPath.append(tile)
    }
        
    // Now we should have our spawn tiles, mines, and tower building locations!
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

    // Remove dead units from our lists
    this.miners = this.miners.filter((miner) => {miner.health > 0});
    this.builders = this.builders.filter((builder) => {builder.health > 0});
    this.units = this.units.filter((unit) => {unit.health > 0});

    // Spawn all three of our chosen unit types if necessary
    if (this.miners.length == 0)
      if (this.spawnWorkerTile.spawnWorker())
        this.miners.push(this.player.units[this.player.units.length-1]);
    
    if (this.builders.length == 0)
      if (this.spawnWorkerTile.spawnWorker())
        this.builders.push(this.player.units[this.player.units.length-1]);
    
    if (this.units.length == 0)
      if (this.spawnUnitTile.spawnUnit("ghoul"))
        this.units.push(this.player.units[this.player.units.length-1]);
    
    // Activate the units
    for (let miner of this.miners) {
      if (miner.tile.isGoldMine)
        miner.mine(miner.tile);
      else {
        path = this.findPathWorker(miner.tile, this.enemyCastle);
        for (let tile of path) {
          if (miner.moves <= 0)
            break;
          miner.move(tile);
        }
      }
    }

    for (let builder of this.builders) {
      path = this.findPathWorker(builder.tile, this.goldMines[0]);
      for (let tile of path) {
        if (builder.moves <= 0)
          break;
        builder.move(tile);
      }
      if (path.length == 0 && builder.moves > 0)
        builder.build("arrow");
    }

    for (let unit of this.units) {
      path = this.findPath(unit.tile, this.enemyCastle.tile);
      for (let tile of path) {
        if (unit.moves <= 0)
          break;
        unit.move(tile);
      }
      if (path.length == 0 && unit.moves > 0)
        unit.attack(this.enemyCastle.tile);
    }

    // Make towers attack anything adjacent to them
    // Note that they are not using their full range
    for (let tower of this.player.towers)
        adjacent = tower.tile.getNeighbors();
        for (let tile of adjacent)
            if (tile.unit && tile.unit.owner == this.player.opponent)
                tower.attack(tile)
    
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
  findPathWorker(start, goal) {
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
        if (neighbor && neighbor.id && !cameFrom[neighbor.id] && neighbor.isPathableWorker()) {
          // add it to the tiles to be explored and add where it came from for path reconstruction.
          fringe.push(neighbor);
          cameFrom[neighbor.id] = inspect;
        }
      }
    }

    // if we got here, no path was found
    return [];
  }
  //<<-- /Creer-Merge: functions -->>

}

module.exports = AI;
