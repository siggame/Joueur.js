// DO NOT MODIFY THIS FILE

/**
 * The simple version of American Checkers. An 8x8 board with 12 checkers on each side that must move diagonally to the opposing side until kinged.
 * @namespace Checkers
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class CheckersGameManager extends GameManager {}

CheckersGameManager.gameVersion = '49f1e5586cc4c62b6f74081e803d8edf9f54e8315f221c62c638f963cea8ab31';

CheckersGameManager.prototype._gameObjectClasses = {
  Checker: require('./checker'),
  GameObject: require('./gameObject'),
  Player: require('./player'),
};

module.exports = CheckersGameManager;
