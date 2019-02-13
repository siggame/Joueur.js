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
 * @extends StarDash.GameObject
 * @memberof StarDash
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
    this.radius = 0;
    this.x = 0;
    this.y = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The amount of material the object has.
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
   * The type of celestial body it is.
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
   * The type of material the celestial body has.
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
