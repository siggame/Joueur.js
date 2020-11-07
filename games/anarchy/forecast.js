// Forecast: The weather effect that will be applied at the end of a turn, which causes fires to spread.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * The weather effect that will be applied at the end of a turn, which causes fires to spread.
 * @extends Anarchy.GameObject
 * @memberof Anarchy
 */
class Forecast extends GameObject {
  /**
   * Initializes a Forecast with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.controllingPlayer = null;
    this.direction = '';
    this.intensity = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * The Player that can use WeatherStations to control this Forecast when its the nextForecast.
   *
   * @type {Anarchy.Player}
   */
  get controllingPlayer() {
    return client.gameManager.getMemberValue(this, 'controllingPlayer');
  }

  set controllingPlayer(value) {
    client.gameManager.setMemberValue(this, 'controllingPlayer', value);
  }


  /**
   * The direction the wind will blow fires in. Can be 'north', 'east', 'south', or 'west'.
   *
   * @type {string}
   */
  get direction() {
    return client.gameManager.getMemberValue(this, 'direction');
  }

  set direction(value) {
    client.gameManager.setMemberValue(this, 'direction', value);
  }


  /**
   * How much of a Building's fire that can be blown in the direction of this Forecast. Fire is duplicated (copied), not moved (transferred).
   *
   * @type {number}
   */
  get intensity() {
    return client.gameManager.getMemberValue(this, 'intensity');
  }

  set intensity(value) {
    client.gameManager.setMemberValue(this, 'intensity', value);
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Forecast;
