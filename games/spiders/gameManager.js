// DO NOT MODIFY THIS FILE

/**
 * There's an infestation of enemy spiders challenging your queen broodmother spider! Protect her and attack the other broodmother in this turn based, node based, game.
 *
 * All this documentation is specific to the Spiders game.
 * @namespace Spiders
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class SpidersGameManager extends GameManager {}

SpidersGameManager.prototype._gameObjectClasses = {
  BroodMother: require('./broodMother'),
  Cutter: require('./cutter'),
  GameObject: require('./gameObject'),
  Nest: require('./nest'),
  Player: require('./player'),
  Spider: require('./spider'),
  Spiderling: require('./spiderling'),
  Spitter: require('./spitter'),
  Weaver: require('./weaver'),
  Web: require('./web'),
};

module.exports = SpidersGameManager;
