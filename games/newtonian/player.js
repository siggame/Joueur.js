// Player: A player in this game. Every AI controls one player.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A player in this game. Every AI controls one player.
 * @extends Newtonian.GameObject
 * @memberof Newtonian
 */
class Player extends GameObject {
  /**
   * Initializes a Player with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.clientType = '';
    this.generatorTiles = [];
    this.heat = 0;
    this.internSpawn = 0;
    this.lost = false;
    this.managerSpawn = 0;
    this.name = '';
    this.opponent = null;
    this.physicistSpawn = 0;
    this.pressure = 0;
    this.reasonLost = '';
    this.reasonWon = '';
    this.spawnTiles = [];
    this.timeRemaining = 0;
    this.units = [];
    this.won = false;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * What type of client this is, e.g. 'Python', 'JavaScript', or some other language. For potential data mining purposes.
   *
   * @type {string}
   */
  get clientType() {
    return client.gameManager.getMemberValue(this, 'clientType');
  }

  set clientType(value) {
    client.gameManager.setMemberValue(this, 'clientType', value);
  }


  /**
   * Every generator Tile owned by this Player. (listed from the outer edges inward, from top to bottom).
   *
   * @type {Array.<Newtonian.Tile>}
   */
  get generatorTiles() {
    return client.gameManager.getMemberValue(this, 'generatorTiles');
  }

  set generatorTiles(value) {
    client.gameManager.setMemberValue(this, 'generatorTiles', value);
  }


  /**
   * The amount of heat this Player has.
   *
   * @type {number}
   */
  get heat() {
    return client.gameManager.getMemberValue(this, 'heat');
  }

  set heat(value) {
    client.gameManager.setMemberValue(this, 'heat', value);
  }


  /**
   * The time left till a intern spawns. (0 to spawnTime).
   *
   * @type {number}
   */
  get internSpawn() {
    return client.gameManager.getMemberValue(this, 'internSpawn');
  }

  set internSpawn(value) {
    client.gameManager.setMemberValue(this, 'internSpawn', value);
  }


  /**
   * If the player lost the game or not.
   *
   * @type {boolean}
   */
  get lost() {
    return client.gameManager.getMemberValue(this, 'lost');
  }

  set lost(value) {
    client.gameManager.setMemberValue(this, 'lost', value);
  }


  /**
   * The time left till a manager spawns. (0 to spawnTime).
   *
   * @type {number}
   */
  get managerSpawn() {
    return client.gameManager.getMemberValue(this, 'managerSpawn');
  }

  set managerSpawn(value) {
    client.gameManager.setMemberValue(this, 'managerSpawn', value);
  }


  /**
   * The name of the player.
   *
   * @type {string}
   */
  get name() {
    return client.gameManager.getMemberValue(this, 'name');
  }

  set name(value) {
    client.gameManager.setMemberValue(this, 'name', value);
  }


  /**
   * This player's opponent in the game.
   *
   * @type {Newtonian.Player}
   */
  get opponent() {
    return client.gameManager.getMemberValue(this, 'opponent');
  }

  set opponent(value) {
    client.gameManager.setMemberValue(this, 'opponent', value);
  }


  /**
   * The time left till a physicist spawns. (0 to spawnTime).
   *
   * @type {number}
   */
  get physicistSpawn() {
    return client.gameManager.getMemberValue(this, 'physicistSpawn');
  }

  set physicistSpawn(value) {
    client.gameManager.setMemberValue(this, 'physicistSpawn', value);
  }


  /**
   * The amount of pressure this Player has.
   *
   * @type {number}
   */
  get pressure() {
    return client.gameManager.getMemberValue(this, 'pressure');
  }

  set pressure(value) {
    client.gameManager.setMemberValue(this, 'pressure', value);
  }


  /**
   * The reason why the player lost the game.
   *
   * @type {string}
   */
  get reasonLost() {
    return client.gameManager.getMemberValue(this, 'reasonLost');
  }

  set reasonLost(value) {
    client.gameManager.setMemberValue(this, 'reasonLost', value);
  }


  /**
   * The reason why the player won the game.
   *
   * @type {string}
   */
  get reasonWon() {
    return client.gameManager.getMemberValue(this, 'reasonWon');
  }

  set reasonWon(value) {
    client.gameManager.setMemberValue(this, 'reasonWon', value);
  }


  /**
   * All the tiles this Player's units can spawn on. (listed from the outer edges inward, from top to bottom).
   *
   * @type {Array.<Newtonian.Tile>}
   */
  get spawnTiles() {
    return client.gameManager.getMemberValue(this, 'spawnTiles');
  }

  set spawnTiles(value) {
    client.gameManager.setMemberValue(this, 'spawnTiles', value);
  }


  /**
   * The amount of time (in ns) remaining for this AI to send commands.
   *
   * @type {number}
   */
  get timeRemaining() {
    return client.gameManager.getMemberValue(this, 'timeRemaining');
  }

  set timeRemaining(value) {
    client.gameManager.setMemberValue(this, 'timeRemaining', value);
  }


  /**
   * Every Unit owned by this Player.
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
   * If the player won the game or not.
   *
   * @type {boolean}
   */
  get won() {
    return client.gameManager.getMemberValue(this, 'won');
  }

  set won(value) {
    client.gameManager.setMemberValue(this, 'won', value);
  }



  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Player;
