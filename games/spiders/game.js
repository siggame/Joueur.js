// Game: There's an infestation of enemy spiders challenging your queen BroodMother spider! Protect her and attack the other BroodMother in this turn based, node based, game.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * There's an infestation of enemy spiders challenging your queen BroodMother spider! Protect her and attack the other BroodMother in this turn based, node based, game.
 * @extends BaseGame
 * @memberof Spiders
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
    this.name = 'Spiders';

    // default values for private member values
    this.currentPlayer = null;
    this.currentTurn = 0;
    this.cutSpeed = 0;
    this.eggsScalar = 0;
    this.gameObjects = {};
    this.initialWebStrength = 0;
    this.maxTurns = 0;
    this.maxWebStrength = 0;
    this.movementSpeed = 0;
    this.nests = [];
    this.players = [];
    this.session = '';
    this.spitSpeed = 0;
    this.timeAddedPerTurn = 0;
    this.weavePower = 0;
    this.weaveSpeed = 0;
    this.webs = [];

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The player whose turn it is currently. That player can send commands. Other players cannot.
   *
   * @type {Spiders.Player}
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
   * The speed at which Cutters work to do cut Webs.
   *
   * @type {number}
   */
  get cutSpeed() {
    return client.gameManager.getMemberValue(this, 'cutSpeed');
  }

  set cutSpeed(value) {
    client.gameManager.setMemberValue(this, 'cutSpeed', value);
  }


  /**
   * Constant used to calculate how many eggs BroodMothers get on their owner's turns.
   *
   * @type {number}
   */
  get eggsScalar() {
    return client.gameManager.getMemberValue(this, 'eggsScalar');
  }

  set eggsScalar(value) {
    client.gameManager.setMemberValue(this, 'eggsScalar', value);
  }


  /**
   * A mapping of every game object's ID to the actual game object. Primarily used by the server and client to easily refer to the game objects via ID.
   *
   * @type {Object.<string, Spiders.GameObject>}
   */
  get gameObjects() {
    return client.gameManager.getMemberValue(this, 'gameObjects');
  }

  set gameObjects(value) {
    client.gameManager.setMemberValue(this, 'gameObjects', value);
  }


  /**
   * The starting strength for Webs.
   *
   * @type {number}
   */
  get initialWebStrength() {
    return client.gameManager.getMemberValue(this, 'initialWebStrength');
  }

  set initialWebStrength(value) {
    client.gameManager.setMemberValue(this, 'initialWebStrength', value);
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
   * The maximum strength a web can be strengthened to.
   *
   * @type {number}
   */
  get maxWebStrength() {
    return client.gameManager.getMemberValue(this, 'maxWebStrength');
  }

  set maxWebStrength(value) {
    client.gameManager.setMemberValue(this, 'maxWebStrength', value);
  }


  /**
   * The speed at which Spiderlings move on Webs.
   *
   * @type {number}
   */
  get movementSpeed() {
    return client.gameManager.getMemberValue(this, 'movementSpeed');
  }

  set movementSpeed(value) {
    client.gameManager.setMemberValue(this, 'movementSpeed', value);
  }


  /**
   * Every Nest in the game.
   *
   * @type {Array.<Spiders.Nest>}
   */
  get nests() {
    return client.gameManager.getMemberValue(this, 'nests');
  }

  set nests(value) {
    client.gameManager.setMemberValue(this, 'nests', value);
  }


  /**
   * List of all the players in the game.
   *
   * @type {Array.<Spiders.Player>}
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
   * The speed at which Spitters work to spit new Webs.
   *
   * @type {number}
   */
  get spitSpeed() {
    return client.gameManager.getMemberValue(this, 'spitSpeed');
  }

  set spitSpeed(value) {
    client.gameManager.setMemberValue(this, 'spitSpeed', value);
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
   * How much web strength is added or removed from Webs when they are weaved.
   *
   * @type {number}
   */
  get weavePower() {
    return client.gameManager.getMemberValue(this, 'weavePower');
  }

  set weavePower(value) {
    client.gameManager.setMemberValue(this, 'weavePower', value);
  }


  /**
   * The speed at which Weavers work to do strengthens and weakens on Webs.
   *
   * @type {number}
   */
  get weaveSpeed() {
    return client.gameManager.getMemberValue(this, 'weaveSpeed');
  }

  set weaveSpeed(value) {
    client.gameManager.setMemberValue(this, 'weaveSpeed', value);
  }


  /**
   * Every Web in the game.
   *
   * @type {Array.<Spiders.Web>}
   */
  get webs() {
    return client.gameManager.getMemberValue(this, 'webs');
  }

  set webs(value) {
    client.gameManager.setMemberValue(this, 'webs', value);
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Game;
