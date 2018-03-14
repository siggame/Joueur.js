// DO NOT MODIFY THIS FILE

/**
 * Convert as many humans to as you can to survive in this post-apocalyptic wasteland.
 *
 * All this documentation is specific to the Catastrophe game.
 * @namespace Catastrophe
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class CatastropheGameManager extends GameManager {}

CatastropheGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Job: require('./job'),
  Player: require('./player'),
  Structure: require('./structure'),
  Tile: require('./tile'),
  Unit: require('./unit'),
};

module.exports = CatastropheGameManager;
