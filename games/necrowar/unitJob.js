// UnitJob: Information about a unit's job/type.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Information about a unit's job/type.
 * @extends Necrowar.GameObject
 * @memberof Necrowar
 */
class UnitJob extends GameObject {
  /**
   * Initializes a UnitJob with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.damage = 0;
    this.goldCost = 0;
    this.health = 0;
    this.manaCost = 0;
    this.moves = 0;
    this.perTile = 0;
    this.range = 0;
    this.title = '';

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The amount of damage this type does per attack.
   *
   * @type {number}
   */
  get damage() {
    return client.gameManager.getMemberValue(this, 'damage');
  }

  set damage(value) {
    client.gameManager.setMemberValue(this, 'damage', value);
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
   * The number of moves this type can make per turn.
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
   * How many of this type of unit can take up one tile.
   *
   * @type {number}
   */
  get perTile() {
    return client.gameManager.getMemberValue(this, 'perTile');
  }

  set perTile(value) {
    client.gameManager.setMemberValue(this, 'perTile', value);
  }


  /**
   * Amount of tiles away this type has to be in order to be effective.
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
   * The type title. 'worker', 'zombie', 'ghoul', 'hound', 'abomination', 'wraith' or 'horseman'.
   *
   * @type {string}
   */
  get title() {
    return client.gameManager.getMemberValue(this, 'title');
  }

  set title(value) {
    client.gameManager.setMemberValue(this, 'title', value);
  }



  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = UnitJob;
