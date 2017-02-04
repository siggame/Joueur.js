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
 * @extends GameObject
 */
class Tile extends GameObject {
  /**
   * initializes a Tile with basic logic as provided by the Creer code generator
   *
   * @memberof Tile
   * @private
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.bottle = null;
    this.cowboy = null;
    this.furnishing = null;
    this.hasHazard = false;
    this.isBalcony = false;
    this.tileEast = null;
    this.tileNorth = null;
    this.tileSouth = null;
    this.tileWest = null;
    this.x = 0;
    this.y = 0;
    this.youngGun = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The beer Bottle currently flying over this Tile.
   *
   * @type {Bottle}
   */
  get bottle() {
    return client.gameManager.getMemberValue(this, 'bottle');
  }

  set bottle(value) {
    client.gameManager.setMemberValue(this, 'bottle', value);
  }


  /**
   * The Cowboy that is on this Tile, null otherwise.
   *
   * @type {Cowboy}
   */
  get cowboy() {
    return client.gameManager.getMemberValue(this, 'cowboy');
  }

  set cowboy(value) {
    client.gameManager.setMemberValue(this, 'cowboy', value);
  }


  /**
   * The furnishing that is on this Tile, null otherwise.
   *
   * @type {Furnishing}
   */
  get furnishing() {
    return client.gameManager.getMemberValue(this, 'furnishing');
  }

  set furnishing(value) {
    client.gameManager.setMemberValue(this, 'furnishing', value);
  }


  /**
   * If this Tile is pathable, but has a hazard that damages Cowboys that path through it.
   *
   * @type {boolean}
   */
  get hasHazard() {
    return client.gameManager.getMemberValue(this, 'hasHazard');
  }

  set hasHazard(value) {
    client.gameManager.setMemberValue(this, 'hasHazard', value);
  }


  /**
   * If this Tile is a balcony of the Saloon that YoungGuns walk around on, and can never be pathed through by Cowboys.
   *
   * @type {boolean}
   */
  get isBalcony() {
    return client.gameManager.getMemberValue(this, 'isBalcony');
  }

  set isBalcony(value) {
    client.gameManager.setMemberValue(this, 'isBalcony', value);
  }


  /**
   * The Tile to the 'East' of this one (x+1, y). Null if out of bounds of the map.
   *
   * @type {Tile}
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
   * @type {Tile}
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
   * @type {Tile}
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
   * @type {Tile}
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
   * The YoungGun on this tile, null otherwise.
   *
   * @type {YoungGun}
   */
  get youngGun() {
    return client.gameManager.getMemberValue(this, 'youngGun');
  }

  set youngGun(value) {
    client.gameManager.setMemberValue(this, 'youngGun', value);
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Tile;
