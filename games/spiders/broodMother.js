// BroodMother: The Spider Queen. She alone can spawn Spiderlings for each Player, and if she dies the owner loses.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const Spider = require('./spider');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * The Spider Queen. She alone can spawn Spiderlings for each Player, and if she dies the owner loses.
 * @extends Spiders.Spider
 * @memberof Spiders
 */
class BroodMother extends Spider {
  /**
   * Initializes a BroodMother with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.eggs = 0;
    this.health = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * How many eggs the BroodMother has to spawn Spiderlings this turn.
   *
   * @type {number}
   */
  get eggs() {
    return client.gameManager.getMemberValue(this, 'eggs');
  }

  set eggs(value) {
    client.gameManager.setMemberValue(this, 'eggs', value);
  }


  /**
   * How much health this BroodMother has left. When it reaches 0, she dies and her owner loses.
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
   * Consumes a Spiderling of the same owner to regain some eggs to spawn more Spiderlings.
   *
   * @param {Spiders.Spiderling} spiderling - The Spiderling to consume. It must be on the same Nest as this BroodMother.
   * @returns {boolean} - True if the Spiderling was consumed. False otherwise.
   */
  consume(spiderling) {
    return client.runOnServer(this, 'consume', {
      spiderling: spiderling,
    });
  }


  /**
   * Spawns a new Spiderling on the same Nest as this BroodMother, consuming an egg.
   *
   * @param {string} spiderlingType - The string name of the Spiderling class you want to Spawn. Must be 'Spitter', 'Weaver', or 'Cutter'.
   * @returns {Spiders.Spiderling} - The newly spawned Spiderling if successful. Null otherwise.
   */
  spawn(spiderlingType) {
    return client.runOnServer(this, 'spawn', {
      spiderlingType: spiderlingType,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = BroodMother;
