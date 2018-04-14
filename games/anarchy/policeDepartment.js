// PoliceDepartment: Used to keep cities under control and raid Warehouses.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const Building = require('./building');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Used to keep cities under control and raid Warehouses.
 * @extends Anarchy.Building
 * @memberof Anarchy
 */
class PoliceDepartment extends Building {
  /**
   * Initializes a PoliceDepartment with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables


  /**
   * Bribe the police to raid a Warehouse, dealing damage equal based on the Warehouse's current exposure, and then resetting it to 0.
   *
   * @param {Anarchy.Warehouse} warehouse - The warehouse you want to raid.
   * @returns {number} - The amount of damage dealt to the warehouse, or -1 if there was an error.
   */
  raid(warehouse) {
    return client.runOnServer(this, 'raid', {
      warehouse: warehouse,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = PoliceDepartment;
