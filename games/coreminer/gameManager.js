// DO NOT MODIFY THIS FILE

/**
 * Mine resources to obtain more wealth than your opponent.
 * @namespace Coreminer
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class CoreminerGameManager extends GameManager {}

CoreminerGameManager.gameVersion = '8d537ee0d9bd5cd575dca2f2f08f184157cd9dce66a015e5598b3ee0e70e7ef6';

CoreminerGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Job: require('./job'),
  Player: require('./player'),
  Tile: require('./tile'),
  Unit: require('./unit'),
};

module.exports = CoreminerGameManager;
