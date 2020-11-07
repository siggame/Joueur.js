// Game: Combine elements and be the first scientists to create fusion.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Combine elements and be the first scientists to create fusion.
 * @extends BaseGame
 * @memberof Newtonian
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
    this.name = 'Newtonian';

    // default values for private member values
    this.currentPlayer = null;
    this.currentTurn = 0;
    this.gameObjects = {};
    this.internCap = 0;
    this.jobs = [];
    this.machines = [];
    this.managerCap = 0;
    this.mapHeight = 0;
    this.mapWidth = 0;
    this.materialSpawn = 0;
    this.maxTurns = 0;
    this.physicistCap = 0;
    this.players = [];
    this.refinedValue = 0;
    this.regenerateRate = 0;
    this.session = '';
    this.spawnTime = 0;
    this.stunTime = 0;
    this.tiles = [];
    this.timeAddedPerTurn = 0;
    this.timeImmune = 0;
    this.units = [];
    this.victoryAmount = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The player whose turn it is currently. That player can send commands. Other players cannot.
   *
   * @type {Newtonian.Player}
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
   * A mapping of every game object's ID to the actual game object. Primarily used by the server and client to easily refer to the game objects via ID.
   *
   * @type {Object.<string, Newtonian.GameObject>}
   */
  get gameObjects() {
    return client.gameManager.getMemberValue(this, 'gameObjects');
  }

  set gameObjects(value) {
    client.gameManager.setMemberValue(this, 'gameObjects', value);
  }


  /**
   * The maximum number of interns a player can have.
   *
   * @type {number}
   */
  get internCap() {
    return client.gameManager.getMemberValue(this, 'internCap');
  }

  set internCap(value) {
    client.gameManager.setMemberValue(this, 'internCap', value);
  }


  /**
   * A list of all jobs. The first element is intern, second is physicists, and third is manager.
   *
   * @type {Array.<Newtonian.Job>}
   */
  get jobs() {
    return client.gameManager.getMemberValue(this, 'jobs');
  }

  set jobs(value) {
    client.gameManager.setMemberValue(this, 'jobs', value);
  }


  /**
   * Every Machine in the game.
   *
   * @type {Array.<Newtonian.Machine>}
   */
  get machines() {
    return client.gameManager.getMemberValue(this, 'machines');
  }

  set machines(value) {
    client.gameManager.setMemberValue(this, 'machines', value);
  }


  /**
   * The maximum number of managers a player can have.
   *
   * @type {number}
   */
  get managerCap() {
    return client.gameManager.getMemberValue(this, 'managerCap');
  }

  set managerCap(value) {
    client.gameManager.setMemberValue(this, 'managerCap', value);
  }


  /**
   * The number of Tiles in the map along the y (vertical) axis.
   *
   * @type {number}
   */
  get mapHeight() {
    return client.gameManager.getMemberValue(this, 'mapHeight');
  }

  set mapHeight(value) {
    client.gameManager.setMemberValue(this, 'mapHeight', value);
  }


  /**
   * The number of Tiles in the map along the x (horizontal) axis.
   *
   * @type {number}
   */
  get mapWidth() {
    return client.gameManager.getMemberValue(this, 'mapWidth');
  }

  set mapWidth(value) {
    client.gameManager.setMemberValue(this, 'mapWidth', value);
  }


  /**
   * The number of materials that spawn per spawn cycle.
   *
   * @type {number}
   */
  get materialSpawn() {
    return client.gameManager.getMemberValue(this, 'materialSpawn');
  }

  set materialSpawn(value) {
    client.gameManager.setMemberValue(this, 'materialSpawn', value);
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
   * The maximum number of physicists a player can have.
   *
   * @type {number}
   */
  get physicistCap() {
    return client.gameManager.getMemberValue(this, 'physicistCap');
  }

  set physicistCap(value) {
    client.gameManager.setMemberValue(this, 'physicistCap', value);
  }


  /**
   * List of all the players in the game.
   *
   * @type {Array.<Newtonian.Player>}
   */
  get players() {
    return client.gameManager.getMemberValue(this, 'players');
  }

  set players(value) {
    client.gameManager.setMemberValue(this, 'players', value);
  }


  /**
   * The amount of victory points added when a refined ore is consumed by the generator.
   *
   * @type {number}
   */
  get refinedValue() {
    return client.gameManager.getMemberValue(this, 'refinedValue');
  }

  set refinedValue(value) {
    client.gameManager.setMemberValue(this, 'refinedValue', value);
  }


  /**
   * The percent of max HP regained when a unit end their turn on a tile owned by their player.
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
   * The amount of turns it takes a unit to spawn.
   *
   * @type {number}
   */
  get spawnTime() {
    return client.gameManager.getMemberValue(this, 'spawnTime');
  }

  set spawnTime(value) {
    client.gameManager.setMemberValue(this, 'spawnTime', value);
  }


  /**
   * The amount of turns a unit cannot do anything when stunned.
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
   * All the tiles in the map, stored in Row-major order. Use `x + y * mapWidth` to access the correct index.
   *
   * @type {Array.<Newtonian.Tile>}
   */
  get tiles() {
    return client.gameManager.getMemberValue(this, 'tiles');
  }

  set tiles(value) {
    client.gameManager.setMemberValue(this, 'tiles', value);
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
   * The number turns a unit is immune to being stunned.
   *
   * @type {number}
   */
  get timeImmune() {
    return client.gameManager.getMemberValue(this, 'timeImmune');
  }

  set timeImmune(value) {
    client.gameManager.setMemberValue(this, 'timeImmune', value);
  }


  /**
   * Every Unit in the game.
   *
   * @type {Array.<Newtonian.Unit>}
   */
  get units() {
    return client.gameManager.getMemberValue(this, 'units');
  }

  set units(value) {
    client.gameManager.setMemberValue(this, 'units', value);
  }


  /**
   * The amount of combined heat and pressure that you need to win.
   *
   * @type {number}
   */
  get victoryAmount() {
    return client.gameManager.getMemberValue(this, 'victoryAmount');
  }

  set victoryAmount(value) {
    client.gameManager.setMemberValue(this, 'victoryAmount', value);
  }


  /**
   * Gets the Tile at a specified (x, y) position
   *
   * @param {number} x - integer between 0 and the mapWidth
   * @param {number} y - integer between 0 and the mapHeight
   * @returns {Tile|null} - the Tile at (x, y) or null if out of bounds
   */
  getTileAt(x, y) {
    if(x < 0 || y < 0 || x >= this.mapWidth || y >= this.mapHeight) { // out of bounds
      return null;
    }

    return this.tiles[x + y * this.mapWidth] || null;
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Game;
