// DO NOT MODIFY THIS FILE

/**
 * Mine resources to obtain more wealth than your opponent.
 * @namespace Coreminer
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class CoreminerGameManager extends GameManager {}

CoreminerGameManager.gameVersion = '7c106e1dbcbba7626801ee73d719a2234967d6da0919b290713def4c6954cb84';

CoreminerGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Job: require('./job'),
  Player: require('./player'),
  Tile: require('./tile'),
  Unit: require('./unit'),
};

module.exports = CoreminerGameManager;
