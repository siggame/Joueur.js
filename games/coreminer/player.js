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
 * @extends Coreminer.GameObject
 * @memberof Coreminer
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
    this.baseTile = null;
    this.bombs = 0;
    this.buildingMaterials = 0;
    this.clientType = '';
    this.dirt = 0;
    this.hopperTiles = [];
    this.lost = false;
    this.money = 0;
    this.name = '';
    this.opponent = null;
    this.reasonLost = '';
    this.reasonWon = '';
    this.side = [];
    this.spawnTiles = [];
    this.timeRemaining = 0;
    this.units = [];
    this.value = 0;
    this.won = false;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The Tile this Player's base is on.
   *
   * @type {Coreminer.Tile}
   */
  get baseTile() {
    return client.gameManager.getMemberValue(this, 'baseTile');
  }

  set baseTile(value) {
    client.gameManager.setMemberValue(this, 'baseTile', value);
  }


  /**
   * The bombs stored in the Player's supply.
   *
   * @type {number}
   */
  get bombs() {
    return client.gameManager.getMemberValue(this, 'bombs');
  }

  set bombs(value) {
    client.gameManager.setMemberValue(this, 'bombs', value);
  }


  /**
   * The building material stored in the Player's supply.
   *
   * @type {number}
   */
  get buildingMaterials() {
    return client.gameManager.getMemberValue(this, 'buildingMaterials');
  }

  set buildingMaterials(value) {
    client.gameManager.setMemberValue(this, 'buildingMaterials', value);
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
   * The dirt stored in the Player's supply.
   *
   * @type {number}
   */
  get dirt() {
    return client.gameManager.getMemberValue(this, 'dirt');
  }

  set dirt(value) {
    client.gameManager.setMemberValue(this, 'dirt', value);
  }


  /**
   * The Tiles this Player's hoppers are on.
   *
   * @type {Array.<Coreminer.Tile>}
   */
  get hopperTiles() {
    return client.gameManager.getMemberValue(this, 'hopperTiles');
  }

  set hopperTiles(value) {
    client.gameManager.setMemberValue(this, 'hopperTiles', value);
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
   * The amount of money this Player currently has.
   *
   * @type {number}
   */
  get money() {
    return client.gameManager.getMemberValue(this, 'money');
  }

  set money(value) {
    client.gameManager.setMemberValue(this, 'money', value);
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
   * @type {Coreminer.Player}
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
   * The Tiles on this Player's side of the map.
   *
   * @type {Array.<Coreminer.Tile>}
   */
  get side() {
    return client.gameManager.getMemberValue(this, 'side');
  }

  set side(value) {
    client.gameManager.setMemberValue(this, 'side', value);
  }


  /**
   * The Tiles this Player may spawn Units on.
   *
   * @type {Array.<Coreminer.Tile>}
   */
  get spawnTiles() {
    return client.gameManager.getMemberValue(this, 'spawnTiles');
  }

  set spawnTiles(value) {
    client.gameManager.setMemberValue(this, 'spawnTiles', value);
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
   * Every Unit owned by this Player.
   *
   * @type {Array.<Coreminer.Unit>}
   */
  get units() {
    return client.gameManager.getMemberValue(this, 'units');
  }

  set units(value) {
    client.gameManager.setMemberValue(this, 'units', value);
  }


  /**
   * The amount of value (victory points) this Player has gained.
   *
   * @type {number}
   */
  get value() {
    return client.gameManager.getMemberValue(this, 'value');
  }

  set value(value) {
    client.gameManager.setMemberValue(this, 'value', value);
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
   * Purchases a resource and adds it to the Player's supply.
   *
   * @param {string} resource - The type of resource to buy.
   * @param {number} amount - The amount of resource to buy.
   * @returns {boolean} - True if successfully purchased, false otherwise.
   */
  buy(resource, amount) {
    return client.runOnServer(this, 'buy', {
      resource: resource,
      amount: amount,
    });
  }


  /**
   * Transfers a resource from the Player's supply to a Unit.
   *
   * @param {Coreminer.Unit} unit - The Unit to transfer materials to.
   * @param {string} resource - The type of resource to transfer.
   * @param {number} amount - The amount of resource to transfer.
   * @returns {boolean} - True if successfully transfered, false otherwise.
   */
  transfer(unit, resource, amount) {
    return client.runOnServer(this, 'transfer', {
      unit: unit,
      resource: resource,
      amount: amount,
    });
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Player;
