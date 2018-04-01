// DO NOT MODIFY THIS FILE

/**
 * The simple version of American Checkers. An 8x8 board with 12 checkers on each side that must move diagonally to the opposing side until kinged.
 * @namespace Checkers
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class CheckersGameManager extends GameManager {}

CheckersGameManager.prototype._gameObjectClasses = {
  Checker: require('./checker'),
  GameObject: require('./gameObject'),
  Player: require('./player'),
};

module.exports = CheckersGameManager;
