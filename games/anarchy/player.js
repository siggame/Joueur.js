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
 * @extends Anarchy.GameObject
 * @memberof Anarchy
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
    this.bribesRemaining = 0;
    this.buildings = [];
    this.clientType = '';
    this.fireDepartments = [];
    this.headquarters = null;
    this.lost = false;
    this.name = '';
    this.opponent = null;
    this.policeDepartments = [];
    this.reasonLost = '';
    this.reasonWon = '';
    this.timeRemaining = 0;
    this.warehouses = [];
    this.weatherStations = [];
    this.won = false;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * How many bribes this player has remaining to use during their turn. Each action a Building does costs 1 bribe. Any unused bribes are lost at the end of the player's turn.
   *
   * @type {number}
   */
  get bribesRemaining() {
    return client.gameManager.getMemberValue(this, 'bribesRemaining');
  }

  set bribesRemaining(value) {
    client.gameManager.setMemberValue(this, 'bribesRemaining', value);
  }


  /**
   * All the buildings owned by this player.
   *
   * @type {Array.<Anarchy.Building>}
   */
  get buildings() {
    return client.gameManager.getMemberValue(this, 'buildings');
  }

  set buildings(value) {
    client.gameManager.setMemberValue(this, 'buildings', value);
  }


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
   * All the FireDepartments owned by this player.
   *
   * @type {Array.<Anarchy.FireDepartment>}
   */
  get fireDepartments() {
    return client.gameManager.getMemberValue(this, 'fireDepartments');
  }

  set fireDepartments(value) {
    client.gameManager.setMemberValue(this, 'fireDepartments', value);
  }


  /**
   * The Warehouse that serves as this player's headquarters and has extra health. If this gets destroyed they lose.
   *
   * @type {Anarchy.Warehouse}
   */
  get headquarters() {
    return client.gameManager.getMemberValue(this, 'headquarters');
  }

  set headquarters(value) {
    client.gameManager.setMemberValue(this, 'headquarters', value);
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
   * @type {Anarchy.Player}
   */
  get opponent() {
    return client.gameManager.getMemberValue(this, 'opponent');
  }

  set opponent(value) {
    client.gameManager.setMemberValue(this, 'opponent', value);
  }


  /**
   * All the PoliceDepartments owned by this player.
   *
   * @type {Array.<Anarchy.PoliceDepartment>}
   */
  get policeDepartments() {
    return client.gameManager.getMemberValue(this, 'policeDepartments');
  }

  set policeDepartments(value) {
    client.gameManager.setMemberValue(this, 'policeDepartments', value);
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
   * All the warehouses owned by this player. Includes the Headquarters.
   *
   * @type {Array.<Anarchy.Warehouse>}
   */
  get warehouses() {
    return client.gameManager.getMemberValue(this, 'warehouses');
  }

  set warehouses(value) {
    client.gameManager.setMemberValue(this, 'warehouses', value);
  }


  /**
   * All the WeatherStations owned by this player.
   *
   * @type {Array.<Anarchy.WeatherStation>}
   */
  get weatherStations() {
    return client.gameManager.getMemberValue(this, 'weatherStations');
  }

  set weatherStations(value) {
    client.gameManager.setMemberValue(this, 'weatherStations', value);
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
