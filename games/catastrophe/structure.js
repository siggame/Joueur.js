// Structure: A structure on a Tile.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A structure on a Tile.
 * @extends Catastrophe.GameObject
 * @memberof Catastrophe
 */
class Structure extends GameObject {
  /**
   * Initializes a Structure with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.effectRadius = 0;
    this.materials = 0;
    this.owner = null;
    this.tile = null;
    this.type = '';

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The range of this Structure's effect. For example, a radius of 1 means this Structure affects a 3x3 square centered on this Structure.
   *
   * @type {number}
   */
  get effectRadius() {
    return client.gameManager.getMemberValue(this, 'effectRadius');
  }

  set effectRadius(value) {
    client.gameManager.setMemberValue(this, 'effectRadius', value);
  }


  /**
   * The number of materials in this Structure. Once this number reaches 0, this Structure is destroyed.
   *
   * @type {number}
   */
  get materials() {
    return client.gameManager.getMemberValue(this, 'materials');
  }

  set materials(value) {
    client.gameManager.setMemberValue(this, 'materials', value);
  }


  /**
   * The owner of this Structure if any, otherwise null.
   *
   * @type {Catastrophe.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The Tile this Structure is on.
   *
   * @type {Catastrophe.Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }


  /**
   * The type of Structure this is ('shelter', 'monument', 'wall', 'road', 'neutral').
   *
   * @type {string}
   */
  get type() {
    return client.gameManager.getMemberValue(this, 'type');
  }

  set type(value) {
    client.gameManager.setMemberValue(this, 'type', value);
  }



  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Structure;
