// Bottle: A bottle thrown by a bartender at a Tile.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A bottle thrown by a bartender at a Tile.
 * @extends Saloon.GameObject
 * @memberof Saloon
 */
class Bottle extends GameObject {
  /**
   * Initializes a Bottle with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.direction = '';
    this.drunkDirection = '';
    this.isDestroyed = false;
    this.tile = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The Direction this Bottle is flying and will move to between turns, can be 'North', 'East', 'South', or 'West'.
   *
   * @type {string}
   */
  get direction() {
    return client.gameManager.getMemberValue(this, 'direction');
  }

  set direction(value) {
    client.gameManager.setMemberValue(this, 'direction', value);
  }


  /**
   * The direction any Cowboys hit by this will move, can be 'North', 'East', 'South', or 'West'.
   *
   * @type {string}
   */
  get drunkDirection() {
    return client.gameManager.getMemberValue(this, 'drunkDirection');
  }

  set drunkDirection(value) {
    client.gameManager.setMemberValue(this, 'drunkDirection', value);
  }


  /**
   * True if this Bottle has impacted and has been destroyed (removed from the Game). False if still in the game flying through the saloon.
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
   * The Tile this bottle is currently flying over.
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

module.exports = Bottle;
