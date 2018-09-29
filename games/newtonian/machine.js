// Machine: A machine in the game. Used to refine ore.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A machine in the game. Used to refine ore.
 * @extends Newtonian.GameObject
 * @memberof Newtonian
 */
class Machine extends GameObject {
  /**
   * Initializes a Machine with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.oreType = '';
    this.refineInput = 0;
    this.refineOutput = 0;
    this.refineTime = 0;
    this.tile = null;
    this.worked = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * What type of ore the machine takes it. Also determines the type of material it outputs. (redium or blueium).
   *
   * @type {string}
   */
  get oreType() {
    return client.gameManager.getMemberValue(this, 'oreType');
  }

  set oreType(value) {
    client.gameManager.setMemberValue(this, 'oreType', value);
  }


  /**
   * The amount of ore that needs to be inputted into the machine for it to be worked.
   *
   * @type {number}
   */
  get refineInput() {
    return client.gameManager.getMemberValue(this, 'refineInput');
  }

  set refineInput(value) {
    client.gameManager.setMemberValue(this, 'refineInput', value);
  }


  /**
   * The amount of refined ore that is returned after the machine has been fully worked.
   *
   * @type {number}
   */
  get refineOutput() {
    return client.gameManager.getMemberValue(this, 'refineOutput');
  }

  set refineOutput(value) {
    client.gameManager.setMemberValue(this, 'refineOutput', value);
  }


  /**
   * The number of times this machine needs to be worked to refine ore.
   *
   * @type {number}
   */
  get refineTime() {
    return client.gameManager.getMemberValue(this, 'refineTime');
  }

  set refineTime(value) {
    client.gameManager.setMemberValue(this, 'refineTime', value);
  }


  /**
   * The Tile this Machine is on.
   *
   * @type {Newtonian.Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }


  /**
   * Tracks how many times this machine has been worked. (0 to refineTime).
   *
   * @type {number}
   */
  get worked() {
    return client.gameManager.getMemberValue(this, 'worked');
  }

  set worked(value) {
    client.gameManager.setMemberValue(this, 'worked', value);
  }



  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Machine;
