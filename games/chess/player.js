// Player: A player in this game. Every AI controls one player.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

/**
 * A player in this game. Every AI controls one player.
 * @extends GameObject
 */
class Player extends GameObject {
  /**
   * initializes a Player with basic logic as provided by the Creer code generator
   *
   * @private
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.clientType = '';
    this.color = '';
    this.inCheck = false;
    this.lost = false;
    this.madeMove = false;
    this.name = '';
    this.opponent = null;
    this.pieces = [];
    this.rankDirection = 0;
    this.reasonLost = '';
    this.reasonWon = '';
    this.timeRemaining = 0;
    this.won = false;
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
   * The color (side) of this player. Either 'White' or 'Black', with the 'White' player having the first move.
   *
   * @type {string}
   */
  get color() {
    return client.gameManager.getMemberValue(this, 'color');
  }

  set color(value) {
    client.gameManager.setMemberValue(this, 'color', value);
  }


  /**
   * True if this player is currently in check, and must move out of check, false otherwise.
   *
   * @type {boolean}
   */
  get inCheck() {
    return client.gameManager.getMemberValue(this, 'inCheck');
  }

  set inCheck(value) {
    client.gameManager.setMemberValue(this, 'inCheck', value);
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
   * If the Player has made their move for the turn. true means they can no longer move a Piece this turn.
   *
   * @type {boolean}
   */
  get madeMove() {
    return client.gameManager.getMemberValue(this, 'madeMove');
  }

  set madeMove(value) {
    client.gameManager.setMemberValue(this, 'madeMove', value);
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
   * @type {Player}
   */
  get opponent() {
    return client.gameManager.getMemberValue(this, 'opponent');
  }

  set opponent(value) {
    client.gameManager.setMemberValue(this, 'opponent', value);
  }


  /**
   * All the uncaptured chess Pieces owned by this player.
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
   * The direction your Pieces must go along the rank axis until they reach the other side.
   *
   * @type {number}
   */
  get rankDirection() {
    return client.gameManager.getMemberValue(this, 'rankDirection');
  }

  set rankDirection(value) {
    client.gameManager.setMemberValue(this, 'rankDirection', value);
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
}

module.exports = Player;
