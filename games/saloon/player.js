// Player: A player in this game. Every AI controls one player.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A player in this game. Every AI controls one player.
 * @extends Saloon.GameObject
 * @memberof Saloon
 */
class Player extends GameObject {
  /**
   * Initializes a Player with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.clientType = '';
    this.cowboys = [];
    this.kills = 0;
    this.lost = false;
    this.name = '';
    this.opponent = null;
    this.reasonLost = '';
    this.reasonWon = '';
    this.rowdiness = 0;
    this.score = 0;
    this.siesta = 0;
    this.timeRemaining = 0;
    this.won = false;
    this.youngGun = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * What type of client this is, e.g. 'Python', 'JavaScript', or some other language. For potential data mining purposes.
   *
   * @type {string}
   */
  get clientType() {
    return client.gameManager.getMemberValue(this, 'clientType');
  }

  set clientType(value) {
    client.gameManager.setMemberValue(this, 'clientType', value);
  }


  /**
   * Every Cowboy owned by this Player.
   *
   * @type {Array.<Saloon.Cowboy>}
   */
  get cowboys() {
    return client.gameManager.getMemberValue(this, 'cowboys');
  }

  set cowboys(value) {
    client.gameManager.setMemberValue(this, 'cowboys', value);
  }


  /**
   * How many enemy Cowboys this player's team has killed.
   *
   * @type {number}
   */
  get kills() {
    return client.gameManager.getMemberValue(this, 'kills');
  }

  set kills(value) {
    client.gameManager.setMemberValue(this, 'kills', value);
  }


  /**
   * If the player lost the game or not.
   *
   * @type {boolean}
   */
  get lost() {
    return client.gameManager.getMemberValue(this, 'lost');
  }

  set lost(value) {
    client.gameManager.setMemberValue(this, 'lost', value);
  }


  /**
   * The name of the player.
   *
   * @type {string}
   */
  get name() {
    return client.gameManager.getMemberValue(this, 'name');
  }

  set name(value) {
    client.gameManager.setMemberValue(this, 'name', value);
  }


  /**
   * This player's opponent in the game.
   *
   * @type {Saloon.Player}
   */
  get opponent() {
    return client.gameManager.getMemberValue(this, 'opponent');
  }

  set opponent(value) {
    client.gameManager.setMemberValue(this, 'opponent', value);
  }


  /**
   * The reason why the player lost the game.
   *
   * @type {string}
   */
  get reasonLost() {
    return client.gameManager.getMemberValue(this, 'reasonLost');
  }

  set reasonLost(value) {
    client.gameManager.setMemberValue(this, 'reasonLost', value);
  }


  /**
   * The reason why the player won the game.
   *
   * @type {string}
   */
  get reasonWon() {
    return client.gameManager.getMemberValue(this, 'reasonWon');
  }

  set reasonWon(value) {
    client.gameManager.setMemberValue(this, 'reasonWon', value);
  }


  /**
   * How rowdy their team is. When it gets too high their team takes a collective siesta.
   *
   * @type {number}
   */
  get rowdiness() {
    return client.gameManager.getMemberValue(this, 'rowdiness');
  }

  set rowdiness(value) {
    client.gameManager.setMemberValue(this, 'rowdiness', value);
  }


  /**
   * How many times their team has played a piano.
   *
   * @type {number}
   */
  get score() {
    return client.gameManager.getMemberValue(this, 'score');
  }

  set score(value) {
    client.gameManager.setMemberValue(this, 'score', value);
  }


  /**
   * 0 when not having a team siesta. When greater than 0 represents how many turns left for the team siesta to complete.
   *
   * @type {number}
   */
  get siesta() {
    return client.gameManager.getMemberValue(this, 'siesta');
  }

  set siesta(value) {
    client.gameManager.setMemberValue(this, 'siesta', value);
  }


  /**
   * The amount of time (in ns) remaining for this AI to send commands.
   *
   * @type {number}
   */
  get timeRemaining() {
    return client.gameManager.getMemberValue(this, 'timeRemaining');
  }

  set timeRemaining(value) {
    client.gameManager.setMemberValue(this, 'timeRemaining', value);
  }


  /**
   * If the player won the game or not.
   *
   * @type {boolean}
   */
  get won() {
    return client.gameManager.getMemberValue(this, 'won');
  }

  set won(value) {
    client.gameManager.setMemberValue(this, 'won', value);
  }


  /**
   * The YoungGun this Player uses to call in new Cowboys.
   *
   * @type {Saloon.YoungGun}
   */
  get youngGun() {
    return client.gameManager.getMemberValue(this, 'youngGun');
  }

  set youngGun(value) {
    client.gameManager.setMemberValue(this, 'youngGun', value);
  }



  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Player;
