// Game: The traditional 8x8 chess board with pieces.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

/**
 * The traditional 8x8 chess board with pieces.
 * @extends BaseGame
 */
class Game extends BaseGame {
  /**
   * initializes a Game with basic logic as provided by the Creer code generator
   *
   * @private
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    /**
     * The name of the game.
     */
    this.name = 'Chess';

    // default values for private member values
    this.currentPlayer = null;
    this.currentTurn = 0;
    this.fen = '';
    this.gameObjects = {};
    this.maxTurns = 0;
    this.moves = [];
    this.pieces = [];
    this.players = [];
    this.session = '';
    this.turnsToDraw = 0;
  }


  // Member variables

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
   * Forsyth–Edwards Notation, a notation that describes the game board.
   *
   * @type {string}
   */
  get fen() {
    return client.gameManager.getMemberValue(this, 'fen');
  }

  set fen(value) {
    client.gameManager.setMemberValue(this, 'fen', value);
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
   * The list of Moves that have occurred, in order.
   *
   * @type {Array.<Move>}
   */
  get moves() {
    return client.gameManager.getMemberValue(this, 'moves');
  }

  set moves(value) {
    client.gameManager.setMemberValue(this, 'moves', value);
  }


  /**
   * All the uncaptured Pieces in the game.
   *
   * @type {Array.<Piece>}
   */
  get pieces() {
    return client.gameManager.getMemberValue(this, 'pieces');
  }

  set pieces(value) {
    client.gameManager.setMemberValue(this, 'pieces', value);
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
   * How many turns until the game ends because no pawn has moved and no Piece has been taken.
   *
   * @type {number}
   */
  get turnsToDraw() {
    return client.gameManager.getMemberValue(this, 'turnsToDraw');
  }

  set turnsToDraw(value) {
    client.gameManager.setMemberValue(this, 'turnsToDraw', value);
  }
}

module.exports = Game;
