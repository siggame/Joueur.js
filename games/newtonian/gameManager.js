// DO NOT MODIFY THIS FILE

/**
 * Combine elements and be the first scientists to create fusion.
 * @namespace Newtonian
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class NewtonianGameManager extends GameManager {}

NewtonianGameManager.gameVersion = '7c19f909ee5faa0ac3faf4e989032b5a37ba94aeb5d6ae7654a15a2bb1401bbe';

NewtonianGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Job: require('./job'),
  Machine: require('./machine'),
  Player: require('./player'),
  Tile: require('./tile'),
  Unit: require('./unit'),
};

module.exports = NewtonianGameManager;
