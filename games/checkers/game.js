// Game: The simple version of American Checkers. An 8x8 board with 12 checkers on each side that must move diagonally to the opposing side until kinged.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * The simple version of American Checkers. An 8x8 board with 12 checkers on each side that must move diagonally to the opposing side until kinged.
 * @extends BaseGame
 * @memberof Checkers
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
    this.name = 'Checkers';

    // default values for private member values
    this.boardHeight = 0;
    this.boardWidth = 0;
    this.checkerMoved = null;
    this.checkerMovedJumped = false;
    this.checkers = [];
    this.currentPlayer = null;
    this.currentTurn = 0;
    this.gameObjects = {};
    this.maxTurns = 0;
    this.players = [];
    this.session = '';
    this.timeAddedPerTurn = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The height of the board for the Y component of a checker.
   *
   * @type {number}
   */
  get boardHeight() {
    return client.gameManager.getMemberValue(this, 'boardHeight');
  }

  set boardHeight(value) {
    client.gameManager.setMemberValue(this, 'boardHeight', value);
  }


  /**
   * The width of the board for X component of a checker.
   *
   * @type {number}
   */
  get boardWidth() {
    return client.gameManager.getMemberValue(this, 'boardWidth');
  }

  set boardWidth(value) {
    client.gameManager.setMemberValue(this, 'boardWidth', value);
  }


  /**
   * The checker that last moved and must be moved because only one checker can move during each players turn.
   *
   * @type {Checkers.Checker}
   */
  get checkerMoved() {
    return client.gameManager.getMemberValue(this, 'checkerMoved');
  }

  set checkerMoved(value) {
    client.gameManager.setMemberValue(this, 'checkerMoved', value);
  }


  /**
   * If the last checker that moved jumped, meaning it can move again.
   *
   * @type {boolean}
   */
  get checkerMovedJumped() {
    return client.gameManager.getMemberValue(this, 'checkerMovedJumped');
  }

  set checkerMovedJumped(value) {
    client.gameManager.setMemberValue(this, 'checkerMovedJumped', value);
  }


  /**
   * All the checkers currently in the game.
   *
   * @type {Array.<Checkers.Checker>}
   */
  get checkers() {
    return client.gameManager.getMemberValue(this, 'checkers');
  }

  set checkers(value) {
    client.gameManager.setMemberValue(this, 'checkers', value);
  }


  /**
   * The player whose turn it is currently. That player can send commands. Other players cannot.
   *
   * @type {Checkers.Player}
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
   * @type {Object.<string, Checkers.GameObject>}
   */
  get gameObjects() {
    return client.gameManager.getMemberValue(this, 'gameObjects');
  }

  set gameObjects(value) {
    client.gameManager.setMemberValue(this, 'gameObjects', value);
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
   * @type {Array.<Checkers.Player>}
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


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Game;
