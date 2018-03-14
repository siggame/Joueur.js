// Spitter: A Spiderling that creates and spits new Webs from the Nest it is on to another Nest, connecting them.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const Spiderling = require('./spiderling');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A Spiderling that creates and spits new Webs from the Nest it is on to another Nest, connecting them.
 * @extends Spiders.Spiderling
 * @memberof Spiders
 */
class Spitter extends Spiderling {
  /**
   * Initializes a Spitter with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.spittingWebToNest = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The Nest that this Spitter is creating a Web to spit at, thus connecting them. Null if not spitting.
   *
   * @type {Spiders.Nest}
   */
  get spittingWebToNest() {
    return client.gameManager.getMemberValue(this, 'spittingWebToNest');
  }

  set spittingWebToNest(value) {
    client.gameManager.setMemberValue(this, 'spittingWebToNest', value);
  }



  /**
   * Creates and spits a new Web from the Nest the Spitter is on to another Nest, connecting them.
   *
   * @param {Spiders.Nest} nest - The Nest you want to spit a Web to, thus connecting that Nest and the one the Spitter is on.
   * @returns {boolean} - True if the spit was successful, false otherwise.
   */
  spit(nest) {
    return client.runOnServer(this, 'spit', {
      nest: nest,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Spitter;
