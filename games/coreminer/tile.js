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
 * @extends Coreminer.GameObject
 * @memberof Coreminer
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
    this.bombs = [];
    this.dirt = 0;
    this.isBase = false;
    this.isFalling = false;
    this.isHopper = false;
    this.isLadder = false;
    this.isSupport = false;
    this.miners = [];
    this.ore = 0;
    this.owner = null;
    this.shielding = 0;
    this.tileEast = null;
    this.tileNorth = null;
    this.tileSouth = null;
    this.tileWest = null;
    this.x = 0;
    this.y = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * An array of Bombs on this Tile.
   *
   * @type {Array.<Coreminer.Bomb>}
   */
  get bombs() {
    return client.gameManager.getMemberValue(this, 'bombs');
  }

  set bombs(value) {
    client.gameManager.setMemberValue(this, 'bombs', value);
  }


  /**
   * The amount of dirt on this Tile.
   *
   * @type {number}
   */
  get dirt() {
    return client.gameManager.getMemberValue(this, 'dirt');
  }

  set dirt(value) {
    client.gameManager.setMemberValue(this, 'dirt', value);
  }


  /**
   * Whether or not the Tile is a base Tile.
   *
   * @type {boolean}
   */
  get isBase() {
    return client.gameManager.getMemberValue(this, 'isBase');
  }

  set isBase(value) {
    client.gameManager.setMemberValue(this, 'isBase', value);
  }


  /**
   * Whether or not this Tile is about to fall after this turn.
   *
   * @type {boolean}
   */
  get isFalling() {
    return client.gameManager.getMemberValue(this, 'isFalling');
  }

  set isFalling(value) {
    client.gameManager.setMemberValue(this, 'isFalling', value);
  }


  /**
   * Whether or not a hopper is on this Tile.
   *
   * @type {boolean}
   */
  get isHopper() {
    return client.gameManager.getMemberValue(this, 'isHopper');
  }

  set isHopper(value) {
    client.gameManager.setMemberValue(this, 'isHopper', value);
  }


  /**
   * Whether or not a ladder is built on this Tile.
   *
   * @type {boolean}
   */
  get isLadder() {
    return client.gameManager.getMemberValue(this, 'isLadder');
  }

  set isLadder(value) {
    client.gameManager.setMemberValue(this, 'isLadder', value);
  }


  /**
   * Whether or not a support is built on this Tile.
   *
   * @type {boolean}
   */
  get isSupport() {
    return client.gameManager.getMemberValue(this, 'isSupport');
  }

  set isSupport(value) {
    client.gameManager.setMemberValue(this, 'isSupport', value);
  }


  /**
   * An array of the Miners on this Tile.
   *
   * @type {Array.<Coreminer.Miner>}
   */
  get miners() {
    return client.gameManager.getMemberValue(this, 'miners');
  }

  set miners(value) {
    client.gameManager.setMemberValue(this, 'miners', value);
  }


  /**
   * The amount of ore on this Tile.
   *
   * @type {number}
   */
  get ore() {
    return client.gameManager.getMemberValue(this, 'ore');
  }

  set ore(value) {
    client.gameManager.setMemberValue(this, 'ore', value);
  }


  /**
   * The owner of this Tile, or undefined if owned by no-one.
   *
   * @type {Coreminer.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The amount of shielding on this Tile.
   *
   * @type {number}
   */
  get shielding() {
    return client.gameManager.getMemberValue(this, 'shielding');
  }

  set shielding(value) {
    client.gameManager.setMemberValue(this, 'shielding', value);
  }


  /**
   * The Tile to the 'East' of this one (x+1, y). Null if out of bounds of the map.
   *
   * @type {Coreminer.Tile}
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
   * @type {Coreminer.Tile}
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
   * @type {Coreminer.Tile}
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
   * @type {Coreminer.Tile}
   */
  get tileWest() {
    return client.gameManager.getMemberValue(this, 'tileWest');
  }

  set tileWest(value) {
    client.gameManager.setMemberValue(this, 'tileWest', value);
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
