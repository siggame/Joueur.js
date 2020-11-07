// DO NOT MODIFY THIS FILE

/**
 * Send hordes of the undead at your opponent while defending yourself against theirs to win.
 * @namespace Necrowar
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class NecrowarGameManager extends GameManager {}

NecrowarGameManager.gameVersion = '935f0e64ba290cdce31688a40bd90d1eb5375f36aeebd67482238fc0da25ef86';

NecrowarGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Player: require('./player'),
  Tile: require('./tile'),
  Tower: require('./tower'),
  TowerJob: require('./towerJob'),
  Unit: require('./unit'),
  UnitJob: require('./unitJob'),
};

module.exports = NecrowarGameManager;
