// DO NOT MODIFY THIS FILE

/**
 * Mine resources to obtain more value than your opponent.
 * @namespace Coreminer
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class CoreminerGameManager extends GameManager {}

CoreminerGameManager.gameVersion = '3418447660e65ea28b97e2a74d8d95ebd694f36bbb0b6f4bd8d43fc97a3ecd9e';

CoreminerGameManager.prototype._gameObjectClasses = {
  Bomb: require('./bomb'),
  GameObject: require('./gameObject'),
  Miner: require('./miner'),
  Player: require('./player'),
  Tile: require('./tile'),
  Upgrade: require('./upgrade'),
};

module.exports = CoreminerGameManager;
