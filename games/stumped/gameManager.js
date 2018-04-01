// DO NOT MODIFY THIS FILE

/**
 * Gather branches and build up your lodge as beavers fight to survive.
 * @namespace Stumped
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class StumpedGameManager extends GameManager {}

StumpedGameManager.prototype._gameObjectClasses = {
  Beaver: require('./beaver'),
  GameObject: require('./gameObject'),
  Job: require('./job'),
  Player: require('./player'),
  Spawner: require('./spawner'),
  Tile: require('./tile'),
};

module.exports = StumpedGameManager;
