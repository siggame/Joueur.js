// Cutter: A Spiderling that can cut existing Webs.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const Spiderling = require('./spiderling');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A Spiderling that can cut existing Webs.
 * @extends Spiders.Spiderling
 * @memberof Spiders
 */
class Cutter extends Spiderling {
  /**
   * Initializes a Cutter with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.cuttingWeb = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The Web that this Cutter is trying to cut. Null if not cutting.
   *
   * @type {Spiders.Web}
   */
  get cuttingWeb() {
    return client.gameManager.getMemberValue(this, 'cuttingWeb');
  }

  set cuttingWeb(value) {
    client.gameManager.setMemberValue(this, 'cuttingWeb', value);
  }



  /**
   * Cuts a web, destroying it, and any Spiderlings on it.
   *
   * @param {Spiders.Web} web - The web you want to Cut. Must be connected to the Nest this Cutter is currently on.
   * @returns {boolean} - True if the cut was successfully started, false otherwise.
   */
  cut(web) {
    return client.runOnServer(this, 'cut', {
      web: web,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Cutter;
