// DO NOT MODIFY THIS FILE

/**
 * Combine elements and be the first scientists to create fusion.
 * @namespace Newtonian
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class NewtonianGameManager extends GameManager {}

NewtonianGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Job: require('./job'),
  Machine: require('./machine'),
  Player: require('./player'),
  Tile: require('./tile'),
  Unit: require('./unit'),
};

module.exports = NewtonianGameManager;
