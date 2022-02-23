// DO NOT MODIFY THIS FILE

/**
 * A 7x9 board game with pieces.
 * @namespace Jungle
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class JungleGameManager extends GameManager {}

JungleGameManager.gameVersion = '28f5663518c163e31771d87c52277b0c3f74033d97f89c1a234de5e6a15f6390';

JungleGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Player: require('./player'),
};

module.exports = JungleGameManager;
