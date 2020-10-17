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
 * @extends Newtonian.GameObject
 * @memberof Newtonian
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
    this.blueium = 0;
    this.blueiumOre = 0;
    this.decoration = 0;
    this.direction = '';
    this.isWall = false;
    this.machine = null;
    this.owner = null;
    this.redium = 0;
    this.rediumOre = 0;
    this.tileEast = null;
    this.tileNorth = null;
    this.tileSouth = null;
    this.tileWest = null;
    this.type = '';
    this.unit = null;
    this.x = 0;
    this.y = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The amount of blueium on this tile.
   *
   * @type {number}
   */
  get blueium() {
    return client.gameManager.getMemberValue(this, 'blueium');
  }

  set blueium(value) {
    client.gameManager.setMemberValue(this, 'blueium', value);
  }


  /**
   * The amount of blueium ore on this tile.
   *
   * @type {number}
   */
  get blueiumOre() {
    return client.gameManager.getMemberValue(this, 'blueiumOre');
  }

  set blueiumOre(value) {
    client.gameManager.setMemberValue(this, 'blueiumOre', value);
  }


  /**
   * (Visualizer only) Different tile types, cracked, slightly dirty, etc. This has no effect on gameplay, but feel free to use it if you want.
   *
   * @type {number}
   */
  get decoration() {
    return client.gameManager.getMemberValue(this, 'decoration');
  }

  set decoration(value) {
    client.gameManager.setMemberValue(this, 'decoration', value);
  }


  /**
   * The direction of a conveyor belt ('blank', 'north', 'east', 'south', or 'west'). Blank means conveyor doesn't move.
   *
   * @type {string}
   */
  get direction() {
    return client.gameManager.getMemberValue(this, 'direction');
  }

  set direction(value) {
    client.gameManager.setMemberValue(this, 'direction', value);
  }


  /**
   * Whether or not the tile is a wall.
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
   * The Machine on this Tile if present, otherwise null.
   *
   * @type {Newtonian.Machine}
   */
  get machine() {
    return client.gameManager.getMemberValue(this, 'machine');
  }

  set machine(value) {
    client.gameManager.setMemberValue(this, 'machine', value);
  }


  /**
   * The owner of this Tile, or null if owned by no-one. Only for generators and spawn areas.
   *
   * @type {Newtonian.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The amount of redium on this tile.
   *
   * @type {number}
   */
  get redium() {
    return client.gameManager.getMemberValue(this, 'redium');
  }

  set redium(value) {
    client.gameManager.setMemberValue(this, 'redium', value);
  }


  /**
   * The amount of redium ore on this tile.
   *
   * @type {number}
   */
  get rediumOre() {
    return client.gameManager.getMemberValue(this, 'rediumOre');
  }

  set rediumOre(value) {
    client.gameManager.setMemberValue(this, 'rediumOre', value);
  }


  /**
   * The Tile to the 'East' of this one (x+1, y). Null if out of bounds of the map.
   *
   * @type {Newtonian.Tile}
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
   * @type {Newtonian.Tile}
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
   * @type {Newtonian.Tile}
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
   * @type {Newtonian.Tile}
   */
  get tileWest() {
    return client.gameManager.getMemberValue(this, 'tileWest');
  }

  set tileWest(value) {
    client.gameManager.setMemberValue(this, 'tileWest', value);
  }


  /**
   * The type of Tile this is ('normal', 'generator', 'conveyor', or 'spawn').
   *
   * @type {string}
   */
  get type() {
    return client.gameManager.getMemberValue(this, 'type');
  }

  set type(value) {
    client.gameManager.setMemberValue(this, 'type', value);
  }


  /**
   * The Unit on this Tile if present, otherwise null.
   *
   * @type {Newtonian.Unit}
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
