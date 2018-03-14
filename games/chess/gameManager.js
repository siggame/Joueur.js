// DO NOT MODIFY THIS FILE

/**
 * The traditional 8x8 chess board with pieces.
 *
 * All this documentation is specific to the Chess game.
 * @namespace Chess
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class ChessGameManager extends GameManager {}

ChessGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Move: require('./move'),
  Piece: require('./piece'),
  Player: require('./player'),
};

module.exports = ChessGameManager;
