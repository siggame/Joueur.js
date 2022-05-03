// Game: A 7x9 board game with pieces, to win the game the players must make successful captures of the enemy and reach the opponents den.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A 7x9 board game with pieces, to win the game the players must make successful captures of the enemy and reach the opponents den.
 * @extends BaseGame
 * @memberof JungleChess
 */
class Game extends BaseGame {
  /**
   * Initializes a Game with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    /**
     * The name of the game.
     * @type {string}
     */
    this.name = 'JungleChess';

    // default values for private member values
    this.gameObjects = {};
    this.history = [];
    this.jungleFen = '';
    this.players = [];
    this.session = '';

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * A mapping of every game object's ID to the actual game object. Primarily used by the server and client to easily refer to the game objects via ID.
   *
   * @type {Object.<string, JungleChess.GameObject>}
   */
  get gameObjects() {
    return client.gameManager.getMemberValue(this, 'gameObjects');
  }

  set gameObjects(value) {
    client.gameManager.setMemberValue(this, 'gameObjects', value);
  }


  /**
   * The list of [known] moves that have occurred in the game, in a format. The first element is the first move, with the last element being the most recent.
   *
   * @type {Array.<string>}
   */
  get history() {
    return client.gameManager.getMemberValue(this, 'history');
  }

  set history(value) {
    client.gameManager.setMemberValue(this, 'history', value);
  }


  /**
   * The jungleFen is similar to the chess FEN, the order looks like this, board (split into rows by '/'), whose turn it is, half move, and full move.
   *
   * @type {string}
   */
  get jungleFen() {
    return client.gameManager.getMemberValue(this, 'jungleFen');
  }

  set jungleFen(value) {
    client.gameManager.setMemberValue(this, 'jungleFen', value);
  }


  /**
   * List of all the players in the game.
   *
   * @type {Array.<JungleChess.Player>}
   */
  get players() {
    return client.gameManager.getMemberValue(this, 'players');
  }

  set players(value) {
    client.gameManager.setMemberValue(this, 'players', value);
  }


  /**
   * A unique identifier for the game instance that is being played.
   *
   * @type {string}
   */
  get session() {
    return client.gameManager.getMemberValue(this, 'session');
  }

  set session(value) {
    client.gameManager.setMemberValue(this, 'session', value);
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Game;
