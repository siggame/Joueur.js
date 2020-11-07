// Warehouse: A typical abandoned warehouse that anarchists hang out in and can be bribed to burn down Buildings.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const Building = require('./building');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A typical abandoned warehouse that anarchists hang out in and can be bribed to burn down Buildings.
 * @extends Anarchy.Building
 * @memberof Anarchy
 */
class Warehouse extends Building {
  /**
   * Initializes a Warehouse with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.exposure = 0;
    this.fireAdded = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * How exposed the anarchists in this warehouse are to PoliceDepartments. Raises when bribed to ignite buildings, and drops each turn if not bribed.
   *
   * @type {number}
   */
  get exposure() {
    return client.gameManager.getMemberValue(this, 'exposure');
  }

  set exposure(value) {
    client.gameManager.setMemberValue(this, 'exposure', value);
  }


  /**
   * The amount of fire added to buildings when bribed to ignite a building. Headquarters add more fire than normal Warehouses.
   *
   * @type {number}
   */
  get fireAdded() {
    return client.gameManager.getMemberValue(this, 'fireAdded');
  }

  set fireAdded(value) {
    client.gameManager.setMemberValue(this, 'fireAdded', value);
  }



  /**
   * Bribes the Warehouse to light a Building on fire. This adds this building's fireAdded to their fire, and then this building's exposure is increased based on the Manhattan distance between the two buildings.
   *
   * @param {Anarchy.Building} building - The Building you want to light on fire.
   * @returns {number} - The exposure added to this Building's exposure. -1 is returned if there was an error.
   */
  ignite(building) {
    return client.runOnServer(this, 'ignite', {
      building: building,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Warehouse;
