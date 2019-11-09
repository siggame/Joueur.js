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
 * @extends Necrowar.GameObject
 * @memberof Necrowar
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
    this.gold = 0;
    this.health = 0;
    this.homeBase = [];
    this.lost = false;
    this.mana = 0;
    this.name = '';
    this.opponent = null;
    this.reasonLost = '';
    this.reasonWon = '';
    this.side = [];
    this.timeRemaining = 0;
    this.towers = [];
    this.units = [];
    this.won = false;

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
   * The amount of gold this Player has.
   *
   * @type {number}
   */
  get gold() {
    return client.gameManager.getMemberValue(this, 'gold');
  }

  set gold(value) {
    client.gameManager.setMemberValue(this, 'gold', value);
  }


  /**
   * The amount of health remaining for this player's main unit.
   *
   * @type {number}
   */
  get health() {
    return client.gameManager.getMemberValue(this, 'health');
  }

  set health(value) {
    client.gameManager.setMemberValue(this, 'health', value);
  }


  /**
   * The tile that the home base is located on.
   *
   * @type {Array.<Necrowar.Tile>}
   */
  get homeBase() {
    return client.gameManager.getMemberValue(this, 'homeBase');
  }

  set homeBase(value) {
    client.gameManager.setMemberValue(this, 'homeBase', value);
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
   * The amount of mana this player has.
   *
   * @type {number}
   */
  get mana() {
    return client.gameManager.getMemberValue(this, 'mana');
  }

  set mana(value) {
    client.gameManager.setMemberValue(this, 'mana', value);
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
   * @type {Necrowar.Player}
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
   * All tiles that this player can build on and move workers on.
   *
   * @type {Array.<Necrowar.Tile>}
   */
  get side() {
    return client.gameManager.getMemberValue(this, 'side');
  }

  set side(value) {
    client.gameManager.setMemberValue(this, 'side', value);
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
   * Every Tower owned by this player.
   *
   * @type {Array.<Necrowar.Tower>}
   */
  get towers() {
    return client.gameManager.getMemberValue(this, 'towers');
  }

  set towers(value) {
    client.gameManager.setMemberValue(this, 'towers', value);
  }


  /**
   * Every Unit owned by this Player.
   *
   * @type {Array.<Necrowar.Unit>}
   */
  get units() {
    return client.gameManager.getMemberValue(this, 'units');
  }

  set units(value) {
    client.gameManager.setMemberValue(this, 'units', value);
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



  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Player;
