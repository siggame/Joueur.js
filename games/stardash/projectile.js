// Projectile: Tracks any projectiles moving through space.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Tracks any projectiles moving through space.
 * @extends Stardash.GameObject
 * @memberof Stardash
 */
class Projectile extends GameObject {
  /**
   * Initializes a Projectile with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.energy = 0;
    this.fuel = 0;
    this.owner = null;
    this.target = null;
    this.x = 0;
    this.y = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The remaining health of the projectile.
   *
   * @type {number}
   */
  get energy() {
    return client.gameManager.getMemberValue(this, 'energy');
  }

  set energy(value) {
    client.gameManager.setMemberValue(this, 'energy', value);
  }


  /**
   * The amount of remaining distance the projectile can move.
   *
   * @type {number}
   */
  get fuel() {
    return client.gameManager.getMemberValue(this, 'fuel');
  }

  set fuel(value) {
    client.gameManager.setMemberValue(this, 'fuel', value);
  }


  /**
   * The Player that owns and can control this Projectile.
   *
   * @type {Stardash.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The unit that is being attacked by this projectile.
   *
   * @type {Stardash.Unit}
   */
  get target() {
    return client.gameManager.getMemberValue(this, 'target');
  }

  set target(value) {
    client.gameManager.setMemberValue(this, 'target', value);
  }


  /**
   * The x value this projectile is on.
   *
   * @type {number}
   */
  get x() {
    return client.gameManager.getMemberValue(this, 'x');
  }

  set x(value) {
    client.gameManager.setMemberValue(this, 'x', value);
  }


  /**
   * The y value this projectile is on.
   *
   * @type {number}
   */
  get y() {
    return client.gameManager.getMemberValue(this, 'y');
  }

  set y(value) {
    client.gameManager.setMemberValue(this, 'y', value);
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Projectile;
