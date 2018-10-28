// Job: Information about a unit's job.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Information about a unit's job.
 * @extends Newtonian.GameObject
 * @memberof Newtonian
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
    this.carryLimit = 0;
    this.damage = 0;
    this.health = 0;
    this.moves = 0;
    this.title = '';

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * How many combined resources a unit with this Job can hold at once.
   *
   * @type {number}
   */
  get carryLimit() {
    return client.gameManager.getMemberValue(this, 'carryLimit');
  }

  set carryLimit(value) {
    client.gameManager.setMemberValue(this, 'carryLimit', value);
  }


  /**
   * The amount of damage this Job does per attack.
   *
   * @type {number}
   */
  get damage() {
    return client.gameManager.getMemberValue(this, 'damage');
  }

  set damage(value) {
    client.gameManager.setMemberValue(this, 'damage', value);
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
   * The Job title. 'intern', 'manager', or 'physicist'.
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
