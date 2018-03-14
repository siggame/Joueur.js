// Building: A basic building. It does nothing besides burn down. Other Buildings inherit from this class.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A basic building. It does nothing besides burn down. Other Buildings inherit from this class.
 * @extends Anarchy.GameObject
 * @memberof Anarchy
 */
class Building extends GameObject {
  /**
   * Initializes a Building with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.bribed = false;
    this.buildingEast = null;
    this.buildingNorth = null;
    this.buildingSouth = null;
    this.buildingWest = null;
    this.fire = 0;
    this.health = 0;
    this.isHeadquarters = false;
    this.owner = null;
    this.x = 0;
    this.y = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * When true this building has already been bribed this turn and cannot be bribed again this turn.
   *
   * @type {boolean}
   */
  get bribed() {
    return client.gameManager.getMemberValue(this, 'bribed');
  }

  set bribed(value) {
    client.gameManager.setMemberValue(this, 'bribed', value);
  }


  /**
   * The Building directly to the east of this building, or null if not present.
   *
   * @type {Anarchy.Building}
   */
  get buildingEast() {
    return client.gameManager.getMemberValue(this, 'buildingEast');
  }

  set buildingEast(value) {
    client.gameManager.setMemberValue(this, 'buildingEast', value);
  }


  /**
   * The Building directly to the north of this building, or null if not present.
   *
   * @type {Anarchy.Building}
   */
  get buildingNorth() {
    return client.gameManager.getMemberValue(this, 'buildingNorth');
  }

  set buildingNorth(value) {
    client.gameManager.setMemberValue(this, 'buildingNorth', value);
  }


  /**
   * The Building directly to the south of this building, or null if not present.
   *
   * @type {Anarchy.Building}
   */
  get buildingSouth() {
    return client.gameManager.getMemberValue(this, 'buildingSouth');
  }

  set buildingSouth(value) {
    client.gameManager.setMemberValue(this, 'buildingSouth', value);
  }


  /**
   * The Building directly to the west of this building, or null if not present.
   *
   * @type {Anarchy.Building}
   */
  get buildingWest() {
    return client.gameManager.getMemberValue(this, 'buildingWest');
  }

  set buildingWest(value) {
    client.gameManager.setMemberValue(this, 'buildingWest', value);
  }


  /**
   * How much fire is currently burning the building, and thus how much damage it will take at the end of its owner's turn. 0 means no fire.
   *
   * @type {number}
   */
  get fire() {
    return client.gameManager.getMemberValue(this, 'fire');
  }

  set fire(value) {
    client.gameManager.setMemberValue(this, 'fire', value);
  }


  /**
   * How much health this building currently has. When this reaches 0 the Building has been burned down.
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
   * True if this is the Headquarters of the owning player, false otherwise. Burning this down wins the game for the other Player.
   *
   * @type {boolean}
   */
  get isHeadquarters() {
    return client.gameManager.getMemberValue(this, 'isHeadquarters');
  }

  set isHeadquarters(value) {
    client.gameManager.setMemberValue(this, 'isHeadquarters', value);
  }


  /**
   * The player that owns this building. If it burns down (health reaches 0) that player gets an additional bribe(s).
   *
   * @type {Anarchy.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The location of the Building along the x-axis.
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
   * The location of the Building along the y-axis.
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

module.exports = Building;
