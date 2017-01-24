// Move: Contains all details about a Piece's move in the game.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Contains all details about a Piece's move in the game.
 */
class Move extends GameObject {
  /**
   * initializes a Move with basic logic as provided by the Creer code generator
   *
   * @memberof Move
   * @private
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.captured = null;
    this.fromFile = "";
    this.fromRank = 0;
    this.piece = null;
    this.promotion = "";
    this.san = "";
    this.toFile = "";
    this.toRank = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The Piece captured by this Move, null if no capture.
   *
   * @type {Piece}
   */
  get captured() {
    return client.gameManager.getMemberValue(this, 'captured');
  }

  set captured(value) {
    client.gameManager.setMemberValue(this, 'captured', value);
  }


  /**
   * The file the Piece moved from.
   *
   * @type {string}
   */
  get fromFile() {
    return client.gameManager.getMemberValue(this, 'fromFile');
  }

  set fromFile(value) {
    client.gameManager.setMemberValue(this, 'fromFile', value);
  }


  /**
   * The rank the Piece moved from.
   *
   * @type {number}
   */
  get fromRank() {
    return client.gameManager.getMemberValue(this, 'fromRank');
  }

  set fromRank(value) {
    client.gameManager.setMemberValue(this, 'fromRank', value);
  }


  /**
   * The Piece that was moved.
   *
   * @type {Piece}
   */
  get piece() {
    return client.gameManager.getMemberValue(this, 'piece');
  }

  set piece(value) {
    client.gameManager.setMemberValue(this, 'piece', value);
  }


  /**
   * The Piece type this Move's Piece was promoted to from a Pawn, empty string if no promotion occurred.
   *
   * @type {string}
   */
  get promotion() {
    return client.gameManager.getMemberValue(this, 'promotion');
  }

  set promotion(value) {
    client.gameManager.setMemberValue(this, 'promotion', value);
  }


  /**
   * The standard algebraic notation (SAN) representation of the move.
   *
   * @type {string}
   */
  get san() {
    return client.gameManager.getMemberValue(this, 'san');
  }

  set san(value) {
    client.gameManager.setMemberValue(this, 'san', value);
  }


  /**
   * The file the Piece moved to.
   *
   * @type {string}
   */
  get toFile() {
    return client.gameManager.getMemberValue(this, 'toFile');
  }

  set toFile(value) {
    client.gameManager.setMemberValue(this, 'toFile', value);
  }


  /**
   * The rank the Piece moved to.
   *
   * @type {number}
   */
  get toRank() {
    return client.gameManager.getMemberValue(this, 'toRank');
  }

  set toRank(value) {
    client.gameManager.setMemberValue(this, 'toRank', value);
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Move;
