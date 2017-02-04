// FireDepartment: Can put out fires completely.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const Building = require('./building');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Can put out fires completely.
 * @extends Building
 */
class FireDepartment extends Building {
  /**
   * initializes a FireDepartment with basic logic as provided by the Creer code generator
   *
   * @memberof FireDepartment
   * @private
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.fireExtinguished = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The amount of fire removed from a building when bribed to extinguish a building.
   *
   * @type {number}
   */
  get fireExtinguished() {
    return client.gameManager.getMemberValue(this, 'fireExtinguished');
  }

  set fireExtinguished(value) {
    client.gameManager.setMemberValue(this, 'fireExtinguished', value);
  }



  /**
   * Bribes this FireDepartment to extinguish the some of the fire in a building.
   *
   * @param {Building} building - The Building you want to extinguish.
   * @returns {boolean} - True if the bribe worked, false otherwise.
   */
  extinguish(building) {
    return client.runOnServer(this, 'extinguish', {
      building: building,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = FireDepartment;
