// Game: Use cowboys to have a good time and play some music on a Piano, while brawling with enemy Cowboys.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Use cowboys to have a good time and play some music on a Piano, while brawling with enemy Cowboys.
 * @extends BaseGame
 * @memberof Saloon
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
    this.name = 'Saloon';

    // default values for private member values
    this.bartenderCooldown = 0;
    this.bottles = [];
    this.brawlerDamage = 0;
    this.cowboys = [];
    this.currentPlayer = null;
    this.currentTurn = 0;
    this.furnishings = [];
    this.gameObjects = {};
    this.jobs = [];
    this.mapHeight = 0;
    this.mapWidth = 0;
    this.maxCowboysPerJob = 0;
    this.maxTurns = 0;
    this.players = [];
    this.rowdinessToSiesta = 0;
    this.session = '';
    this.sharpshooterDamage = 0;
    this.siestaLength = 0;
    this.tiles = [];
    this.timeAddedPerTurn = 0;
    this.turnsDrunk = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * How many turns a Bartender will be busy for after throwing a Bottle.
   *
   * @type {number}
   */
  get bartenderCooldown() {
    return client.gameManager.getMemberValue(this, 'bartenderCooldown');
  }

  set bartenderCooldown(value) {
    client.gameManager.setMemberValue(this, 'bartenderCooldown', value);
  }


  /**
   * All the beer Bottles currently flying across the saloon in the game.
   *
   * @type {Array.<Saloon.Bottle>}
   */
  get bottles() {
    return client.gameManager.getMemberValue(this, 'bottles');
  }

  set bottles(value) {
    client.gameManager.setMemberValue(this, 'bottles', value);
  }


  /**
   * How much damage is applied to neighboring things bit by the Sharpshooter between turns.
   *
   * @type {number}
   */
  get brawlerDamage() {
    return client.gameManager.getMemberValue(this, 'brawlerDamage');
  }

  set brawlerDamage(value) {
    client.gameManager.setMemberValue(this, 'brawlerDamage', value);
  }


  /**
   * Every Cowboy in the game.
   *
   * @type {Array.<Saloon.Cowboy>}
   */
  get cowboys() {
    return client.gameManager.getMemberValue(this, 'cowboys');
  }

  set cowboys(value) {
    client.gameManager.setMemberValue(this, 'cowboys', value);
  }


  /**
   * The player whose turn it is currently. That player can send commands. Other players cannot.
   *
   * @type {Saloon.Player}
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
   * Every furnishing in the game.
   *
   * @type {Array.<Saloon.Furnishing>}
   */
  get furnishings() {
    return client.gameManager.getMemberValue(this, 'furnishings');
  }

  set furnishings(value) {
    client.gameManager.setMemberValue(this, 'furnishings', value);
  }


  /**
   * A mapping of every game object's ID to the actual game object. Primarily used by the server and client to easily refer to the game objects via ID.
   *
   * @type {Object.<string, Saloon.GameObject>}
   */
  get gameObjects() {
    return client.gameManager.getMemberValue(this, 'gameObjects');
  }

  set gameObjects(value) {
    client.gameManager.setMemberValue(this, 'gameObjects', value);
  }


  /**
   * All the jobs that Cowboys can be called in with.
   *
   * @type {Array.<string>}
   */
  get jobs() {
    return client.gameManager.getMemberValue(this, 'jobs');
  }

  set jobs(value) {
    client.gameManager.setMemberValue(this, 'jobs', value);
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
   * The maximum number of Cowboys a Player can bring into the saloon of each specific job.
   *
   * @type {number}
   */
  get maxCowboysPerJob() {
    return client.gameManager.getMemberValue(this, 'maxCowboysPerJob');
  }

  set maxCowboysPerJob(value) {
    client.gameManager.setMemberValue(this, 'maxCowboysPerJob', value);
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
   * @type {Array.<Saloon.Player>}
   */
  get players() {
    return client.gameManager.getMemberValue(this, 'players');
  }

  set players(value) {
    client.gameManager.setMemberValue(this, 'players', value);
  }


  /**
   * When a player's rowdiness reaches or exceeds this number their Cowboys take a collective siesta.
   *
   * @type {number}
   */
  get rowdinessToSiesta() {
    return client.gameManager.getMemberValue(this, 'rowdinessToSiesta');
  }

  set rowdinessToSiesta(value) {
    client.gameManager.setMemberValue(this, 'rowdinessToSiesta', value);
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
   * How much damage is applied to things hit by Sharpshooters when they act.
   *
   * @type {number}
   */
  get sharpshooterDamage() {
    return client.gameManager.getMemberValue(this, 'sharpshooterDamage');
  }

  set sharpshooterDamage(value) {
    client.gameManager.setMemberValue(this, 'sharpshooterDamage', value);
  }


  /**
   * How long siestas are for a player's team.
   *
   * @type {number}
   */
  get siestaLength() {
    return client.gameManager.getMemberValue(this, 'siestaLength');
  }

  set siestaLength(value) {
    client.gameManager.setMemberValue(this, 'siestaLength', value);
  }


  /**
   * All the tiles in the map, stored in Row-major order. Use `x + y * mapWidth` to access the correct index.
   *
   * @type {Array.<Saloon.Tile>}
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
   * How many turns a Cowboy will be drunk for if a bottle breaks on it.
   *
   * @type {number}
   */
  get turnsDrunk() {
    return client.gameManager.getMemberValue(this, 'turnsDrunk');
  }

  set turnsDrunk(value) {
    client.gameManager.setMemberValue(this, 'turnsDrunk', value);
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
