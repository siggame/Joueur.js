// Piece: A chess piece.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A chess piece.
 * @extends GameObject
 */
class Piece extends GameObject {
  /**
   * initializes a Piece with basic logic as provided by the Creer code generator
   *
   * @memberof Piece
   * @private
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.captured = false;
    this.file = '';
    this.hasMoved = false;
    this.owner = null;
    this.rank = 0;
    this.type = '';

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * When the Piece has been captured (removed from the board) this is true. Otherwise false.
   *
   * @type {boolean}
   */
  get captured() {
    return client.gameManager.getMemberValue(this, 'captured');
  }

  set captured(value) {
    client.gameManager.setMemberValue(this, 'captured', value);
  }


  /**
   * The file (column) coordinate of the Piece represented as a letter [a-h], with 'a' starting at the left of the board.
   *
   * @type {string}
   */
  get file() {
    return client.gameManager.getMemberValue(this, 'file');
  }

  set file(value) {
    client.gameManager.setMemberValue(this, 'file', value);
  }


  /**
   * If the Piece has moved from its starting position.
   *
   * @type {boolean}
   */
  get hasMoved() {
    return client.gameManager.getMemberValue(this, 'hasMoved');
  }

  set hasMoved(value) {
    client.gameManager.setMemberValue(this, 'hasMoved', value);
  }


  /**
   * The player that controls this chess Piece.
   *
   * @type {Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The rank (row) coordinate of the Piece represented as a number [1-8], with 1 starting at the bottom of the board.
   *
   * @type {number}
   */
  get rank() {
    return client.gameManager.getMemberValue(this, 'rank');
  }

  set rank(value) {
    client.gameManager.setMemberValue(this, 'rank', value);
  }


  /**
   * The type of chess Piece this is, either: 'King', 'Queen', 'Knight', 'Rook', 'Bishop', or 'Pawn'.
   *
   * @type {string}
   */
  get type() {
    return client.gameManager.getMemberValue(this, 'type');
  }

  set type(value) {
    client.gameManager.setMemberValue(this, 'type', value);
  }



  /**
   * Moves the Piece from its current location to the given rank and file.
   *
   * @param {string} file - The file coordinate to move to. Must be [a-h].
   * @param {number} rank - The rank coordinate to move to. Must be [1-8].
   * @param {string} [promotionType] - If this is a Pawn moving to the end of the board then this parameter is what to promote it to. When used must be 'Queen', 'Knight', 'Rook', or 'Bishop'.
   * @returns {Move} - The Move you did if successful, otherwise null if invalid. In addition if your move was invalid you will lose.
   */
  move(file, rank, promotionType) {
    if(arguments.length <= 2) {
      promotionType = '';
    }

    return client.runOnServer(this, 'move', {
      file: file,
      rank: rank,
      promotionType: promotionType,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Piece;
