// Game: Collect of the most of the rarest mineral orbiting around the sun and out-compete your competitor.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Collect of the most of the rarest mineral orbiting around the sun and out-compete your competitor.
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
    this.dashCost = 0;
    this.dashDistance = 0;
    this.gameObjects = {};
    this.genariumValue = 0;
    this.jobs = [];
    this.legendariumValue = 0;
    this.maxAsteroid = 0;
    this.maxTurns = 0;
    this.minAsteroid = 0;
    this.miningSpeed = 0;
    this.mythiciteAmount = 0;
    this.orbitsProtected = 0;
    this.oreRarityGenarium = 0;
    this.oreRarityLegendarium = 0;
    this.oreRarityRarium = 0;
    this.planetEnergyCap = 0;
    this.planetRechargeRate = 0;
    this.players = [];
    this.projectileRadius = 0;
    this.projectileSpeed = 0;
    this.projectiles = [];
    this.rariumValue = 0;
    this.regenerateRate = 0;
    this.session = '';
    this.shipRadius = 0;
    this.sizeX = 0;
    this.sizeY = 0;
    this.timeAddedPerTurn = 0;
    this.turnsToOrbit = 0;
    this.units = [];

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * All the celestial bodies in the game. The first two are planets and the third is the sun. The fourth is the VP asteroid. Everything else is normal asteroids.
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
   * The cost of dashing.
   *
   * @type {number}
   */
  get dashCost() {
    return client.gameManager.getMemberValue(this, 'dashCost');
  }

  set dashCost(value) {
    client.gameManager.setMemberValue(this, 'dashCost', value);
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
   * The value of every unit of genarium.
   *
   * @type {number}
   */
  get genariumValue() {
    return client.gameManager.getMemberValue(this, 'genariumValue');
  }

  set genariumValue(value) {
    client.gameManager.setMemberValue(this, 'genariumValue', value);
  }


  /**
   * A list of all jobs. The first element is corvette, second is missileboat, third is martyr, fourth is transport, and fifth is miner.
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
   * The value of every unit of legendarium.
   *
   * @type {number}
   */
  get legendariumValue() {
    return client.gameManager.getMemberValue(this, 'legendariumValue');
  }

  set legendariumValue(value) {
    client.gameManager.setMemberValue(this, 'legendariumValue', value);
  }


  /**
   * The highest amount of material, that can be in a asteroid.
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
   * The smallest amount of material, that can be in a asteroid.
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
   * The amount of mythicite that spawns at the start of the game.
   *
   * @type {number}
   */
  get mythiciteAmount() {
    return client.gameManager.getMemberValue(this, 'mythiciteAmount');
  }

  set mythiciteAmount(value) {
    client.gameManager.setMemberValue(this, 'mythiciteAmount', value);
  }


  /**
   * The number of orbit updates you cannot mine the mithicite asteroid.
   *
   * @type {number}
   */
  get orbitsProtected() {
    return client.gameManager.getMemberValue(this, 'orbitsProtected');
  }

  set orbitsProtected(value) {
    client.gameManager.setMemberValue(this, 'orbitsProtected', value);
  }


  /**
   * The rarity modifier of the most common ore. This controls how much spawns.
   *
   * @type {number}
   */
  get oreRarityGenarium() {
    return client.gameManager.getMemberValue(this, 'oreRarityGenarium');
  }

  set oreRarityGenarium(value) {
    client.gameManager.setMemberValue(this, 'oreRarityGenarium', value);
  }


  /**
   * The rarity modifier of the rarest ore. This controls how much spawns.
   *
   * @type {number}
   */
  get oreRarityLegendarium() {
    return client.gameManager.getMemberValue(this, 'oreRarityLegendarium');
  }

  set oreRarityLegendarium(value) {
    client.gameManager.setMemberValue(this, 'oreRarityLegendarium', value);
  }


  /**
   * The rarity modifier of the second rarest ore. This controls how much spawns.
   *
   * @type {number}
   */
  get oreRarityRarium() {
    return client.gameManager.getMemberValue(this, 'oreRarityRarium');
  }

  set oreRarityRarium(value) {
    client.gameManager.setMemberValue(this, 'oreRarityRarium', value);
  }


  /**
   * The amount of energy a planet can hold at once.
   *
   * @type {number}
   */
  get planetEnergyCap() {
    return client.gameManager.getMemberValue(this, 'planetEnergyCap');
  }

  set planetEnergyCap(value) {
    client.gameManager.setMemberValue(this, 'planetEnergyCap', value);
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
   * The standard size of ships.
   *
   * @type {number}
   */
  get projectileRadius() {
    return client.gameManager.getMemberValue(this, 'projectileRadius');
  }

  set projectileRadius(value) {
    client.gameManager.setMemberValue(this, 'projectileRadius', value);
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
   * Every projectile in the game.
   *
   * @type {Array.<Stardash.Projectile>}
   */
  get projectiles() {
    return client.gameManager.getMemberValue(this, 'projectiles');
  }

  set projectiles(value) {
    client.gameManager.setMemberValue(this, 'projectiles', value);
  }


  /**
   * The value of every unit of rarium.
   *
   * @type {number}
   */
  get rariumValue() {
    return client.gameManager.getMemberValue(this, 'rariumValue');
  }

  set rariumValue(value) {
    client.gameManager.setMemberValue(this, 'rariumValue', value);
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
   * The standard size of ships.
   *
   * @type {number}
   */
  get shipRadius() {
    return client.gameManager.getMemberValue(this, 'shipRadius');
  }

  set shipRadius(value) {
    client.gameManager.setMemberValue(this, 'shipRadius', value);
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
   * The number of turns it takes for a asteroid to orbit the sun. (Asteroids move after each players turn).
   *
   * @type {number}
   */
  get turnsToOrbit() {
    return client.gameManager.getMemberValue(this, 'turnsToOrbit');
  }

  set turnsToOrbit(value) {
    client.gameManager.setMemberValue(this, 'turnsToOrbit', value);
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
