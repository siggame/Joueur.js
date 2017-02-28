// DO NOT MODIFY THIS FILE
// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class StumpedGameManager extends GameManager {}

StumpedGameManager.prototype._gameObjectClasses = {
  Beaver: require('./beaver'),
  GameObject: require('./gameObject'),
  Job: require('./job'),
  Player: require('./player'),
  Spawner: require('./spawner'),
  Tile: require('./tile'),
};

module.exports = StumpedGameManager;
