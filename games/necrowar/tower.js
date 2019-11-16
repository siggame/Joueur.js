// Tower: A tower in the game. Used to combat enemy waves.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A tower in the game. Used to combat enemy waves.
 * @extends Necrowar.GameObject
 * @memberof Necrowar
 */
class Tower extends GameObject {
  /**
   * Initializes a Tower with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.attacked = false;
    this.cooldown = 0;
    this.health = 0;
    this.job = null;
    this.owner = null;
    this.tile = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * Whether this tower has attacked this turn or not.
   *
   * @type {boolean}
   */
  get attacked() {
    return client.gameManager.getMemberValue(this, 'attacked');
  }

  set attacked(value) {
    client.gameManager.setMemberValue(this, 'attacked', value);
  }


  /**
   * How many turns are left before it can fire again.
   *
   * @type {number}
   */
  get cooldown() {
    return client.gameManager.getMemberValue(this, 'cooldown');
  }

  set cooldown(value) {
    client.gameManager.setMemberValue(this, 'cooldown', value);
  }


  /**
   * How much remaining health this tower has.
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
   * What type of tower this is (it's job).
   *
   * @type {Necrowar.TowerJob}
   */
  get job() {
    return client.gameManager.getMemberValue(this, 'job');
  }

  set job(value) {
    client.gameManager.setMemberValue(this, 'job', value);
  }


  /**
   * The player that built / owns this tower.
   *
   * @type {Necrowar.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The Tile this Tower is on.
   *
   * @type {Necrowar.Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }



  /**
   * Attacks an enemy unit on an tile within it's range.
   *
   * @param {Necrowar.Tile} tile - The Tile to attack.
   * @returns {boolean} - True if successfully attacked, false otherwise.
   */
  attack(tile) {
    return client.runOnServer(this, 'attack', {
      tile: tile,
    });
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Tower;
