// DO NOT MODIFY THIS FILE

/**
 * Use cowboys to have a good time and play some music on a Piano, while brawling with enemy Cowboys.
 *
 * All this documentation is specific to the Saloon game.
 * @namespace Saloon
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class SaloonGameManager extends GameManager {}

SaloonGameManager.prototype._gameObjectClasses = {
  Bottle: require('./bottle'),
  Cowboy: require('./cowboy'),
  Furnishing: require('./furnishing'),
  GameObject: require('./gameObject'),
  Player: require('./player'),
  Tile: require('./tile'),
  YoungGun: require('./youngGun'),
};

module.exports = SaloonGameManager;
