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
 * @extends Catastrophe.GameObject
 * @memberof Catastrophe
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
    this.actionCost = 0;
    this.carryLimit = 0;
    this.moves = 0;
    this.regenRate = 0;
    this.title = '';
    this.upkeep = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The amount of energy this Job normally uses to perform its actions.
   *
   * @type {number}
   */
  get actionCost() {
    return client.gameManager.getMemberValue(this, 'actionCost');
  }

  set actionCost(value) {
    client.gameManager.setMemberValue(this, 'actionCost', value);
  }


  /**
   * How many combined resources a Unit with this Job can hold at once.
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
   * The amount of energy normally regenerated when resting at a shelter.
   *
   * @type {number}
   */
  get regenRate() {
    return client.gameManager.getMemberValue(this, 'regenRate');
  }

  set regenRate(value) {
    client.gameManager.setMemberValue(this, 'regenRate', value);
  }


  /**
   * The Job title.
   *
   * @type {string}
   */
  get title() {
    return client.gameManager.getMemberValue(this, 'title');
  }

  set title(value) {
    client.gameManager.setMemberValue(this, 'title', value);
  }


  /**
   * The amount of food per turn this Unit consumes. If there isn't enough food for every Unit, all Units become starved and do not consume food.
   *
   * @type {number}
   */
  get upkeep() {
    return client.gameManager.getMemberValue(this, 'upkeep');
  }

  set upkeep(value) {
    client.gameManager.setMemberValue(this, 'upkeep', value);
  }



  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Job;
