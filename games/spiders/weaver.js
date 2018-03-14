// Weaver: A Spiderling that can alter existing Webs by weaving to add or remove silk from the Webs, thus altering its strength.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const Spiderling = require('./spiderling');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A Spiderling that can alter existing Webs by weaving to add or remove silk from the Webs, thus altering its strength.
 * @extends Spiders.Spiderling
 * @memberof Spiders
 */
class Weaver extends Spiderling {
  /**
   * Initializes a Weaver with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.strengtheningWeb = null;
    this.weakeningWeb = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The Web that this Weaver is strengthening. Null if not strengthening.
   *
   * @type {Spiders.Web}
   */
  get strengtheningWeb() {
    return client.gameManager.getMemberValue(this, 'strengtheningWeb');
  }

  set strengtheningWeb(value) {
    client.gameManager.setMemberValue(this, 'strengtheningWeb', value);
  }


  /**
   * The Web that this Weaver is weakening. Null if not weakening.
   *
   * @type {Spiders.Web}
   */
  get weakeningWeb() {
    return client.gameManager.getMemberValue(this, 'weakeningWeb');
  }

  set weakeningWeb(value) {
    client.gameManager.setMemberValue(this, 'weakeningWeb', value);
  }



  /**
   * Weaves more silk into an existing Web to strengthen it.
   *
   * @param {Spiders.Web} web - The web you want to strengthen. Must be connected to the Nest this Weaver is currently on.
   * @returns {boolean} - True if the strengthen was successfully started, false otherwise.
   */
  strengthen(web) {
    return client.runOnServer(this, 'strengthen', {
      web: web,
    });
  }


  /**
   * Weaves more silk into an existing Web to strengthen it.
   *
   * @param {Spiders.Web} web - The web you want to weaken. Must be connected to the Nest this Weaver is currently on.
   * @returns {boolean} - True if the weaken was successfully started, false otherwise.
   */
  weaken(web) {
    return client.runOnServer(this, 'weaken', {
      web: web,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Weaver;
