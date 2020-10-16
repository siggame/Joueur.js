// DO NOT MODIFY THIS FILE

/**
 * Mine resources to obtain more value than your opponent.
 * @namespace Coreminer
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class CoreminerGameManager extends GameManager {}

CoreminerGameManager.gameVersion = 'ce6c632876295900d0b2fc6db0f63dfc8a20533396c67b472fa03817cb82edc4';

CoreminerGameManager.prototype._gameObjectClasses = {
  Bomb: require('./bomb'),
  GameObject: require('./gameObject'),
  Miner: require('./miner'),
  Player: require('./player'),
  Tile: require('./tile'),
  Upgrade: require('./upgrade'),
};

module.exports = CoreminerGameManager;
