// Game: Collect of the most of the rarest mineral orbiting aroung the sun and outcompete your competetor.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Collect of the most of the rarest mineral orbiting aroung the sun and outcompete your competetor.
 * @extends BaseGame
 * @memberof Stardash
 */
class Game extends BaseGame {
  /**
   * Initializes a Game with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    /**
     * The name of the game.
     * @type {string}
     */
    this.name = 'Stardash';

    // default values for private member values
    this.bodies = [];
    this.currentPlayer = null;
    this.currentTurn = 0;
    this.dashDistance = 0;
    this.gameObjects = {};
    this.jobs = [];
    this.maxAsteroid = 0;
    this.maxTurns = 0;
    this.minAsteroid = 0;
    this.miningSpeed = 0;
    this.oreRarity1 = 0;
    this.oreRarity2 = 0;
    this.oreRarity3 = 0;
    this.planetRechargeRate = 0;
    this.players = [];
    this.projectileSpeed = 0;
    this.regenerateRate = 0;
    this.session = '';
    this.sizeX = 0;
    this.sizeY = 0;
    this.timeAddedPerTurn = 0;
    this.units = [];

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * All the celestial bodies in the game.
   *
   * @type {Array.<Stardash.Body>}
   */
  get bodies() {
    return client.gameManager.getMemberValue(this, 'bodies');
  }

  set bodies(value) {
    client.gameManager.setMemberValue(this, 'bodies', value);
  }


  /**
   * The player whose turn it is currently. That player can send commands. Other players cannot.
   *
   * @type {Stardash.Player}
   */
  get currentPlayer() {
    return client.gameManager.getMemberValue(this, 'currentPlayer');
  }

  set currentPlayer(value) {
    client.gameManager.setMemberValue(this, 'currentPlayer', value);
  }


  /**
   * The current turn number, starting at 0 for the first player's turn.
   *
   * @type {number}
   */
  get currentTurn() {
    return client.gameManager.getMemberValue(this, 'currentTurn');
  }

  set currentTurn(value) {
    client.gameManager.setMemberValue(this, 'currentTurn', value);
  }


  /**
   * The distance traveled each turn by dashing.
   *
   * @type {number}
   */
  get dashDistance() {
    return client.gameManager.getMemberValue(this, 'dashDistance');
  }

  set dashDistance(value) {
    client.gameManager.setMemberValue(this, 'dashDistance', value);
  }


  /**
   * A mapping of every game object's ID to the actual game object. Primarily used by the server and client to easily refer to the game objects via ID.
   *
   * @type {Object.<string, Stardash.GameObject>}
   */
  get gameObjects() {
    return client.gameManager.getMemberValue(this, 'gameObjects');
  }

  set gameObjects(value) {
    client.gameManager.setMemberValue(this, 'gameObjects', value);
  }


  /**
   * A list of all jobs. first item is corvette, second is missleboat, third is martyr, fourth is transport, and fifth is miner.
   *
   * @type {Array.<Stardash.Job>}
   */
  get jobs() {
    return client.gameManager.getMemberValue(this, 'jobs');
  }

  set jobs(value) {
    client.gameManager.setMemberValue(this, 'jobs', value);
  }


  /**
   * The highest amount of material, barring rarity, that can be in a asteroid.
   *
   * @type {number}
   */
  get maxAsteroid() {
    return client.gameManager.getMemberValue(this, 'maxAsteroid');
  }

  set maxAsteroid(value) {
    client.gameManager.setMemberValue(this, 'maxAsteroid', value);
  }


  /**
   * The maximum number of turns before the game will automatically end.
   *
   * @type {number}
   */
  get maxTurns() {
    return client.gameManager.getMemberValue(this, 'maxTurns');
  }

  set maxTurns(value) {
    client.gameManager.setMemberValue(this, 'maxTurns', value);
  }


  /**
   * The smallest amount of material, barring rarity, that can be in a asteroid.
   *
   * @type {number}
   */
  get minAsteroid() {
    return client.gameManager.getMemberValue(this, 'minAsteroid');
  }

