// Port: A port on a Tile.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A port on a Tile.
 * @extends GameObject
 */
class Port extends GameObject {
  /**
   * initializes a Port with basic logic as provided by the Creer code generator
   *
   * @memberof Port
   * @private
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.cooldown = false;
    this.destroyable = 0;
    this.gold = 0;
    this.health = 0;
    this.investment = 0;
    this.owner = null;
    this.tile = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * Whether this Port has created a Unit this turn.
   *
   * @type {boolean}
   */
  get cooldown() {
    return client.gameManager.getMemberValue(this, 'cooldown');
  }

  set cooldown(value) {
    client.gameManager.setMemberValue(this, 'cooldown', value);
  }


  /**
   * Whether this Port can be destroyed.
   *
   * @type {number}
   */
  get destroyable() {
    return client.gameManager.getMemberValue(this, 'destroyable');
  }

  set destroyable(value) {
    client.gameManager.setMemberValue(this, 'destroyable', value);
  }


  /**
   * (Merchants only) How much gold this Port has accumulated. Once this port can afford to create a ship, it will spend gold to construct one.
   *
   * @type {number}
   */
  get gold() {
    return client.gameManager.getMemberValue(this, 'gold');
  }

  set gold(value) {
    client.gameManager.setMemberValue(this, 'gold', value);
  }


  /**
   * How much health this Port has.
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
   * (Merchants only) How much gold this Port accumulates each turn.
   *
   * @type {number}
   */
  get investment() {
    return client.gameManager.getMemberValue(this, 'investment');
  }

  set investment(value) {
    client.gameManager.setMemberValue(this, 'investment', value);
  }


  /**
   * The owner of this Port, or null if owned by merchants.
   *
   * @type {Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The Tile this Port is on.
   *
   * @type {Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }



  /**
   * Spawn a Unit on this port.
   *
   * @param {string} type - What type of Unit to create ('crew' or 'ship').
   * @returns {boolean} - True if Unit was created successfully, false otherwise.
   */
  spawn(type) {
    return client.runOnServer(this, 'spawn', {
      type: type,
    });
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Port;
