// YoungGun: An eager young person that wants to join your gang, and will call in the veteran Cowboys you need to win the brawl in the saloon.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * An eager young person that wants to join your gang, and will call in the veteran Cowboys you need to win the brawl in the saloon.
 * @extends Saloon.GameObject
 * @memberof Saloon
 */
class YoungGun extends GameObject {
  /**
   * Initializes a YoungGun with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.callInTile = null;
    this.canCallIn = false;
    this.owner = null;
    this.tile = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The Tile that a Cowboy will be called in on if this YoungGun calls in a Cowboy.
   *
   * @type {Saloon.Tile}
   */
  get callInTile() {
    return client.gameManager.getMemberValue(this, 'callInTile');
  }

  set callInTile(value) {
    client.gameManager.setMemberValue(this, 'callInTile', value);
  }


  /**
   * True if the YoungGun can call in a Cowboy, false otherwise.
   *
   * @type {boolean}
   */
  get canCallIn() {
    return client.gameManager.getMemberValue(this, 'canCallIn');
  }

  set canCallIn(value) {
    client.gameManager.setMemberValue(this, 'canCallIn', value);
  }


  /**
   * The Player that owns and can control this YoungGun.
   *
   * @type {Saloon.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The Tile this YoungGun is currently on.
   *
   * @type {Saloon.Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }



  /**
   * Tells the YoungGun to call in a new Cowboy of the given job to the open Tile nearest to them.
   *
   * @param {string} job - The job you want the Cowboy being brought to have.
   * @returns {Saloon.Cowboy} - The new Cowboy that was called in if valid. They will not be added to any `cowboys` lists until the turn ends. Null otherwise.
   */
  callIn(job) {
    return client.runOnServer(this, 'callIn', {
      job: job,
    });
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = YoungGun;
