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
 * @extends Stumped.GameObject
 * @memberof Stumped
 */
class Beaver extends GameObject {
  /**
   * Initializes a Beaver with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.actions = 0;
    this.branches = 0;
    this.food = 0;
    this.health = 0;
    this.job = null;
    this.moves = 0;
    this.owner = null;
    this.recruited = false;
    this.tile = null;
    this.turnsDistracted = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The number of actions remaining for the Beaver this turn.
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
   * The amount of branches this Beaver is holding.
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
   * The amount of food this Beaver is holding.
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
   * How much health this Beaver has left.
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
   * The Job this Beaver was recruited to do.
   *
   * @type {Stumped.Job}
   */
  get job() {
    return client.gameManager.getMemberValue(this, 'job');
  }

  set job(value) {
    client.gameManager.setMemberValue(this, 'job', value);
  }


  /**
   * How many moves this Beaver has left this turn.
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
   * The Player that owns and can control this Beaver.
   *
   * @type {Stumped.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * True if the Beaver has finished being recruited and can do things, False otherwise.
   *
   * @type {boolean}
   */
  get recruited() {
    return client.gameManager.getMemberValue(this, 'recruited');
  }

  set recruited(value) {
    client.gameManager.setMemberValue(this, 'recruited', value);
  }


  /**
   * The Tile this Beaver is on.
   *
   * @type {Stumped.Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }


  /**
   * Number of turns this Beaver is distracted for (0 means not distracted).
   *
   * @type {number}
   */
  get turnsDistracted() {
    return client.gameManager.getMemberValue(this, 'turnsDistracted');
  }

  set turnsDistracted(value) {
    client.gameManager.setMemberValue(this, 'turnsDistracted', value);
  }



  /**
   * Attacks another adjacent beaver.
   *
   * @param {Stumped.Beaver} beaver - The Beaver to attack. Must be on an adjacent Tile.
   * @returns {boolean} - True if successfully attacked, false otherwise.
   */
  attack(beaver) {
    return client.runOnServer(this, 'attack', {
      beaver: beaver,
    });
  }


  /**
   * Builds a lodge on the Beavers current Tile.
   *
   * @returns {boolean} - True if successfully built a lodge, false otherwise.
   */
  buildLodge() {
    return client.runOnServer(this, 'buildLodge', {
    });
  }


  /**
   * Drops some of the given resource on the beaver's Tile.
   *
   * @param {Stumped.Tile} tile - The Tile to drop branches/food on. Must be the same Tile that the Beaver is on, or an adjacent one.
   * @param {string} resource - The type of resource to drop ('branches' or 'food').
   * @param {number} [amount] - The amount of the resource to drop, numbers <= 0 will drop all the resource type.
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
   * Harvests the branches or food from a Spawner on an adjacent Tile.
   *
   * @param {Stumped.Spawner} spawner - The Spawner you want to harvest. Must be on an adjacent Tile.
   * @returns {boolean} - True if successfully harvested, false otherwise.
   */
  harvest(spawner) {
    return client.runOnServer(this, 'harvest', {
      spawner: spawner,
    });
  }


  /**
   * Moves this Beaver from its current Tile to an adjacent Tile.
   *
   * @param {Stumped.Tile} tile - The Tile this Beaver should move to.
   * @returns {boolean} - True if the move worked, false otherwise.
   */
  move(tile) {
    return client.runOnServer(this, 'move', {
      tile: tile,
    });
  }


  /**
   * Picks up some branches or food on the beaver's tile.
   *
   * @param {Stumped.Tile} tile - The Tile to pickup branches/food from. Must be the same Tile that the Beaver is on, or an adjacent one.
   * @param {string} resource - The type of resource to pickup ('branches' or 'food').
   * @param {number} [amount] - The amount of the resource to drop, numbers <= 0 will pickup all of the resource type.
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


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Beaver;
