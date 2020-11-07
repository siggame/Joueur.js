// Spiderling: A Spider spawned by the BroodMother.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const Spider = require('./spider');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A Spider spawned by the BroodMother.
 * @extends Spiders.Spider
 * @memberof Spiders
 */
class Spiderling extends Spider {
  /**
   * Initializes a Spiderling with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.busy = '';
    this.movingOnWeb = null;
    this.movingToNest = null;
    this.numberOfCoworkers = 0;
    this.workRemaining = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * When empty string this Spiderling is not busy, and can act. Otherwise a string representing what it is busy with, e.g. 'Moving', 'Attacking'.
   *
   * @type {string}
   */
  get busy() {
    return client.gameManager.getMemberValue(this, 'busy');
  }

  set busy(value) {
    client.gameManager.setMemberValue(this, 'busy', value);
  }


  /**
   * The Web this Spiderling is using to move. Null if it is not moving.
   *
   * @type {Spiders.Web}
   */
  get movingOnWeb() {
    return client.gameManager.getMemberValue(this, 'movingOnWeb');
  }

  set movingOnWeb(value) {
    client.gameManager.setMemberValue(this, 'movingOnWeb', value);
  }


  /**
   * The Nest this Spiderling is moving to. Null if it is not moving.
   *
   * @type {Spiders.Nest}
   */
  get movingToNest() {
    return client.gameManager.getMemberValue(this, 'movingToNest');
  }

  set movingToNest(value) {
    client.gameManager.setMemberValue(this, 'movingToNest', value);
  }


  /**
   * The number of Spiderlings busy with the same work this Spiderling is doing, speeding up the task.
   *
   * @type {number}
   */
  get numberOfCoworkers() {
    return client.gameManager.getMemberValue(this, 'numberOfCoworkers');
  }

  set numberOfCoworkers(value) {
    client.gameManager.setMemberValue(this, 'numberOfCoworkers', value);
  }


  /**
   * How much work needs to be done for this Spiderling to finish being busy. See docs for the Work formula.
   *
   * @type {number}
   */
  get workRemaining() {
    return client.gameManager.getMemberValue(this, 'workRemaining');
  }

  set workRemaining(value) {
    client.gameManager.setMemberValue(this, 'workRemaining', value);
  }



  /**
   * Attacks another Spiderling.
   *
   * @param {Spiders.Spiderling} spiderling - The Spiderling to attack.
   * @returns {boolean} - True if the attack was successful, false otherwise.
   */
  attack(spiderling) {
    return client.runOnServer(this, 'attack', {
      spiderling: spiderling,
    });
  }


  /**
   * Starts moving the Spiderling across a Web to another Nest.
   *
   * @param {Spiders.Web} web - The Web you want to move across to the other Nest.
   * @returns {boolean} - True if the move was successful, false otherwise.
   */
  move(web) {
    return client.runOnServer(this, 'move', {
      web: web,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Spiderling;
