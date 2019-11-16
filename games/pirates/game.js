// Game: Steal from merchants and become the most infamous pirate.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Steal from merchants and become the most infamous pirate.
 * @extends BaseGame
 * @memberof Pirates
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
    this.name = 'Pirates';

    // default values for private member values
    this.buryInterestRate = 0;
    this.crewCost = 0;
    this.crewDamage = 0;
    this.crewHealth = 0;
    this.crewMoves = 0;
    this.crewRange = 0;
    this.currentPlayer = null;
    this.currentTurn = 0;
    this.gameObjects = {};
    this.healFactor = 0;
    this.mapHeight = 0;
    this.mapWidth = 0;
    this.maxTurns = 0;
    this.merchantGoldRate = 0;
    this.merchantInterestRate = 0;
    this.minInterestDistance = 0;
    this.players = [];
    this.ports = [];
    this.restRange = 0;
    this.session = '';
    this.shipCost = 0;
    this.shipDamage = 0;
    this.shipHealth = 0;
    this.shipMoves = 0;
    this.shipRange = 0;
    this.tiles = [];
    this.timeAddedPerTurn = 0;
    this.units = [];

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The rate buried gold increases each turn.
   *
   * @type {number}
   */
  get buryInterestRate() {
    return client.gameManager.getMemberValue(this, 'buryInterestRate');
  }

  set buryInterestRate(value) {
    client.gameManager.setMemberValue(this, 'buryInterestRate', value);
  }


  /**
   * How much gold it costs to construct a single crew.
   *
   * @type {number}
   */
  get crewCost() {
    return client.gameManager.getMemberValue(this, 'crewCost');
  }

  set crewCost(value) {
    client.gameManager.setMemberValue(this, 'crewCost', value);
  }


  /**
   * How much damage crew deal to each other.
   *
   * @type {number}
   */
  get crewDamage() {
    return client.gameManager.getMemberValue(this, 'crewDamage');
  }

  set crewDamage(value) {
    client.gameManager.setMemberValue(this, 'crewDamage', value);
  }


  /**
   * The maximum amount of health a crew member can have.
   *
   * @type {number}
   */
  get crewHealth() {
    return client.gameManager.getMemberValue(this, 'crewHealth');
  }

  set crewHealth(value) {
    client.gameManager.setMemberValue(this, 'crewHealth', value);
  }


  /**
   * The number of moves Units with only crew are given each turn.
   *
   * @type {number}
   */
  get crewMoves() {
    return client.gameManager.getMemberValue(this, 'crewMoves');
  }

  set crewMoves(value) {
    client.gameManager.setMemberValue(this, 'crewMoves', value);
  }


  /**
   * A crew's attack range. Range is circular.
   *
   * @type {number}
   */
  get crewRange() {
    return client.gameManager.getMemberValue(this, 'crewRange');
  }

  set crewRange(value) {
    client.gameManager.setMemberValue(this, 'crewRange', value);
  }


  /**
   * The player whose turn it is currently. That player can send commands. Other players cannot.
   *
   * @type {Pirates.Player}
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
   * @type {Object.<string, Pirates.GameObject>}
   */
  get gameObjects() {
    return client.gameManager.getMemberValue(this, 'gameObjects');
  }

  set gameObjects(value) {
    client.gameManager.setMemberValue(this, 'gameObjects', value);
  }


  /**
   * How much health a Unit recovers when they rest.
   *
   * @type {number}
   */
  get healFactor() {
    return client.gameManager.getMemberValue(this, 'healFactor');
  }

  set healFactor(value) {
    client.gameManager.setMemberValue(this, 'healFactor', value);
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
   * How much gold merchant Ports get each turn.
   *
   * @type {number}
   */
  get merchantGoldRate() {
    return client.gameManager.getMemberValue(this, 'merchantGoldRate');
  }

  set merchantGoldRate(value) {
    client.gameManager.setMemberValue(this, 'merchantGoldRate', value);
  }


  /**
   * When a merchant ship spawns, the amount of additional gold it has relative to the Port's investment.
   *
   * @type {number}
   */
  get merchantInterestRate() {
    return client.gameManager.getMemberValue(this, 'merchantInterestRate');
  }

  set merchantInterestRate(value) {
    client.gameManager.setMemberValue(this, 'merchantInterestRate', value);
  }


  /**
   * The Euclidean distance buried gold must be from the Player's Port to accumulate interest.
   *
   * @type {number}
   */
  get minInterestDistance() {
    return client.gameManager.getMemberValue(this, 'minInterestDistance');
  }

  set minInterestDistance(value) {
    client.gameManager.setMemberValue(this, 'minInterestDistance', value);
  }


  /**
   * List of all the players in the game.
   *
   * @type {Array.<Pirates.Player>}
   */
  get players() {
    return client.gameManager.getMemberValue(this, 'players');
  }

  set players(value) {
    client.gameManager.setMemberValue(this, 'players', value);
  }


  /**
   * Every Port in the game. Merchant ports have owner set to null.
   *
   * @type {Array.<Pirates.Port>}
   */
  get ports() {
    return client.gameManager.getMemberValue(this, 'ports');
  }

  set ports(value) {
    client.gameManager.setMemberValue(this, 'ports', value);
  }


  /**
   * How far a Unit can be from a Port to rest. Range is circular.
   *
   * @type {number}
   */
  get restRange() {
    return client.gameManager.getMemberValue(this, 'restRange');
  }

  set restRange(value) {
    client.gameManager.setMemberValue(this, 'restRange', value);
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
   * How much gold it costs to construct a ship.
   *
   * @type {number}
   */
  get shipCost() {
    return client.gameManager.getMemberValue(this, 'shipCost');
  }

  set shipCost(value) {
    client.gameManager.setMemberValue(this, 'shipCost', value);
  }


  /**
   * How much damage ships deal to ships and ports.
   *
   * @type {number}
   */
  get shipDamage() {
    return client.gameManager.getMemberValue(this, 'shipDamage');
  }

  set shipDamage(value) {
    client.gameManager.setMemberValue(this, 'shipDamage', value);
  }


  /**
   * The maximum amount of health a ship can have.
   *
   * @type {number}
   */
  get shipHealth() {
    return client.gameManager.getMemberValue(this, 'shipHealth');
  }

  set shipHealth(value) {
    client.gameManager.setMemberValue(this, 'shipHealth', value);
  }


  /**
   * The number of moves Units with ships are given each turn.
   *
   * @type {number}
   */
  get shipMoves() {
    return client.gameManager.getMemberValue(this, 'shipMoves');
  }

  set shipMoves(value) {
    client.gameManager.setMemberValue(this, 'shipMoves', value);
  }


  /**
   * A ship's attack range. Range is circular.
   *
   * @type {number}
   */
  get shipRange() {
    return client.gameManager.getMemberValue(this, 'shipRange');
  }

  set shipRange(value) {
    client.gameManager.setMemberValue(this, 'shipRange', value);
  }


  /**
   * All the tiles in the map, stored in Row-major order. Use `x + y * mapWidth` to access the correct index.
   *
   * @type {Array.<Pirates.Tile>}
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
   * Every Unit in the game. Merchant units have targetPort set to a port.
   *
   * @type {Array.<Pirates.Unit>}
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