  set minAsteroid(value) {
    client.gameManager.setMemberValue(this, 'minAsteroid', value);
  }


  /**
   * The rate at which miners grab minerals from asteroids.
   *
   * @type {number}
   */
  get miningSpeed() {
    return client.gameManager.getMemberValue(this, 'miningSpeed');
  }

  set miningSpeed(value) {
    client.gameManager.setMemberValue(this, 'miningSpeed', value);
  }


  /**
   * The rarity modifier of the most common ore. This controls how much spawns.
   *
   * @type {number}
   */
  get oreRarity1() {
    return client.gameManager.getMemberValue(this, 'oreRarity1');
  }

  set oreRarity1(value) {
    client.gameManager.setMemberValue(this, 'oreRarity1', value);
  }


  /**
   * The rarity modifier of the second rarest ore. This controls how much spawns.
   *
   * @type {number}
   */
  get oreRarity2() {
    return client.gameManager.getMemberValue(this, 'oreRarity2');
  }

  set oreRarity2(value) {
    client.gameManager.setMemberValue(this, 'oreRarity2', value);
  }


  /**
   * The rarity modifier of the rarest ore. This controls how much spawns.
   *
   * @type {number}
   */
  get oreRarity3() {
    return client.gameManager.getMemberValue(this, 'oreRarity3');
  }

  set oreRarity3(value) {
    client.gameManager.setMemberValue(this, 'oreRarity3', value);
  }


  /**
   * The amount of energy the planets restore each round.
   *
   * @type {number}
   */
  get planetRechargeRate() {
    return client.gameManager.getMemberValue(this, 'planetRechargeRate');
  }

  set planetRechargeRate(value) {
    client.gameManager.setMemberValue(this, 'planetRechargeRate', value);
  }


  /**
   * List of all the players in the game.
   *
   * @type {Array.<Stardash.Player>}
   */
  get players() {
    return client.gameManager.getMemberValue(this, 'players');
  }

  set players(value) {
    client.gameManager.setMemberValue(this, 'players', value);
  }


  /**
   * The amount of distance missiles travel through space.
   *
   * @type {number}
   */
  get projectileSpeed() {
    return client.gameManager.getMemberValue(this, 'projectileSpeed');
  }

  set projectileSpeed(value) {
    client.gameManager.setMemberValue(this, 'projectileSpeed', value);
  }


  /**
   * The regeneration rate of asteroids.
   *
   * @type {number}
   */
  get regenerateRate() {
    return client.gameManager.getMemberValue(this, 'regenerateRate');
  }

  set regenerateRate(value) {
    client.gameManager.setMemberValue(this, 'regenerateRate', value);
  }


  /**
   * A unique identifier for the game instance that is being played.
   *
   * @type {string}
   */
  get session() {
    return client.gameManager.getMemberValue(this, 'session');
  }

  set session(value) {
    client.gameManager.setMemberValue(this, 'session', value);
  }


  /**
   * The size of the map in the X direction.
   *
   * @type {number}
   */
  get sizeX() {
    return client.gameManager.getMemberValue(this, 'sizeX');
  }

  set sizeX(value) {
    client.gameManager.setMemberValue(this, 'sizeX', value);
  }


  /**
   * The size of the map in the Y direction.
   *
   * @type {number}
   */
  get sizeY() {
    return client.gameManager.getMemberValue(this, 'sizeY');
  }

  set sizeY(value) {
    client.gameManager.setMemberValue(this, 'sizeY', value);
  }


  /**
   * The amount of time (in nano-seconds) added after each player performs a turn.
   *
   * @type {number}
   */
  get timeAddedPerTurn() {
    return client.gameManager.getMemberValue(this, 'timeAddedPerTurn');
  }

  set timeAddedPerTurn(value) {
    client.gameManager.setMemberValue(this, 'timeAddedPerTurn', value);
  }


  /**
   * Every Unit in the game.
   *
   * @type {Array.<Stardash.Unit>}
   */
  get units() {
    return client.gameManager.getMemberValue(this, 'units');
  }

  set units(value) {
    client.gameManager.setMemberValue(this, 'units', value);
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Game;
