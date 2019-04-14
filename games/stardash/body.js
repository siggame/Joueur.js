// Body: A celestial body located within the game.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A celestial body located within the game.
 * @extends Stardash.GameObject
 * @memberof Stardash
 */
class Body extends GameObject {
  /**
   * Initializes a Body with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.amount = 0;
    this.bodyType = '';
    this.materialType = '';
    this.owner = null;
    this.radius = 0;
    this.x = 0;
    this.y = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The amount of material the object has, or energy if it is a planet.
   *
   * @type {number}
   */
  get amount() {
    return client.gameManager.getMemberValue(this, 'amount');
  }

  set amount(value) {
    client.gameManager.setMemberValue(this, 'amount', value);
  }


  /**
   * The type of celestial body it is. Either 'planet', 'asteroid', or 'sun'.
   *
   * @type {string}
   */
  get bodyType() {
    return client.gameManager.getMemberValue(this, 'bodyType');
  }

  set bodyType(value) {
    client.gameManager.setMemberValue(this, 'bodyType', value);
  }


  /**
   * The type of material the celestial body has. Either 'none', 'genarium', 'rarium', 'legendarium', or 'mythicite'.
   *
   * @type {string}
   */
  get materialType() {
    return client.gameManager.getMemberValue(this, 'materialType');
  }

  set materialType(value) {
    client.gameManager.setMemberValue(this, 'materialType', value);
  }


  /**
   * The Player that owns and can control this Body.
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
   * The radius of the circle that this body takes up.
   *
   * @type {number}
   */
  get radius() {
    return client.gameManager.getMemberValue(this, 'radius');
  }

  set radius(value) {
    client.gameManager.setMemberValue(this, 'radius', value);
  }


  /**
   * The x value this celestial body is on.
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
   * The y value this celestial body is on.
   *
   * @type {number}
   */
  get y() {
    return client.gameManager.getMemberValue(this, 'y');
  }

  set y(value) {
    client.gameManager.setMemberValue(this, 'y', value);
  }



  /**
   * The x value of this body a number of turns from now. (0-how many you want).
   *
   * @param {number} num - The number of turns in the future you wish to check.
   * @returns {number} - The x position of the body the input number of turns in the future.
   */
  nextX(num) {
    return client.runOnServer(this, 'nextX', {
      num: num,
    });
  }


  /**
   * The x value of this body a number of turns from now. (0-how many you want).
   *
   * @param {number} num - The number of turns in the future you wish to check.
   * @returns {number} - The x position of the body the input number of turns in the future.
   */
  nextY(num) {
    return client.runOnServer(this, 'nextY', {
      num: num,
    });
  }


  /**
   * Spawn a unit on some value of this celestial body.
   *
   * @param {number} x - The x value of the spawned unit.
   * @param {number} y - The y value of the spawned unit.
   * @param {string} title - The job title of the unit being spawned.
   * @returns {boolean} - True if successfully taken, false otherwise.
   */
  spawn(x, y, title) {
    return client.runOnServer(this, 'spawn', {
      x: x,
      y: y,
      title: title,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Body;
