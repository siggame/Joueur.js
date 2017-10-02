// DO NOT MODIFY THIS FILE
// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class CatastropheGameManager extends GameManager {}

CatastropheGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Job: require('./job'),
  Player: require('./player'),
  Structure: require('./structure'),
  Tile: require('./tile'),
  Unit: require('./unit'),
};

module.exports = CatastropheGameManager;
