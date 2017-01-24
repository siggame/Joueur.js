// DO NOT MODIFY THIS FILE
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
