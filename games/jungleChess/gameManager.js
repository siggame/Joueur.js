// DO NOT MODIFY THIS FILE

/**
 * A 7x9 board game with pieces, to win the game the players must make successful captures of the enemy and reach the opponents den.
 * @namespace JungleChess
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class JungleChessGameManager extends GameManager {}

JungleChessGameManager.gameVersion = '0f0b85b33f03a669a391b36c90daa195d028dd1f21f8d4b601adfcf39b23eee2';

JungleChessGameManager.prototype._gameObjectClasses = {
  GameObject: require('./gameObject'),
  Player: require('./player'),
};

module.exports = JungleChessGameManager;
