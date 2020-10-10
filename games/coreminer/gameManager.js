// DO NOT MODIFY THIS FILE

/**
 * Mine resources to obtain more value than your opponent.
 * @namespace Coreminer
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class CoreminerGameManager extends GameManager {}

CoreminerGameManager.gameVersion = 'd9d8a113b95637751dbb349edb0a873d53ebb6df7c375956772b72fba4dff9f3';

CoreminerGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Job: require('./job'),
  Player: require('./player'),
  Tile: require('./tile'),
  Unit: require('./unit'),
};

module.exports = CoreminerGameManager;
