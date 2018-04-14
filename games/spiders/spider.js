// Spider: A Spider in the game. The most basic unit.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A Spider in the game. The most basic unit.
 * @extends Spiders.GameObject
 * @memberof Spiders
 */
class Spider extends GameObject {
  /**
   * Initializes a Spider with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.isDead = false;
    this.nest = null;
    this.owner = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * If this Spider is dead and has been removed from the game.
   *
   * @type {boolean}
   */
  get isDead() {
    return client.gameManager.getMemberValue(this, 'isDead');
  }

  set isDead(value) {
    client.gameManager.setMemberValue(this, 'isDead', value);
  }


  /**
   * The Nest that this Spider is currently on. Null when moving on a Web.
   *
   * @type {Spiders.Nest}
   */
  get nest() {
    return client.gameManager.getMemberValue(this, 'nest');
  }

  set nest(value) {
    client.gameManager.setMemberValue(this, 'nest', value);
  }


  /**
   * The Player that owns this Spider, and can command it.
   *
   * @type {Spiders.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Spider;
