// DO NOT MODIFY THIS FILE

/**
 * Collect of the most of the rarest mineral orbiting around the sun and out-compete your competitor.
 * @namespace Stardash
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class StardashGameManager extends GameManager {}

StardashGameManager.gameVersion = '0fa378e83ac567ebdf3e9805d3f130023f936e2740acda173d238b37f2b5d541';

StardashGameManager.prototype._gameObjectClasses = {
  Body: require('./body'),
  GameObject: require('./gameObject'),
  Job: require('./job'),
  Player: require('./player'),
  Projectile: require('./projectile'),
  Unit: require('./unit'),
};

module.exports = StardashGameManager;
