// Job: Information about a Unit's job.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Information about a Unit's job.
 * @extends Coreminer.GameObject
 * @memberof Coreminer
 */
class Job extends GameObject {
  /**
   * Initializes a Job with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.cargoCapacity = 0;
    this.health = 0;
    this.maxCargoCapacity = 0;
    this.maxHealth = 0;
    this.maxMiningPower = 0;
    this.maxMoves = 0;
    this.miningPower = 0;
    this.moves = 0;
    this.title = '';

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The amount of cargo capacity this Unit starts with.
   *
   * @type {number}
   */
  get cargoCapacity() {
    return client.gameManager.getMemberValue(this, 'cargoCapacity');
  }

  set cargoCapacity(value) {
    client.gameManager.setMemberValue(this, 'cargoCapacity', value);
  }


  /**
   * The amount of starting health this Job has.
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
   * The maximum amount of cargo capacity this Unit can have.
   *
   * @type {number}
   */
  get maxCargoCapacity() {
    return client.gameManager.getMemberValue(this, 'maxCargoCapacity');
  }

  set maxCargoCapacity(value) {
    client.gameManager.setMemberValue(this, 'maxCargoCapacity', value);
  }


  /**
   * The maximum amount of health this Job can have.
   *
   * @type {number}
   */
  get maxHealth() {
    return client.gameManager.getMemberValue(this, 'maxHealth');
  }

  set maxHealth(value) {
    client.gameManager.setMemberValue(this, 'maxHealth', value);
  }


  /**
   * The maximum amount of mining power this Unit can have.
   *
   * @type {number}
   */
  get maxMiningPower() {
    return client.gameManager.getMemberValue(this, 'maxMiningPower');
  }

  set maxMiningPower(value) {
    client.gameManager.setMemberValue(this, 'maxMiningPower', value);
  }


  /**
   * The maximum number of moves this Job can have.
   *
   * @type {number}
   */
  get maxMoves() {
    return client.gameManager.getMemberValue(this, 'maxMoves');
  }

  set maxMoves(value) {
    client.gameManager.setMemberValue(this, 'maxMoves', value);
  }


  /**
   * The amount of mining power this Unit has per turn.
   *
   * @type {number}
   */
  get miningPower() {
    return client.gameManager.getMemberValue(this, 'miningPower');
  }

  set miningPower(value) {
    client.gameManager.setMemberValue(this, 'miningPower', value);
  }


  /**
   * The number of moves this Job can make per turn.
   *
   * @type {number}
   */
  get moves() {
    return client.gameManager.getMemberValue(this, 'moves');
  }

  set moves(value) {
    client.gameManager.setMemberValue(this, 'moves', value);
  }


  /**
   * The Job title. 'miner' or 'bomb'.
   *
   * @type {string}
   */
  get title() {
    return client.gameManager.getMemberValue(this, 'title');
  }

  set title(value) {
    client.gameManager.setMemberValue(this, 'title', value);
  }



  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Job;
