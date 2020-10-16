// Game: Mine resources to obtain more value than your opponent.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Mine resources to obtain more value than your opponent.
 * @extends BaseGame
 * @memberof Coreminer
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
    this.name = 'Coreminer';

    // default values for private member values
    this.bombPrice = 0;
    this.bombSize = 0;
    this.bombs = [];
    this.buildingMaterialPrice = 0;
    this.currentPlayer = null;
    this.currentTurn = 0;
    this.dirtPrice = 0;
    this.fallDamage = 0;
    this.fallWeightDamage = 0;
    this.gameObjects = {};
    this.ladderCost = 0;
    this.ladderHealth = 0;
    this.largeCargoSize = 0;
    this.largeMaterialSize = 0;
    this.mapHeight = 0;
    this.mapWidth = 0;
    this.maxShielding = 0;
    this.maxTurns = 0;
    this.maxUpgradeLevel = 0;
    this.miners = [];
    this.orePrice = 0;
    this.oreValue = 0;
    this.players = [];
    this.session = '';
    this.shieldCost = 0;
    this.shieldHealth = 0;
    this.spawnPrice = 0;
    this.suffocationDamage = 0;
    this.suffocationWeightDamage = 0;
    this.supportCost = 0;
    this.supportHealth = 0;
    this.tiles = [];
    this.timeAddedPerTurn = 0;
    this.upgradePrice = 0;
    this.upgrades = [];
    this.victoryAmount = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The monetary price of a bomb when bought or sold.
   *
   * @type {number}
   */
  get bombPrice() {
    return client.gameManager.getMemberValue(this, 'bombPrice');
  }

  set bombPrice(value) {
    client.gameManager.setMemberValue(this, 'bombPrice', value);
  }


  /**
   * The amount of cargo space taken up by a Bomb.
   *
   * @type {number}
   */
  get bombSize() {
    return client.gameManager.getMemberValue(this, 'bombSize');
  }

  set bombSize(value) {
    client.gameManager.setMemberValue(this, 'bombSize', value);
  }


  /**
   * Every Bomb in the game.
   *
   * @type {Array.<Coreminer.Bomb>}
   */
  get bombs() {
    return client.gameManager.getMemberValue(this, 'bombs');
  }

  set bombs(value) {
    client.gameManager.setMemberValue(this, 'bombs', value);
  }


  /**
   * The monetary price of building materials when bought.
   *
   * @type {number}
   */
  get buildingMaterialPrice() {
    return client.gameManager.getMemberValue(this, 'buildingMaterialPrice');
  }

  set buildingMaterialPrice(value) {
    client.gameManager.setMemberValue(this, 'buildingMaterialPrice', value);
  }


  /**
   * The player whose turn it is currently. That player can send commands. Other players cannot.
   *
   * @type {Coreminer.Player}
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
   * The monetary price of dirt when bought or sold.
   *
   * @type {number}
   */
  get dirtPrice() {
    return client.gameManager.getMemberValue(this, 'dirtPrice');
  }

  set dirtPrice(value) {
    client.gameManager.setMemberValue(this, 'dirtPrice', value);
  }


  /**
   * The amount of damage taken per Tile fallen.
   *
   * @type {number}
   */
  get fallDamage() {
    return client.gameManager.getMemberValue(this, 'fallDamage');
  }

  set fallDamage(value) {
    client.gameManager.setMemberValue(this, 'fallDamage', value);
  }


  /**
   * The amount of extra damage taken for falling while carrying a large amount of cargo.
   *
   * @type {number}
   */
  get fallWeightDamage() {
    return client.gameManager.getMemberValue(this, 'fallWeightDamage');
  }

  set fallWeightDamage(value) {
    client.gameManager.setMemberValue(this, 'fallWeightDamage', value);
  }


  /**
   * A mapping of every game object's ID to the actual game object. Primarily used by the server and client to easily refer to the game objects via ID.
   *
   * @type {Object.<string, Coreminer.GameObject>}
   */
  get gameObjects() {
    return client.gameManager.getMemberValue(this, 'gameObjects');
  }

  set gameObjects(value) {
    client.gameManager.setMemberValue(this, 'gameObjects', value);
  }


  /**
   * The amount of building material required to build a ladder.
   *
   * @type {number}
   */
  get ladderCost() {
    return client.gameManager.getMemberValue(this, 'ladderCost');
  }

  set ladderCost(value) {
    client.gameManager.setMemberValue(this, 'ladderCost', value);
  }


  /**
   * The amount of mining power needed to remove a ladder from a Tile.
   *
   * @type {number}
   */
  get ladderHealth() {
    return client.gameManager.getMemberValue(this, 'ladderHealth');
  }

  set ladderHealth(value) {
    client.gameManager.setMemberValue(this, 'ladderHealth', value);
  }


  /**
   * The amount deemed as a large amount of cargo.
   *
   * @type {number}
   */
  get largeCargoSize() {
    return client.gameManager.getMemberValue(this, 'largeCargoSize');
  }

  set largeCargoSize(value) {
    client.gameManager.setMemberValue(this, 'largeCargoSize', value);
  }


  /**
   * The amount deemed as a large amount of material.
   *
   * @type {number}
   */
  get largeMaterialSize() {
    return client.gameManager.getMemberValue(this, 'largeMaterialSize');
  }

  set largeMaterialSize(value) {
    client.gameManager.setMemberValue(this, 'largeMaterialSize', value);
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
   * The maximum amount of shielding possible on a Tile.
   *
   * @type {number}
   */
  get maxShielding() {
    return client.gameManager.getMemberValue(this, 'maxShielding');
  }

  set maxShielding(value) {
    client.gameManager.setMemberValue(this, 'maxShielding', value);
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
   * The highest upgrade level allowed on a Miner.
   *
   * @type {number}
   */
  get maxUpgradeLevel() {
    return client.gameManager.getMemberValue(this, 'maxUpgradeLevel');
  }

  set maxUpgradeLevel(value) {
    client.gameManager.setMemberValue(this, 'maxUpgradeLevel', value);
  }


  /**
   * Every Miner in the game.
   *
   * @type {Array.<Coreminer.Miner>}
   */
  get miners() {
    return client.gameManager.getMemberValue(this, 'miners');
  }

  set miners(value) {
    client.gameManager.setMemberValue(this, 'miners', value);
  }


  /**
   * The amount of money awarded when ore is dumped in the base and sold.
   *
   * @type {number}
   */
  get orePrice() {
    return client.gameManager.getMemberValue(this, 'orePrice');
  }

  set orePrice(value) {
    client.gameManager.setMemberValue(this, 'orePrice', value);
  }


  /**
   * The amount of value awarded when ore is dumped in the base and sold.
   *
   * @type {number}
   */
  get oreValue() {
    return client.gameManager.getMemberValue(this, 'oreValue');
  }

  set oreValue(value) {
    client.gameManager.setMemberValue(this, 'oreValue', value);
  }


  /**
   * List of all the players in the game.
   *
   * @type {Array.<Coreminer.Player>}
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
   * The amount of building material required to shield a Tile.
   *
   * @type {number}
   */
  get shieldCost() {
    return client.gameManager.getMemberValue(this, 'shieldCost');
  }

  set shieldCost(value) {
    client.gameManager.setMemberValue(this, 'shieldCost', value);
  }


  /**
   * The amount of mining power needed to remove one unit of shielding off a Tile.
   *
   * @type {number}
   */
  get shieldHealth() {
    return client.gameManager.getMemberValue(this, 'shieldHealth');
  }

  set shieldHealth(value) {
    client.gameManager.setMemberValue(this, 'shieldHealth', value);
  }


  /**
   * The monetary price of spawning a Miner.
   *
   * @type {number}
   */
  get spawnPrice() {
    return client.gameManager.getMemberValue(this, 'spawnPrice');
  }

  set spawnPrice(value) {
    client.gameManager.setMemberValue(this, 'spawnPrice', value);
  }


  /**
   * The amount of damage taken when suffocating inside a filled Tile.
   *
   * @type {number}
   */
  get suffocationDamage() {
    return client.gameManager.getMemberValue(this, 'suffocationDamage');
  }

  set suffocationDamage(value) {
    client.gameManager.setMemberValue(this, 'suffocationDamage', value);
  }


  /**
   * The amount of extra damage taken for suffocating under a large amount of material.
   *
   * @type {number}
   */
  get suffocationWeightDamage() {
    return client.gameManager.getMemberValue(this, 'suffocationWeightDamage');
  }

  set suffocationWeightDamage(value) {
    client.gameManager.setMemberValue(this, 'suffocationWeightDamage', value);
  }


  /**
   * The amount of building material required to build a support.
   *
   * @type {number}
   */
  get supportCost() {
    return client.gameManager.getMemberValue(this, 'supportCost');
  }

  set supportCost(value) {
    client.gameManager.setMemberValue(this, 'supportCost', value);
  }


  /**
   * The amount of mining power needed to remove a support from a Tile.
   *
   * @type {number}
   */
  get supportHealth() {
    return client.gameManager.getMemberValue(this, 'supportHealth');
  }

  set supportHealth(value) {
    client.gameManager.setMemberValue(this, 'supportHealth', value);
  }


  /**
   * All the tiles in the map, stored in Row-major order. Use `x + y * mapWidth` to access the correct index.
   *
   * @type {Array.<Coreminer.Tile>}
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
   * The cost to upgrade a Miner.
   *
   * @type {number}
   */
  get upgradePrice() {
    return client.gameManager.getMemberValue(this, 'upgradePrice');
  }

  set upgradePrice(value) {
    client.gameManager.setMemberValue(this, 'upgradePrice', value);
  }


  /**
   * Every Upgrade for a Miner in the game.
   *
   * @type {Array.<Coreminer.Upgrade>}
   */
  get upgrades() {
    return client.gameManager.getMemberValue(this, 'upgrades');
  }

  set upgrades(value) {
    client.gameManager.setMemberValue(this, 'upgrades', value);
  }


  /**
   * The amount of victory points (value) required to win.
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
