// DO NOT MODIFY THIS FILE

/**
 * Use cowboys to have a good time and play some music on a Piano, while brawling with enemy Cowboys.
 * @namespace Saloon
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class SaloonGameManager extends GameManager {}

SaloonGameManager.gameVersion = 'fbaeac2bae9020bdd5a8816cb9ae38215c277e4bf7874a2f70c3995cd8eee8d3';

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
