// Game: Gather branches and build up your lodge as beavers fight to survive.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Gather branches and build up your lodge as beavers fight to survive.
 * @extends BaseGame
 * @memberof Stumped
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
    this.name = 'Stumped';

    // default values for private member values
    this.beavers = [];
    this.currentPlayer = null;
    this.currentTurn = 0;
    this.freeBeaversCount = 0;
    this.gameObjects = {};
    this.jobs = [];
    this.lodgeCostConstant = 0;
    this.lodgesToWin = 0;
    this.mapHeight = 0;
    this.mapWidth = 0;
    this.maxTurns = 0;
    this.players = [];
    this.session = '';
    this.spawner = [];
    this.spawnerHarvestConstant = 0;
    this.spawnerTypes = [];
    this.tiles = [];
    this.timeAddedPerTurn = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * Every Beaver in the game.
   *
   * @type {Array.<Stumped.Beaver>}
   */
  get beavers() {
    return client.gameManager.getMemberValue(this, 'beavers');
  }

  set beavers(value) {
    client.gameManager.setMemberValue(this, 'beavers', value);
  }


  /**
   * The player whose turn it is currently. That player can send commands. Other players cannot.
   *
   * @type {Stumped.Player}
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
   * When a Player has less Beavers than this number, then recruiting other Beavers is free.
   *
   * @type {number}
   */
  get freeBeaversCount() {
    return client.gameManager.getMemberValue(this, 'freeBeaversCount');
  }

  set freeBeaversCount(value) {
    client.gameManager.setMemberValue(this, 'freeBeaversCount', value);
  }


  /**
   * A mapping of every game object's ID to the actual game object. Primarily used by the server and client to easily refer to the game objects via ID.
   *
   * @type {Object.<string, Stumped.GameObject>}
   */
  get gameObjects() {
    return client.gameManager.getMemberValue(this, 'gameObjects');
  }

  set gameObjects(value) {
    client.gameManager.setMemberValue(this, 'gameObjects', value);
  }


  /**
   * All the Jobs that Beavers can have in the game.
   *
   * @type {Array.<Stumped.Job>}
   */
  get jobs() {
    return client.gameManager.getMemberValue(this, 'jobs');
  }

  set jobs(value) {
    client.gameManager.setMemberValue(this, 'jobs', value);
  }


  /**
   * Constant number used to calculate what it costs to spawn a new lodge.
   *
   * @type {number}
   */
  get lodgeCostConstant() {
    return client.gameManager.getMemberValue(this, 'lodgeCostConstant');
  }

  set lodgeCostConstant(value) {
    client.gameManager.setMemberValue(this, 'lodgeCostConstant', value);
  }


  /**
   * How many lodges must be owned by a Player at once to win the game.
   *
   * @type {number}
   */
  get lodgesToWin() {
    return client.gameManager.getMemberValue(this, 'lodgesToWin');
  }

  set lodgesToWin(value) {
    client.gameManager.setMemberValue(this, 'lodgesToWin', value);
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
   * @type {Array.<Stumped.Player>}
   */
  get players() {
    return client.gameManager.getMemberValue(this, 'players');
  }

  set players(value) {
    client.gameManager.setMemberValue(this, 'players', value);
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
   * Every Spawner in the game.
   *
   * @type {Array.<Stumped.Spawner>}
   */
  get spawner() {
    return client.gameManager.getMemberValue(this, 'spawner');
  }

  set spawner(value) {
    client.gameManager.setMemberValue(this, 'spawner', value);
  }


  /**
   * Constant number used to calculate how many branches/food Beavers harvest from Spawners.
   *
   * @type {number}
   */
  get spawnerHarvestConstant() {
    return client.gameManager.getMemberValue(this, 'spawnerHarvestConstant');
  }

  set spawnerHarvestConstant(value) {
    client.gameManager.setMemberValue(this, 'spawnerHarvestConstant', value);
  }


  /**
   * All the types of Spawners in the game.
   *
   * @type {Array.<string>}
   */
  get spawnerTypes() {
    return client.gameManager.getMemberValue(this, 'spawnerTypes');
  }

  set spawnerTypes(value) {
    client.gameManager.setMemberValue(this, 'spawnerTypes', value);
  }


  /**
   * All the tiles in the map, stored in Row-major order. Use `x + y * mapWidth` to access the correct index.
   *
   * @type {Array.<Stumped.Tile>}
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
