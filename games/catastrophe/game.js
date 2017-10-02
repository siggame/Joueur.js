// Game: Convert as many humans to as you can to survive in this post-apocalyptic wasteland.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Convert as many humans to as you can to survive in this post-apocalyptic wasteland.
 * @extends BaseGame
 */
class Game extends BaseGame {
  /**
   * initializes a Game with basic logic as provided by the Creer code generator
   *
   * @memberof Game
   * @private
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    /**
     * The name of the game.
     */
    this.name = 'Catastrophe';

    // default values for private member values
    this.catEnergyMult = 0;
    this.currentPlayer = null;
    this.currentTurn = 0;
    this.gameObjects = {};
    this.harvestCooldown = 0;
    this.jobs = [];
    this.mapHeight = 0;
    this.mapWidth = 0;
    this.maxTurns = 0;
    this.players = [];
    this.session = '';
    this.starvingEnergyMult = 0;
    this.structures = [];
    this.tiles = [];
    this.units = [];

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The multiplier for the amount of energy regenerated when resting in a shelter with the cat overlord.
   *
   * @type {number}
   */
  get catEnergyMult() {
    return client.gameManager.getMemberValue(this, 'catEnergyMult');
  }

  set catEnergyMult(value) {
    client.gameManager.setMemberValue(this, 'catEnergyMult', value);
  }


  /**
   * The player whose turn it is currently. That player can send commands. Other players cannot.
   *
   * @type {Player}
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
   * @type {Object.<string, GameObject>}
   */
  get gameObjects() {
    return client.gameManager.getMemberValue(this, 'gameObjects');
  }

  set gameObjects(value) {
    client.gameManager.setMemberValue(this, 'gameObjects', value);
  }


  /**
   * The amount of turns it takes for a Tile that was just harvested to grow food again.
   *
   * @type {number}
   */
  get harvestCooldown() {
    return client.gameManager.getMemberValue(this, 'harvestCooldown');
  }

  set harvestCooldown(value) {
    client.gameManager.setMemberValue(this, 'harvestCooldown', value);
  }


  /**
   * All the Jobs that Units can have in the game.
   *
   * @type {Array.<Job>}
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
   * @type {Array.<Player>}
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
   * The multiplier for the amount of energy regenerated when resting while starving.
   *
   * @type {number}
   */
  get starvingEnergyMult() {
    return client.gameManager.getMemberValue(this, 'starvingEnergyMult');
  }

  set starvingEnergyMult(value) {
    client.gameManager.setMemberValue(this, 'starvingEnergyMult', value);
  }


  /**
   * Every Structure in the game.
   *
   * @type {Array.<Structure>}
   */
  get structures() {
    return client.gameManager.getMemberValue(this, 'structures');
  }

  set structures(value) {
    client.gameManager.setMemberValue(this, 'structures', value);
  }


  /**
   * All the tiles in the map, stored in Row-major order. Use `x + y * mapWidth` to access the correct index.
   *
   * @type {Array.<Tile>}
   */
  get tiles() {
    return client.gameManager.getMemberValue(this, 'tiles');
  }

  set tiles(value) {
    client.gameManager.setMemberValue(this, 'tiles', value);
  }


  /**
   * Every Unit in the game.
   *
   * @type {Array.<Unit>}
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
