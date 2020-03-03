// DO NOT MODIFY THIS FILE

/**
 * The traditional 8x8 chess board with pieces.
 * @namespace Chess
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class ChessGameManager extends GameManager {}

ChessGameManager.gameVersion = 'cfa5f5c1685087ce2899229c04c26e39f231e897ecc8fe036b44bc22103ef801';

ChessGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Player: require('./player'),
};

module.exports = ChessGameManager;
