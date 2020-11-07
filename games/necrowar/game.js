// Game: Send hordes of the undead at your opponent while defending yourself against theirs to win.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Send hordes of the undead at your opponent while defending yourself against theirs to win.
 * @extends BaseGame
 * @memberof Necrowar
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
    this.name = 'Necrowar';

    // default values for private member values
    this.currentPlayer = null;
    this.currentTurn = 0;
    this.gameObjects = {};
    this.goldIncomePerUnit = 0;
    this.islandIncomePerUnit = 0;
    this.manaIncomePerUnit = 0;
    this.mapHeight = 0;
    this.mapWidth = 0;
    this.maxTurns = 0;
    this.players = [];
    this.riverPhase = 0;
    this.session = '';
    this.tiles = [];
    this.timeAddedPerTurn = 0;
    this.towerJobs = [];
    this.towers = [];
    this.unitJobs = [];
    this.units = [];

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The player whose turn it is currently. That player can send commands. Other players cannot.
   *
   * @type {Necrowar.Player}
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
   * @type {Object.<string, Necrowar.GameObject>}
   */
  get gameObjects() {
    return client.gameManager.getMemberValue(this, 'gameObjects');
  }

  set gameObjects(value) {
    client.gameManager.setMemberValue(this, 'gameObjects', value);
  }


  /**
   * The amount of gold income per turn per unit in a mine.
   *
   * @type {number}
   */
  get goldIncomePerUnit() {
    return client.gameManager.getMemberValue(this, 'goldIncomePerUnit');
  }

  set goldIncomePerUnit(value) {
    client.gameManager.setMemberValue(this, 'goldIncomePerUnit', value);
  }


  /**
   * The amount of gold income per turn per unit in the island mine.
   *
   * @type {number}
   */
  get islandIncomePerUnit() {
    return client.gameManager.getMemberValue(this, 'islandIncomePerUnit');
  }

  set islandIncomePerUnit(value) {
    client.gameManager.setMemberValue(this, 'islandIncomePerUnit', value);
  }


  /**
   * The Amount of gold income per turn per unit fishing on the river side.
   *
   * @type {number}
   */
  get manaIncomePerUnit() {
    return client.gameManager.getMemberValue(this, 'manaIncomePerUnit');
  }

  set manaIncomePerUnit(value) {
    client.gameManager.setMemberValue(this, 'manaIncomePerUnit', value);
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
   * List of all the players in the game.
   *
   * @type {Array.<Necrowar.Player>}
   */
  get players() {
    return client.gameManager.getMemberValue(this, 'players');
  }

  set players(value) {
    client.gameManager.setMemberValue(this, 'players', value);
  }


  /**
   * The amount of turns it takes between the river changing phases.
   *
   * @type {number}
   */
  get riverPhase() {
    return client.gameManager.getMemberValue(this, 'riverPhase');
  }

  set riverPhase(value) {
    client.gameManager.setMemberValue(this, 'riverPhase', value);
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
   * All the tiles in the map, stored in Row-major order. Use `x + y * mapWidth` to access the correct index.
   *
   * @type {Array.<Necrowar.Tile>}
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
   * A list of every tower type / job.
   *
   * @type {Array.<Necrowar.TowerJob>}
   */
  get towerJobs() {
    return client.gameManager.getMemberValue(this, 'towerJobs');
  }

  set towerJobs(value) {
    client.gameManager.setMemberValue(this, 'towerJobs', value);
  }


  /**
   * Every Tower in the game.
   *
   * @type {Array.<Necrowar.Tower>}
   */
  get towers() {
    return client.gameManager.getMemberValue(this, 'towers');
  }

  set towers(value) {
    client.gameManager.setMemberValue(this, 'towers', value);
  }


  /**
   * A list of every unit type / job.
   *
   * @type {Array.<Necrowar.UnitJob>}
   */
  get unitJobs() {
    return client.gameManager.getMemberValue(this, 'unitJobs');
  }

  set unitJobs(value) {
    client.gameManager.setMemberValue(this, 'unitJobs', value);
  }


  /**
   * Every Unit in the game.
   *
   * @type {Array.<Necrowar.Unit>}
   */
  get units() {
    return client.gameManager.getMemberValue(this, 'units');
  }

  set units(value) {
    client.gameManager.setMemberValue(this, 'units', value);
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
