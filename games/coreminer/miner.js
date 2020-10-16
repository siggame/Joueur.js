// Miner: A Miner in the game.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A Miner in the game.
 * @extends Coreminer.GameObject
 * @memberof Coreminer
 */
class Miner extends GameObject {
  /**
   * Initializes a Miner with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.bombs = 0;
    this.buildingMaterials = 0;
    this.currentUpgrade = null;
    this.dirt = 0;
    this.health = 0;
    this.miningPower = 0;
    this.moves = 0;
    this.ore = 0;
    this.owner = null;
    this.tile = null;
    this.upgradeLevel = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The number of bombs being carried by this Miner.
   *
   * @type {number}
   */
  get bombs() {
    return client.gameManager.getMemberValue(this, 'bombs');
  }

  set bombs(value) {
    client.gameManager.setMemberValue(this, 'bombs', value);
  }


  /**
   * The number of building materials carried by this Miner.
   *
   * @type {number}
   */
  get buildingMaterials() {
    return client.gameManager.getMemberValue(this, 'buildingMaterials');
  }

  set buildingMaterials(value) {
    client.gameManager.setMemberValue(this, 'buildingMaterials', value);
  }


  /**
   * The Upgrade this Miner is on.
   *
   * @type {Coreminer.Upgrade}
   */
  get currentUpgrade() {
    return client.gameManager.getMemberValue(this, 'currentUpgrade');
  }

  set currentUpgrade(value) {
    client.gameManager.setMemberValue(this, 'currentUpgrade', value);
  }


  /**
   * The amount of dirt carried by this Miner.
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
   * The remaining health of this Miner.
   *
   * @type {number}
   */
  get health() {
    return client.gameManager.getMemberValue(this, 'health');
  }

  set health(value) {
    client.gameManager.setMemberValue(this, 'health', value);
  }


  /**
   * The remaining mining power this Miner has this turn.
   *
   * @type {number}
   */
  get miningPower() {
    return client.gameManager.getMemberValue(this, 'miningPower');
  }

  set miningPower(value) {
    client.gameManager.setMemberValue(this, 'miningPower', value);
  }


  /**
   * The number of moves this Miner has left this turn.
   *
   * @type {number}
   */
  get moves() {
    return client.gameManager.getMemberValue(this, 'moves');
  }

  set moves(value) {
    client.gameManager.setMemberValue(this, 'moves', value);
  }


  /**
   * The amount of ore carried by this Miner.
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
   * The Player that owns and can control this Miner.
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
   * The Tile this Miner is on.
   *
   * @type {Coreminer.Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }


  /**
   * The upgrade level of this Miner. Starts at 0.
   *
   * @type {number}
   */
  get upgradeLevel() {
    return client.gameManager.getMemberValue(this, 'upgradeLevel');
  }

  set upgradeLevel(value) {
    client.gameManager.setMemberValue(this, 'upgradeLevel', value);
  }



  /**
   * Builds a support, shield, or ladder on Miner's Tile, or an adjacent Tile.
   *
   * @param {Coreminer.Tile} tile - The Tile to build on.
   * @param {string} type - The structure to build (support, ladder, or shield).
   * @returns {boolean} - True if successfully built, False otherwise.
   */
  build(tile, type) {
    return client.runOnServer(this, 'build', {
      tile: tile,
      type: type,
    });
  }


  /**
   * Purchase a resource from the Player's base or hopper.
   *
   * @param {string} resource - The type of resource to buy.
   * @param {number} amount - The amount of resource to buy. Amounts <= 0 will buy all of that material Player can.
   * @returns {boolean} - True if successfully purchased, false otherwise.
   */
  buy(resource, amount) {
    return client.runOnServer(this, 'buy', {
      resource: resource,
      amount: amount,
    });
  }


  /**
   * Dumps materials from cargo to an adjacent Tile. If the Tile is a base or a hopper Tile, materials are sold instead of placed.
   *
   * @param {Coreminer.Tile} tile - The Tile the materials will be dumped on.
   * @param {string} material - The material the Miner will drop. 'dirt', 'ore', or 'bomb'.
   * @param {number} amount - The number of materials to drop. Amounts <= 0 will drop all of the material.
   * @returns {boolean} - True if successfully dumped materials, false otherwise.
   */
  dump(tile, material, amount) {
    return client.runOnServer(this, 'dump', {
      tile: tile,
      material: material,
      amount: amount,
    });
  }


  /**
   * Mines the Tile the Miner is on or an adjacent Tile.
   *
   * @param {Coreminer.Tile} tile - The Tile the materials will be mined from.
   * @param {number} amount - The amount of material to mine up. Amounts <= 0 will mine all the materials that the Miner can.
   * @returns {boolean} - True if successfully mined, false otherwise.
   */
  mine(tile, amount) {
    return client.runOnServer(this, 'mine', {
      tile: tile,
      amount: amount,
    });
  }


  /**
   * Moves this Miner from its current Tile to an adjacent Tile.
   *
   * @param {Coreminer.Tile} tile - The Tile this Miner should move to.
   * @returns {boolean} - True if it moved, false otherwise.
   */
  move(tile) {
    return client.runOnServer(this, 'move', {
      tile: tile,
    });
  }


  /**
   * Transfers a resource from the one Miner to another.
   *
   * @param {Coreminer.Miner} miner - The Miner to transfer materials to.
   * @param {string} resource - The type of resource to transfer.
   * @param {number} amount - The amount of resource to transfer. Amounts <= 0 will transfer all the of the material.
   * @returns {boolean} - True if successfully transferred, false otherwise.
   */
  transfer(miner, resource, amount) {
    return client.runOnServer(this, 'transfer', {
      miner: miner,
      resource: resource,
      amount: amount,
    });
  }


  /**
   * Upgrade this Miner by installing an upgrade module.
   *
   * @returns {boolean} - True if successfully upgraded, False otherwise.
   */
  upgrade() {
    return client.runOnServer(this, 'upgrade', {
    });
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Miner;
