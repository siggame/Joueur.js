// Unit: A unit in the game.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A unit in the game.
 * @extends Catastrophe.GameObject
 * @memberof Catastrophe
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
    this.energy = 0;
    this.food = 0;
    this.job = null;
    this.materials = 0;
    this.movementTarget = null;
    this.moves = 0;
    this.owner = null;
    this.squad = [];
    this.starving = false;
    this.tile = null;
    this.turnsToDie = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * Whether this Unit has performed its action this turn.
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
   * The amount of energy this Unit has (from 0.0 to 100.0).
   *
   * @type {number}
   */
  get energy() {
    return client.gameManager.getMemberValue(this, 'energy');
  }

  set energy(value) {
    client.gameManager.setMemberValue(this, 'energy', value);
  }


  /**
   * The amount of food this Unit is holding.
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
   * The Job this Unit was recruited to do.
   *
   * @type {Catastrophe.Job}
   */
  get job() {
    return client.gameManager.getMemberValue(this, 'job');
  }

  set job(value) {
    client.gameManager.setMemberValue(this, 'job', value);
  }


  /**
   * The amount of materials this Unit is holding.
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
   * The tile this Unit is moving to. This only applies to neutral fresh humans spawned on the road. Otherwise, the tile this Unit is on.
   *
   * @type {Catastrophe.Tile}
   */
  get movementTarget() {
    return client.gameManager.getMemberValue(this, 'movementTarget');
  }

  set movementTarget(value) {
    client.gameManager.setMemberValue(this, 'movementTarget', value);
  }


  /**
   * How many moves this Unit has left this turn.
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
   * The Player that owns and can control this Unit, or null if the Unit is neutral.
   *
   * @type {Catastrophe.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The Units in the same squad as this Unit. Units in the same squad attack and defend together.
   *
   * @type {Array.<Catastrophe.Unit>}
   */
  get squad() {
    return client.gameManager.getMemberValue(this, 'squad');
  }

  set squad(value) {
    client.gameManager.setMemberValue(this, 'squad', value);
  }


  /**
   * Whether this Unit is starving. Starving Units regenerate energy at half the rate they normally would while resting.
   *
   * @type {boolean}
   */
  get starving() {
    return client.gameManager.getMemberValue(this, 'starving');
  }

  set starving(value) {
    client.gameManager.setMemberValue(this, 'starving', value);
  }


  /**
   * The Tile this Unit is on.
   *
   * @type {Catastrophe.Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }


  /**
   * The number of turns before this Unit dies. This only applies to neutral fresh humans created from combat. Otherwise, 0.
   *
   * @type {number}
   */
  get turnsToDie() {
    return client.gameManager.getMemberValue(this, 'turnsToDie');
  }

  set turnsToDie(value) {
    client.gameManager.setMemberValue(this, 'turnsToDie', value);
  }



  /**
   * Attacks an adjacent Tile. Costs an action for each Unit in this Unit's squad. Units in the squad without an action don't participate in combat. Units in combat cannot move afterwards. Attacking structures will not give materials.
   *
   * @param {Catastrophe.Tile} tile - The Tile to attack.
   * @returns {boolean} - True if successfully attacked, false otherwise.
   */
  attack(tile) {
    return client.runOnServer(this, 'attack', {
      tile: tile,
    });
  }


  /**
   * Changes this Unit's Job. Must be at max energy (100) to change Jobs.
   *
   * @param {string} job - The name of the Job to change to.
   * @returns {boolean} - True if successfully changed Jobs, false otherwise.
   */
  changeJob(job) {
    return client.runOnServer(this, 'changeJob', {
      job: job,
    });
  }


  /**
   * Constructs a Structure on an adjacent Tile.
   *
   * @param {Catastrophe.Tile} tile - The Tile to construct the Structure on. It must have enough materials on it for a Structure to be constructed.
   * @param {string} type - The type of Structure to construct on that Tile.
   * @returns {boolean} - True if successfully constructed a structure, false otherwise.
   */
  construct(tile, type) {
    return client.runOnServer(this, 'construct', {
      tile: tile,
      type: type,
    });
  }


  /**
   * Converts an adjacent Unit to your side.
   *
   * @param {Catastrophe.Tile} tile - The Tile with the Unit to convert.
   * @returns {boolean} - True if successfully converted, false otherwise.
   */
  convert(tile) {
    return client.runOnServer(this, 'convert', {
      tile: tile,
    });
  }


  /**
   * Removes materials from an adjacent Tile's Structure. You cannot deconstruct friendly structures (see `Unit.attack`).
   *
   * @param {Catastrophe.Tile} tile - The Tile to deconstruct. It must have a Structure on it.
   * @returns {boolean} - True if successfully deconstructed, false otherwise.
   */
  deconstruct(tile) {
    return client.runOnServer(this, 'deconstruct', {
      tile: tile,
    });
  }


  /**
   * Drops some of the given resource on or adjacent to the Unit's Tile. Does not count as an action.
   *
   * @param {Catastrophe.Tile} tile - The Tile to drop materials/food on.
   * @param {string} resource - The type of resource to drop ('materials' or 'food').
   * @param {number} [amount] - The amount of the resource to drop. Amounts <= 0 will drop as much as possible.
   * @returns {boolean} - True if successfully dropped the resource, false otherwise.
   */
  drop(tile, resource, amount) {
    if(arguments.length <= 2) {
      amount = 0;
    }

    return client.runOnServer(this, 'drop', {
      tile: tile,
      resource: resource,
      amount: amount,
    });
  }


  /**
   * Harvests the food on an adjacent Tile.
   *
   * @param {Catastrophe.Tile} tile - The Tile you want to harvest.
   * @returns {boolean} - True if successfully harvested, false otherwise.
   */
  harvest(tile) {
    return client.runOnServer(this, 'harvest', {
      tile: tile,
    });
  }


  /**
   * Moves this Unit from its current Tile to an adjacent Tile.
   *
   * @param {Catastrophe.Tile} tile - The Tile this Unit should move to.
   * @returns {boolean} - True if it moved, false otherwise.
   */
  move(tile) {
    return client.runOnServer(this, 'move', {
      tile: tile,
    });
  }


  /**
   * Picks up some materials or food on or adjacent to the Unit's Tile. Does not count as an action.
   *
   * @param {Catastrophe.Tile} tile - The Tile to pickup materials/food from.
   * @param {string} resource - The type of resource to pickup ('materials' or 'food').
   * @param {number} [amount] - The amount of the resource to pickup. Amounts <= 0 will pickup as much as possible.
   * @returns {boolean} - True if successfully picked up a resource, false otherwise.
   */
  pickup(tile, resource, amount) {
    if(arguments.length <= 2) {
      amount = 0;
    }

    return client.runOnServer(this, 'pickup', {
      tile: tile,
      resource: resource,
      amount: amount,
    });
  }


  /**
   * Regenerates energy. Must be in range of a friendly shelter to rest. Costs an action. Units cannot move after resting.
   *
   * @returns {boolean} - True if successfully rested, false otherwise.
   */
  rest() {
    return client.runOnServer(this, 'rest', {
    });
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Unit;
