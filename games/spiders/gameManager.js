// DO NOT MODIFY THIS FILE

/**
 * There's an infestation of enemy spiders challenging your queen BroodMother spider! Protect her and attack the other BroodMother in this turn based, node based, game.
 * @namespace Spiders
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class SpidersGameManager extends GameManager {}

SpidersGameManager.gameVersion = 'a8df6038306b6855bb35959d7698f8dcbf98f48e7e148de59fef940ccb241bdf';

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
