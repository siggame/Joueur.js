// DO NOT MODIFY THIS FILE

/**
 * Mine resources to obtain more value than your opponent.
 * @namespace Coreminer
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class CoreminerGameManager extends GameManager {}

CoreminerGameManager.gameVersion = 'b559778acd8e4c689b8d028ca6cc154714ce79c39b09cd6d171b50faf88ef747';

CoreminerGameManager.prototype._gameObjectClasses = {
  Bomb: require('./bomb'),
  GameObject: require('./gameObject'),
  Miner: require('./miner'),
  Player: require('./player'),
  Tile: require('./tile'),
  Upgrade: require('./upgrade'),
};

module.exports = CoreminerGameManager;
