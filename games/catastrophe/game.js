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
 * @memberof Catastrophe
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
    this.name = 'Catastrophe';

    // default values for private member values
    this.catEnergyMult = 0;
    this.currentPlayer = null;
    this.currentTurn = 0;
    this.gameObjects = {};
    this.harvestCooldown = 0;
    this.jobs = [];
    this.lowerHarvestAmount = 0;
    this.mapHeight = 0;
    this.mapWidth = 0;
    this.maxTurns = 0;
    this.monumentCostMult = 0;
    this.monumentMaterials = 0;
    this.neutralMaterials = 0;
    this.players = [];
    this.session = '';
    this.shelterMaterials = 0;
    this.startingFood = 0;
    this.starvingEnergyMult = 0;
    this.structures = [];
    this.tiles = [];
    this.timeAddedPerTurn = 0;
    this.turnsBetweenHarvests = 0;
    this.turnsToCreateHuman = 0;
    this.turnsToLowerHarvest = 0;
    this.units = [];
    this.wallMaterials = 0;

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
   * @type {Catastrophe.Player}
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
   * @type {Object.<string, Catastrophe.GameObject>}
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
   * @type {Array.<Catastrophe.Job>}
   */
  get jobs() {
    return client.gameManager.getMemberValue(this, 'jobs');
  }

  set jobs(value) {
    client.gameManager.setMemberValue(this, 'jobs', value);
  }


  /**
   * The amount that the harvest rate is lowered each season.
   *
   * @type {number}
   */
  get lowerHarvestAmount() {
    return client.gameManager.getMemberValue(this, 'lowerHarvestAmount');
  }

  set lowerHarvestAmount(value) {
    client.gameManager.setMemberValue(this, 'lowerHarvestAmount', value);
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
   * The multiplier for the cost of actions when performing them in range of a monument. Does not effect pickup cost.
   *
   * @type {number}
   */
  get monumentCostMult() {
    return client.gameManager.getMemberValue(this, 'monumentCostMult');
  }

  set monumentCostMult(value) {
    client.gameManager.setMemberValue(this, 'monumentCostMult', value);
  }


  /**
   * The number of materials in a monument.
   *
   * @type {number}
   */
  get monumentMaterials() {
    return client.gameManager.getMemberValue(this, 'monumentMaterials');
  }

  set monumentMaterials(value) {
    client.gameManager.setMemberValue(this, 'monumentMaterials', value);
  }


  /**
   * The number of materials in a neutral Structure.
   *
   * @type {number}
   */
  get neutralMaterials() {
    return client.gameManager.getMemberValue(this, 'neutralMaterials');
  }

  set neutralMaterials(value) {
    client.gameManager.setMemberValue(this, 'neutralMaterials', value);
  }


  /**
   * List of all the players in the game.
   *
   * @type {Array.<Catastrophe.Player>}
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
   * The number of materials in a shelter.
   *
   * @type {number}
   */
  get shelterMaterials() {
    return client.gameManager.getMemberValue(this, 'shelterMaterials');
  }

  set shelterMaterials(value) {
    client.gameManager.setMemberValue(this, 'shelterMaterials', value);
  }


  /**
   * The amount of food Players start with.
   *
   * @type {number}
   */
  get startingFood() {
    return client.gameManager.getMemberValue(this, 'startingFood');
  }

  set startingFood(value) {
    client.gameManager.setMemberValue(this, 'startingFood', value);
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
   * @type {Array.<Catastrophe.Structure>}
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
   * @type {Array.<Catastrophe.Tile>}
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
   * After a food tile is harvested, the number of turns before it can be harvested again.
   *
   * @type {number}
   */
  get turnsBetweenHarvests() {
    return client.gameManager.getMemberValue(this, 'turnsBetweenHarvests');
  }

  set turnsBetweenHarvests(value) {
    client.gameManager.setMemberValue(this, 'turnsBetweenHarvests', value);
  }


  /**
   * The number of turns between fresh humans being spawned on the road.
   *
   * @type {number}
   */
  get turnsToCreateHuman() {
    return client.gameManager.getMemberValue(this, 'turnsToCreateHuman');
  }

  set turnsToCreateHuman(value) {
    client.gameManager.setMemberValue(this, 'turnsToCreateHuman', value);
  }


  /**
   * The number of turns before the harvest rate is lowered (length of each season basically).
   *
   * @type {number}
   */
  get turnsToLowerHarvest() {
    return client.gameManager.getMemberValue(this, 'turnsToLowerHarvest');
  }

  set turnsToLowerHarvest(value) {
    client.gameManager.setMemberValue(this, 'turnsToLowerHarvest', value);
  }


  /**
   * Every Unit in the game.
   *
   * @type {Array.<Catastrophe.Unit>}
   */
  get units() {
    return client.gameManager.getMemberValue(this, 'units');
  }

  set units(value) {
    client.gameManager.setMemberValue(this, 'units', value);
  }


  /**
   * The number of materials in a wall.
   *
   * @type {number}
   */
  get wallMaterials() {
    return client.gameManager.getMemberValue(this, 'wallMaterials');
  }

  set wallMaterials(value) {
    client.gameManager.setMemberValue(this, 'wallMaterials', value);
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
