// Tile: A Tile in the game that makes up the 2D map grid.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A Tile in the game that makes up the 2D map grid.
 * @extends Necrowar.GameObject
 * @memberof Necrowar
 */
class Tile extends GameObject {
  /**
   * Initializes a Tile with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.corpses = 0;
    this.isCastle = false;
    this.isGoldMine = false;
    this.isGrass = false;
    this.isIslandGoldMine = false;
    this.isPath = false;
    this.isRiver = false;
    this.isTower = false;
    this.isUnitSpawn = false;
    this.isWall = false;
    this.isWorkerSpawn = false;
    this.numGhouls = 0;
    this.numHounds = 0;
    this.numZombies = 0;
    this.owner = null;
    this.tileEast = null;
    this.tileNorth = null;
    this.tileSouth = null;
    this.tileWest = null;
    this.tower = null;
    this.unit = null;
    this.x = 0;
    this.y = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The amount of corpses on this tile.
   *
   * @type {number}
   */
  get corpses() {
    return client.gameManager.getMemberValue(this, 'corpses');
  }

  set corpses(value) {
    client.gameManager.setMemberValue(this, 'corpses', value);
  }


  /**
   * Whether or not the tile is a castle tile.
   *
   * @type {boolean}
   */
  get isCastle() {
    return client.gameManager.getMemberValue(this, 'isCastle');
  }

  set isCastle(value) {
    client.gameManager.setMemberValue(this, 'isCastle', value);
  }


  /**
   * Whether or not the tile is considered to be a gold mine or not.
   *
   * @type {boolean}
   */
  get isGoldMine() {
    return client.gameManager.getMemberValue(this, 'isGoldMine');
  }

  set isGoldMine(value) {
    client.gameManager.setMemberValue(this, 'isGoldMine', value);
  }


  /**
   * Whether or not the tile is considered grass or not (Workers can walk on grass).
   *
   * @type {boolean}
   */
  get isGrass() {
    return client.gameManager.getMemberValue(this, 'isGrass');
  }

  set isGrass(value) {
    client.gameManager.setMemberValue(this, 'isGrass', value);
  }


  /**
   * Whether or not the tile is considered to be the island gold mine or not.
   *
   * @type {boolean}
   */
  get isIslandGoldMine() {
    return client.gameManager.getMemberValue(this, 'isIslandGoldMine');
  }

  set isIslandGoldMine(value) {
    client.gameManager.setMemberValue(this, 'isIslandGoldMine', value);
  }


  /**
   * Whether or not the tile is considered a path or not (Units can walk on paths).
   *
   * @type {boolean}
   */
  get isPath() {
    return client.gameManager.getMemberValue(this, 'isPath');
  }

  set isPath(value) {
    client.gameManager.setMemberValue(this, 'isPath', value);
  }


  /**
   * Whether or not the tile is considered a river or not.
   *
   * @type {boolean}
   */
  get isRiver() {
    return client.gameManager.getMemberValue(this, 'isRiver');
  }

  set isRiver(value) {
    client.gameManager.setMemberValue(this, 'isRiver', value);
  }


  /**
   * Whether or not the tile is considered a tower or not.
   *
   * @type {boolean}
   */
  get isTower() {
    return client.gameManager.getMemberValue(this, 'isTower');
  }

  set isTower(value) {
    client.gameManager.setMemberValue(this, 'isTower', value);
  }


  /**
   * Whether or not the tile is the unit spawn.
   *
   * @type {boolean}
   */
  get isUnitSpawn() {
    return client.gameManager.getMemberValue(this, 'isUnitSpawn');
  }

  set isUnitSpawn(value) {
    client.gameManager.setMemberValue(this, 'isUnitSpawn', value);
  }


  /**
   * Whether or not the tile can be moved on by workers.
   *
   * @type {boolean}
   */
  get isWall() {
    return client.gameManager.getMemberValue(this, 'isWall');
  }

  set isWall(value) {
    client.gameManager.setMemberValue(this, 'isWall', value);
  }


  /**
   * Whether or not the tile is the worker spawn.
   *
   * @type {boolean}
   */
  get isWorkerSpawn() {
    return client.gameManager.getMemberValue(this, 'isWorkerSpawn');
  }

  set isWorkerSpawn(value) {
    client.gameManager.setMemberValue(this, 'isWorkerSpawn', value);
  }


  /**
   * The amount of Ghouls on this tile.
   *
   * @type {number}
   */
  get numGhouls() {
    return client.gameManager.getMemberValue(this, 'numGhouls');
  }

  set numGhouls(value) {
    client.gameManager.setMemberValue(this, 'numGhouls', value);
  }


