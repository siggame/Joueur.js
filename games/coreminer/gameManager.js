// DO NOT MODIFY THIS FILE

/**
 * Mine resources to obtain more wealth than your opponent.
 * @namespace Coreminer
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class CoreminerGameManager extends GameManager {}

CoreminerGameManager.gameVersion = '397e64cb9b2f8d76a04e0f32823456fad3d0dd8902b39c6f4d3bc3d636ec2bfd';

CoreminerGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Job: require('./job'),
  Player: require('./player'),
  Tile: require('./tile'),
  Unit: require('./unit'),
};

module.exports = CoreminerGameManager;
