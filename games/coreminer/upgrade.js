// Upgrade: Information about a Miner's Upgrade module.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Information about a Miner's Upgrade module.
 * @extends Coreminer.GameObject
 * @memberof Coreminer
 */
class Upgrade extends GameObject {
  /**
   * Initializes a Upgrade with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.cargoCapacity = 0;
    this.health = 0;
    this.miningPower = 0;
    this.moves = 0;
    this.title = '';

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The amount of cargo capacity this Upgrade has.
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
   * The maximum amount of health this Upgrade has.
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
   * The amount of mining power this Upgrade has per turn.
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
   * The number of moves this Upgrade can make per turn.
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
   * The Upgrade title.
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

module.exports = Upgrade;
