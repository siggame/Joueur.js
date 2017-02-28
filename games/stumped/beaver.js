// Beaver: A beaver in the game.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A beaver in the game.
 * @extends GameObject
 */
class Beaver extends GameObject {
  /**
   * initializes a Beaver with basic logic as provided by the Creer code generator
   *
   * @memberof Beaver
   * @private
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.actions = 0;
    this.branches = 0;
    this.distracted = 0;
    this.fish = 0;
    this.health = 0;
    this.job = null;
    this.moves = 0;
    this.owner = null;
    this.tile = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The number of actions remaining for the beaver this turn.
   *
   * @type {number}
   */
  get actions() {
    return client.gameManager.getMemberValue(this, 'actions');
  }

  set actions(value) {
    client.gameManager.setMemberValue(this, 'actions', value);
  }


  /**
   * The number of branches this beaver is holding.
   *
   * @type {number}
   */
  get branches() {
    return client.gameManager.getMemberValue(this, 'branches');
  }

  set branches(value) {
    client.gameManager.setMemberValue(this, 'branches', value);
  }


  /**
   * Number of turns this beaver is distracted for (0 means not distracted).
   *
   * @type {number}
   */
  get distracted() {
    return client.gameManager.getMemberValue(this, 'distracted');
  }

  set distracted(value) {
    client.gameManager.setMemberValue(this, 'distracted', value);
  }


  /**
   * The number of fish this beaver is holding.
   *
   * @type {number}
   */
  get fish() {
    return client.gameManager.getMemberValue(this, 'fish');
  }

  set fish(value) {
    client.gameManager.setMemberValue(this, 'fish', value);
  }


  /**
   * How much health this beaver has left.
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
   * The Job this beaver was recruited to do.
   *
   * @type {Job}
   */
  get job() {
    return client.gameManager.getMemberValue(this, 'job');
  }

  set job(value) {
    client.gameManager.setMemberValue(this, 'job', value);
  }


  /**
   * How many moves this beaver has left this turn.
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
   * The Player that owns and can control this beaver.
   *
   * @type {Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The tile this beaver is on.
   *
   * @type {Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }



  /**
   * Attacks another adjacent beaver.
   *
   * @param {Tile} tile - The tile of the beaver you want to attack.
   * @returns {boolean} - True if successfully attacked, false otherwise.
   */
  attack(tile) {
    return client.runOnServer(this, 'attack', {
      tile: tile,
    });
  }


  /**
   * Builds a lodge on the Beavers current tile.
   *
   * @returns {boolean} - True if successfully built a lodge, false otherwise.
   */
  buildLodge() {
    return client.runOnServer(this, 'buildLodge', {
    });
  }


  /**
   * Drops some of the given resource on the beaver's tile. Fish dropped in water disappear instantly, and fish dropped on land die one per tile per turn.
   *
   * @param {string} resource - The type of resource to drop ('branch' or 'fish').
   * @param {number} [amount] - The amount of the resource to drop, numbers <= 0 will drop all of that type.
   * @returns {boolean} - True if successfully dropped the resource, false otherwise.
   */
  drop(resource, amount) {
    if(arguments.length <= 1) {
      amount = 0;
    }

    return client.runOnServer(this, 'drop', {
      resource: resource,
      amount: amount,
    });
  }


  /**
   * Harvests the branches or fish from a Spawner on an adjacent tile.
   *
   * @param {Tile} tile - The tile you want to harvest.
   * @returns {boolean} - True if successfully harvested, false otherwise.
   */
  harvest(tile) {
    return client.runOnServer(this, 'harvest', {
      tile: tile,
    });
  }


  /**
   * Moves this beaver from its current tile to an adjacent tile.
   *
   * @param {Tile} tile - The tile this beaver should move to. Costs 2 moves normally, 3 if moving upstream, and 1 if moving downstream.
   * @returns {boolean} - True if the move worked, false otherwise.
   */
  move(tile) {
    return client.runOnServer(this, 'move', {
      tile: tile,
    });
  }


  /**
   * Picks up some branches or fish on the beaver's tile.
   *
   * @param {string} resource - The type of resource to pickup ('branch' or 'fish').
   * @param {number} [amount] - The amount of the resource to drop, numbers <= 0 will pickup all of that type.
   * @returns {boolean} - True if successfully picked up a resource, false otherwise.
   */
  pickup(resource, amount) {
    if(arguments.length <= 1) {
      amount = 0;
    }

    return client.runOnServer(this, 'pickup', {
      resource: resource,
      amount: amount,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Beaver;
