// Unit: A unit in the game. May be a manager, intern, or physicist.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A unit in the game. May be a manager, intern, or physicist.
 * @extends Newtonian.GameObject
 * @memberof Newtonian
 */
class Unit extends GameObject {
  /**
   * Initializes a Unit with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.acted = false;
    this.blueium = 0;
    this.blueiumOre = 0;
    this.health = 0;
    this.job = null;
    this.moves = 0;
    this.owner = null;
    this.redium = 0;
    this.rediumOre = 0;
    this.stunImmune = 0;
    this.stunTime = 0;
    this.tile = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * Whether or not this Unit has performed its action this turn.
   *
   * @type {boolean}
   */
  get acted() {
    return client.gameManager.getMemberValue(this, 'acted');
  }

  set acted(value) {
    client.gameManager.setMemberValue(this, 'acted', value);
  }


  /**
   * The amount of blueium carried by this unit. (0 to job carry capacity - other carried items).
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
   * The amount of blueium ore carried by this unit. (0 to job carry capacity - other carried items).
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
   * The remaining health of a unit.
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
   * The Job this Unit has.
   *
   * @type {Newtonian.Job}
   */
  get job() {
    return client.gameManager.getMemberValue(this, 'job');
  }

  set job(value) {
    client.gameManager.setMemberValue(this, 'job', value);
  }


  /**
   * The number of moves this unit has left this turn.
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
   * The Player that owns and can control this Unit.
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
   * The amount of redium carried by this unit. (0 to job carry capacity - other carried items).
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
   * The amount of redium ore carried by this unit. (0 to job carry capacity - other carried items).
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
   * Duration of stun immunity. (0 to timeImmune).
   *
   * @type {number}
   */
  get stunImmune() {
    return client.gameManager.getMemberValue(this, 'stunImmune');
  }

  set stunImmune(value) {
    client.gameManager.setMemberValue(this, 'stunImmune', value);
  }


  /**
   * Duration the unit is stunned. (0 to the game constant stunTime).
   *
   * @type {number}
   */
  get stunTime() {
    return client.gameManager.getMemberValue(this, 'stunTime');
  }

  set stunTime(value) {
    client.gameManager.setMemberValue(this, 'stunTime', value);
  }


  /**
   * The Tile this Unit is on.
   *
   * @type {Newtonian.Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }



  /**
   * Makes the unit do something to a machine or unit adjacent to its tile. Interns sabotage, physicists work. Interns stun physicist, physicist stuns manager, manager stuns intern.
   *
   * @param {Newtonian.Tile} tile - The tile the unit acts on.
   * @returns {boolean} - True if successfully acted, false otherwise.
   */
  act(tile) {
    return client.runOnServer(this, 'act', {
      tile: tile,
    });
  }


  /**
   * Attacks a unit on an adjacent tile.
   *
   * @param {Newtonian.Tile} tile - The Tile to attack.
   * @returns {boolean} - True if successfully attacked, false otherwise.
   */
  attack(tile) {
    return client.runOnServer(this, 'attack', {
      tile: tile,
    });
  }


  /**
   * Drops materials at the units feet or adjacent tile.
   *
   * @param {Newtonian.Tile} tile - The tile the materials will be dropped on.
   * @param {number} amount - The number of materials to dropped. Amounts <= 0 will drop all the materials.
   * @param {string} material - The material the unit will drop. 'redium', 'blueium', 'redium ore', or 'blueium ore'.
   * @returns {boolean} - True if successfully deposited, false otherwise.
   */
  drop(tile, amount, material) {
    return client.runOnServer(this, 'drop', {
      tile: tile,
      amount: amount,
      material: material,
    });
  }


  /**
   * Moves this Unit from its current Tile to an adjacent Tile.
   *
   * @param {Newtonian.Tile} tile - The Tile this Unit should move to.
   * @returns {boolean} - True if it moved, false otherwise.
   */
  move(tile) {
    return client.runOnServer(this, 'move', {
      tile: tile,
    });
  }


  /**
   * Picks up material at the units feet or adjacent tile.
   *
   * @param {Newtonian.Tile} tile - The tile the materials will be picked up from.
   * @param {number} amount - The amount of materials to pick up. Amounts <= 0 will pick up all the materials that the unit can.
   * @param {string} material - The material the unit will pick up. 'redium', 'blueium', 'redium ore', or 'blueium ore'.
   * @returns {boolean} - True if successfully deposited, false otherwise.
   */
  pickup(tile, amount, material) {
    return client.runOnServer(this, 'pickup', {
      tile: tile,
      amount: amount,
      material: material,
    });
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Unit;
