// Web: A connection (edge) to a Nest (node) in the game that Spiders can converge on (regardless of owner). Spiders can travel in either direction on Webs.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A connection (edge) to a Nest (node) in the game that Spiders can converge on (regardless of owner). Spiders can travel in either direction on Webs.
 * @extends Spiders.GameObject
 * @memberof Spiders
 */
class Web extends GameObject {
  /**
   * Initializes a Web with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.length = 0;
    this.load = 0;
    this.nestA = null;
    this.nestB = null;
    this.spiderlings = [];
    this.strength = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * How long this Web is, i.e., the distance between its nestA and nestB.
   *
   * @type {number}
   */
  get length() {
    return client.gameManager.getMemberValue(this, 'length');
  }

  set length(value) {
    client.gameManager.setMemberValue(this, 'length', value);
  }


  /**
   * How much weight this Web currently has on it, which is the sum of all its Spiderlings weight.
   *
   * @type {number}
   */
  get load() {
    return client.gameManager.getMemberValue(this, 'load');
  }

  set load(value) {
    client.gameManager.setMemberValue(this, 'load', value);
  }


  /**
   * The first Nest this Web is connected to.
   *
   * @type {Spiders.Nest}
   */
  get nestA() {
    return client.gameManager.getMemberValue(this, 'nestA');
  }

  set nestA(value) {
    client.gameManager.setMemberValue(this, 'nestA', value);
  }


  /**
   * The second Nest this Web is connected to.
   *
   * @type {Spiders.Nest}
   */
  get nestB() {
    return client.gameManager.getMemberValue(this, 'nestB');
  }

  set nestB(value) {
    client.gameManager.setMemberValue(this, 'nestB', value);
  }


  /**
   * All the Spiderlings currently moving along this Web.
   *
   * @type {Array.<Spiders.Spiderling>}
   */
  get spiderlings() {
    return client.gameManager.getMemberValue(this, 'spiderlings');
  }

  set spiderlings(value) {
    client.gameManager.setMemberValue(this, 'spiderlings', value);
  }


  /**
   * How much weight this Web can take before snapping and destroying itself and all the Spiders on it.
   *
   * @type {number}
   */
  get strength() {
    return client.gameManager.getMemberValue(this, 'strength');
  }

  set strength(value) {
    client.gameManager.setMemberValue(this, 'strength', value);
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Web;
