// Nest: A location (node) connected to other Nests via Webs (edges) in the game that Spiders can converge on, regardless of owner.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A location (node) connected to other Nests via Webs (edges) in the game that Spiders can converge on, regardless of owner.
 * @extends Spiders.GameObject
 * @memberof Spiders
 */
class Nest extends GameObject {
  /**
   * Initializes a Nest with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.controllingPlayer = null;
    this.spiders = [];
    this.webs = [];
    this.x = 0;
    this.y = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The Player that 'controls' this Nest as they have the most Spiders on this nest.
   *
   * @type {Spiders.Player}
   */
  get controllingPlayer() {
    return client.gameManager.getMemberValue(this, 'controllingPlayer');
  }

  set controllingPlayer(value) {
    client.gameManager.setMemberValue(this, 'controllingPlayer', value);
  }


  /**
   * All the Spiders currently located on this Nest.
   *
   * @type {Array.<Spiders.Spider>}
   */
  get spiders() {
    return client.gameManager.getMemberValue(this, 'spiders');
  }

  set spiders(value) {
    client.gameManager.setMemberValue(this, 'spiders', value);
  }


  /**
   * Webs that connect to this Nest.
   *
   * @type {Array.<Spiders.Web>}
   */
  get webs() {
    return client.gameManager.getMemberValue(this, 'webs');
  }

  set webs(value) {
    client.gameManager.setMemberValue(this, 'webs', value);
  }


  /**
   * The X coordinate of the Nest. Used for distance calculations.
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
   * The Y coordinate of the Nest. Used for distance calculations.
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

module.exports = Nest;