  /**
   * The amount of Hounds on this tile.
   *
   * @type {number}
   */
  get numHounds() {
    return client.gameManager.getMemberValue(this, 'numHounds');
  }

  set numHounds(value) {
    client.gameManager.setMemberValue(this, 'numHounds', value);
  }


  /**
   * The amount of Zombies on this tile.
   *
   * @type {number}
   */
  get numZombies() {
    return client.gameManager.getMemberValue(this, 'numZombies');
  }

  set numZombies(value) {
    client.gameManager.setMemberValue(this, 'numZombies', value);
  }


  /**
   * Which player owns this tile, only applies to grass tiles for workers, NULL otherwise.
   *
   * @type {Necrowar.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The Tile to the 'East' of this one (x+1, y). Null if out of bounds of the map.
   *
   * @type {Necrowar.Tile}
   */
  get tileEast() {
    return client.gameManager.getMemberValue(this, 'tileEast');
  }

  set tileEast(value) {
    client.gameManager.setMemberValue(this, 'tileEast', value);
  }


  /**
   * The Tile to the 'North' of this one (x, y-1). Null if out of bounds of the map.
   *
   * @type {Necrowar.Tile}
   */
  get tileNorth() {
    return client.gameManager.getMemberValue(this, 'tileNorth');
  }

  set tileNorth(value) {
    client.gameManager.setMemberValue(this, 'tileNorth', value);
  }


  /**
   * The Tile to the 'South' of this one (x, y+1). Null if out of bounds of the map.
   *
   * @type {Necrowar.Tile}
   */
  get tileSouth() {
    return client.gameManager.getMemberValue(this, 'tileSouth');
  }

  set tileSouth(value) {
    client.gameManager.setMemberValue(this, 'tileSouth', value);
  }


  /**
   * The Tile to the 'West' of this one (x-1, y). Null if out of bounds of the map.
   *
   * @type {Necrowar.Tile}
   */
  get tileWest() {
    return client.gameManager.getMemberValue(this, 'tileWest');
  }

  set tileWest(value) {
    client.gameManager.setMemberValue(this, 'tileWest', value);
  }


  /**
   * The Tower on this Tile if present, otherwise null.
   *
   * @type {Necrowar.Tower}
   */
  get tower() {
    return client.gameManager.getMemberValue(this, 'tower');
  }

  set tower(value) {
    client.gameManager.setMemberValue(this, 'tower', value);
  }


  /**
   * The Unit on this Tile if present, otherwise null.
   *
   * @type {Necrowar.Unit}
   */
  get unit() {
    return client.gameManager.getMemberValue(this, 'unit');
  }

  set unit(value) {
    client.gameManager.setMemberValue(this, 'unit', value);
  }


  /**
   * The x (horizontal) position of this Tile.
   *
   * @type {number}
   */
  get x() {
    return client.gameManager.getMemberValue(this, 'x');
  }

  set x(value) {
    client.gameManager.setMemberValue(this, 'x', value);
  }


  /**
   * The y (vertical) position of this Tile.
   *
   * @type {number}
   */
  get y() {
    return client.gameManager.getMemberValue(this, 'y');
  }

  set y(value) {
    client.gameManager.setMemberValue(this, 'y', value);
  }



  /**
   * Resurrect the corpses on this tile into Zombies.
   *
   * @param {number} num - Number of zombies to resurrect.
   * @returns {boolean} - True if successful res, false otherwise.
   */
  res(num) {
    return client.runOnServer(this, 'res', {
      num: num,
    });
  }


  /**
   * Spawns a fighting unit on the correct tile.
   *
   * @param {string} title - The title of the desired unit type.
   * @returns {boolean} - True if successfully spawned, false otherwise.
   */
  spawnUnit(title) {
    return client.runOnServer(this, 'spawnUnit', {
      title: title,
    });
  }


  /**
   * Spawns a worker on the correct tile.
   *
   * @returns {boolean} - True if successfully spawned, false otherwise.
   */
  spawnWorker() {
    return client.runOnServer(this, 'spawnWorker', {
    });
  }

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
      const neighbor = this[`tile${direction}`];
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
    // <<-- Creer-Merge: is_pathable_builtin -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    return false; // DEVELOPER ADD LOGIC HERE
    // <<-- /Creer-Merge: is_pathable_builtin -->>
  }

  /**
   * Checks if this Tile has a specific neighboring Tile
   *
   * @returns {boolean} true if the tile is a neighbor of this Tile, false otherwise
   */
  hasNeighbor(tile) {
    return Boolean(tile && (this.tileNorth === tile || this.tileEast === tile || this.tileSouth === tile || this.tileEast === tile));
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Tile;
