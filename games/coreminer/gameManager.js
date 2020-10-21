// DO NOT MODIFY THIS FILE

/**
 * Mine resources to obtain more value than your opponent.
 * @namespace Coreminer
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class CoreminerGameManager extends GameManager {}

CoreminerGameManager.gameVersion = 'a4592bb5acb0415146605769f439a09baf3768f41cdb3c7ad9dc971f42c4d96e';

CoreminerGameManager.prototype._gameObjectClasses = {
  Bomb: require('./bomb'),
  GameObject: require('./gameObject'),
  Miner: require('./miner'),
  Player: require('./player'),
  Tile: require('./tile'),
  Upgrade: require('./upgrade'),
};

module.exports = CoreminerGameManager;
