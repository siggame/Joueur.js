// DO NOT MODIFY THIS FILE

/**
 * The traditional 8x8 chess board with pieces.
 * @namespace Chess
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class ChessGameManager extends GameManager {}

ChessGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Player: require('./player'),
};

module.exports = ChessGameManager;
