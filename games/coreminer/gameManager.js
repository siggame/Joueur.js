// DO NOT MODIFY THIS FILE

/**
 * Mine resources to obtain more wealth than your opponent.
 * @namespace Coreminer
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class CoreminerGameManager extends GameManager {}

CoreminerGameManager.gameVersion = 'ebf8479aecc1663fdbdbd350b23ed190fc0b97b892200e752100f5509cb0d1a2';

CoreminerGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Job: require('./job'),
  Player: require('./player'),
  Tile: require('./tile'),
  Unit: require('./unit'),
};

module.exports = CoreminerGameManager;
