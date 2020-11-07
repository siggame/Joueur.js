// WeatherStation: Can be bribed to change the next Forecast in some way.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const Building = require('./building');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Can be bribed to change the next Forecast in some way.
 * @extends Anarchy.Building
 * @memberof Anarchy
 */
class WeatherStation extends Building {
  /**
   * Initializes a WeatherStation with basic logic as provided by the Creer code generator.
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
   * Bribe the weathermen to intensity the next Forecast by 1 or -1.
   *
   * @param {boolean} [negative] - By default the intensity will be increased by 1, setting this to true decreases the intensity by 1.
   * @returns {boolean} - True if the intensity was changed, false otherwise.
   */
  intensify(negative) {
    if(arguments.length <= 0) {
      negative = false;
    }

    return client.runOnServer(this, 'intensify', {
      negative: negative,
    });
  }


  /**
   * Bribe the weathermen to change the direction of the next Forecast by rotating it clockwise or counterclockwise.
   *
   * @param {boolean} [counterclockwise] - By default the direction will be rotated clockwise. If you set this to true we will rotate the forecast counterclockwise instead.
   * @returns {boolean} - True if the rotation worked, false otherwise.
   */
  rotate(counterclockwise) {
    if(arguments.length <= 0) {
      counterclockwise = false;
    }

    return client.runOnServer(this, 'rotate', {
      counterclockwise: counterclockwise,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = WeatherStation;
