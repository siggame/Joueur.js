// tJob: Information about a tower's job/type.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Information about a tower's job/type.
 * @extends Necrowar.GameObject
 * @memberof Necrowar
 */
class tJob extends GameObject {
  /**
   * Initializes a tJob with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.allUnits = false;
    this.damageVsAbomination = 0;
    this.damageVsGhoul = 0;
    this.damageVsHorseman = 0;
    this.damageVsHound = 0;
    this.damageVsWraith = 0;
    this.damageVsZombie = 0;
    this.goldCost = 0;
    this.health = 0;
    this.manaCost = 0;
    this.range = 0;
    this.title = '';
    this.turnsBetweenAttacks = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * Whether this tower type hits all of the units on a tile (true) or one at a time (false).
   *
   * @type {boolean}
   */
  get allUnits() {
    return client.gameManager.getMemberValue(this, 'allUnits');
  }

  set allUnits(value) {
    client.gameManager.setMemberValue(this, 'allUnits', value);
  }


  /**
   * The amount of damage this type does per attack against abominations.
   *
   * @type {number}
   */
  get damageVsAbomination() {
    return client.gameManager.getMemberValue(this, 'damageVsAbomination');
  }

  set damageVsAbomination(value) {
    client.gameManager.setMemberValue(this, 'damageVsAbomination', value);
  }


  /**
   * The amount of damage this type does per attack against ghouls.
   *
   * @type {number}
   */
  get damageVsGhoul() {
    return client.gameManager.getMemberValue(this, 'damageVsGhoul');
  }

  set damageVsGhoul(value) {
    client.gameManager.setMemberValue(this, 'damageVsGhoul', value);
  }


  /**
   * The amount of damage this type does per attack against horseman.
   *
   * @type {number}
   */
  get damageVsHorseman() {
    return client.gameManager.getMemberValue(this, 'damageVsHorseman');
  }

  set damageVsHorseman(value) {
    client.gameManager.setMemberValue(this, 'damageVsHorseman', value);
  }


  /**
   * The amount of damage this type does per attack against hounds.
   *
   * @type {number}
   */
  get damageVsHound() {
    return client.gameManager.getMemberValue(this, 'damageVsHound');
  }

  set damageVsHound(value) {
    client.gameManager.setMemberValue(this, 'damageVsHound', value);
  }


  /**
   * The amount of damage this type does per attack against wraiths.
   *
   * @type {number}
   */
  get damageVsWraith() {
    return client.gameManager.getMemberValue(this, 'damageVsWraith');
  }

  set damageVsWraith(value) {
    client.gameManager.setMemberValue(this, 'damageVsWraith', value);
  }


  /**
   * The amount of damage this type does per attack against zombies.
   *
   * @type {number}
   */
  get damageVsZombie() {
    return client.gameManager.getMemberValue(this, 'damageVsZombie');
  }

  set damageVsZombie(value) {
    client.gameManager.setMemberValue(this, 'damageVsZombie', value);
  }


  /**
   * How much does this type cost in gold.
   *
   * @type {number}
   */
  get goldCost() {
    return client.gameManager.getMemberValue(this, 'goldCost');
  }

  set goldCost(value) {
    client.gameManager.setMemberValue(this, 'goldCost', value);
  }


  /**
   * The amount of starting health this type has.
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
   * How much does this type cost in mana.
   *
   * @type {number}
   */
  get manaCost() {
    return client.gameManager.getMemberValue(this, 'manaCost');
  }

  set manaCost(value) {
    client.gameManager.setMemberValue(this, 'manaCost', value);
  }


  /**
   * The number of tiles this type can attack from.
   *
   * @type {number}
   */
  get range() {
    return client.gameManager.getMemberValue(this, 'range');
  }

  set range(value) {
    client.gameManager.setMemberValue(this, 'range', value);
  }


  /**
   * The type title. 'arrow', 'aoe', 'ballista', or 'cleansing'.
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
   * How many turns this tower type needs to take between attacks.
   *
   * @type {number}
   */
  get turnsBetweenAttacks() {
    return client.gameManager.getMemberValue(this, 'turnsBetweenAttacks');
  }

  set turnsBetweenAttacks(value) {
    client.gameManager.setMemberValue(this, 'turnsBetweenAttacks', value);
  }



  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = tJob;
