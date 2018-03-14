// Furnishing: An furnishing in the Saloon that must be pathed around, or destroyed.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * An furnishing in the Saloon that must be pathed around, or destroyed.
 * @extends Saloon.GameObject
 * @memberof Saloon
 */
class Furnishing extends GameObject {
  /**
   * Initializes a Furnishing with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.health = 0;
    this.isDestroyed = false;
    this.isPiano = false;
    this.isPlaying = false;
    this.tile = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * How much health this Furnishing currently has.
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
   * If this Furnishing has been destroyed, and has been removed from the game.
   *
   * @type {boolean}
   */
  get isDestroyed() {
    return client.gameManager.getMemberValue(this, 'isDestroyed');
  }

  set isDestroyed(value) {
    client.gameManager.setMemberValue(this, 'isDestroyed', value);
  }


  /**
   * True if this Furnishing is a piano and can be played, False otherwise.
   *
   * @type {boolean}
   */
  get isPiano() {
    return client.gameManager.getMemberValue(this, 'isPiano');
  }

  set isPiano(value) {
    client.gameManager.setMemberValue(this, 'isPiano', value);
  }


  /**
   * If this is a piano and a Cowboy is playing it this turn.
   *
   * @type {boolean}
   */
  get isPlaying() {
    return client.gameManager.getMemberValue(this, 'isPlaying');
  }

  set isPlaying(value) {
    client.gameManager.setMemberValue(this, 'isPlaying', value);
  }


  /**
   * The Tile that this Furnishing is located on.
   *
   * @type {Saloon.Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }



  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Furnishing;
