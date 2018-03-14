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
 * @extends Catastrophe.GameObject
 * @memberof Catastrophe
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
    this.food = 0;
    this.harvestRate = 0;
    this.materials = 0;
    this.structure = null;
    this.tileEast = null;
    this.tileNorth = null;
    this.tileSouth = null;
    this.tileWest = null;
    this.turnsToHarvest = 0;
    this.unit = null;
    this.x = 0;
    this.y = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The number of food dropped on this Tile.
   *
   * @type {number}
   */
  get food() {
    return client.gameManager.getMemberValue(this, 'food');
  }

  set food(value) {
    client.gameManager.setMemberValue(this, 'food', value);
  }


  /**
   * The amount of food that can be harvested from this Tile per turn.
   *
   * @type {number}
   */
  get harvestRate() {
    return client.gameManager.getMemberValue(this, 'harvestRate');
  }

  set harvestRate(value) {
    client.gameManager.setMemberValue(this, 'harvestRate', value);
  }


  /**
   * The number of materials dropped on this Tile.
   *
   * @type {number}
   */
  get materials() {
    return client.gameManager.getMemberValue(this, 'materials');
  }

  set materials(value) {
    client.gameManager.setMemberValue(this, 'materials', value);
  }


  /**
   * The Structure on this Tile if present, otherwise null.
   *
   * @type {Catastrophe.Structure}
   */
  get structure() {
    return client.gameManager.getMemberValue(this, 'structure');
  }

  set structure(value) {
    client.gameManager.setMemberValue(this, 'structure', value);
  }


  /**
   * The Tile to the 'East' of this one (x+1, y). Null if out of bounds of the map.
   *
   * @type {Catastrophe.Tile}
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
   * @type {Catastrophe.Tile}
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
   * @type {Catastrophe.Tile}
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
   * @type {Catastrophe.Tile}
   */
  get tileWest() {
    return client.gameManager.getMemberValue(this, 'tileWest');
  }

  set tileWest(value) {
    client.gameManager.setMemberValue(this, 'tileWest', value);
  }


  /**
   * The amount of turns before this resource can be harvested.
   *
   * @type {number}
   */
  get turnsToHarvest() {
    return client.gameManager.getMemberValue(this, 'turnsToHarvest');
  }

  set turnsToHarvest(value) {
    client.gameManager.setMemberValue(this, 'turnsToHarvest', value);
  }


  /**
   * The Unit on this Tile if present, otherwise null.
   *
   * @type {Catastrophe.Unit}
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
