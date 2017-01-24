// DO NOT MODIFY THIS FILE
// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class CheckersGameManager extends GameManager {}

CheckersGameManager.prototype._gameObjectClasses = {
  Checker: require('./checker'),
  GameObject: require('./gameObject'),
  Player: require('./player'),
};

module.exports = CheckersGameManager;
