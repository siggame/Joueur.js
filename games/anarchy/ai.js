// This is where you build your AI for the Anarchy game.

const BaseAI = require(`${__basedir}/joueur/baseAI`);

// <<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
// <<-- /Creer-Merge: requires -->>

function rand(items) {
    return items[Math.floor(Math.random()*items.length)];
}

/**
 * This is the class to play the Anarchy game. This is where you should build your AI.
 * @memberof Anarchy
 */
class AI extends BaseAI {
  /**
   * The reference to the Game instance this AI is playing.
   *
   * @member {Game} game
   */

  /**
   * The reference to the Player this AI controls in the Game.
   *
   * @member {Player} player
   */

  /**
   * This is the name you send to the server so your AI will control the player named this string.
   *
   * @returns {string} - The name of your Player.
   */
  getName() {
    // <<-- Creer-Merge: getName -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    return 'Anarchy JavaScript Player';
    // <<-- /Creer-Merge: getName -->>
  }

  /**
   * This is called once the game starts and your AI knows its playerID and game. You can initialize your AI here.
   */
  start() {
    // <<-- Creer-Merge: start -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // pass
    console.log("sturt")
    // <<-- /Creer-Merge: start -->>
  }

  /**
   * This is called every time the game's state updates, so if you are tracking anything you can update it here.
   */
  gameUpdated() {
    // <<-- Creer-Merge: gameUpdated -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // pass
    // <<-- /Creer-Merge: gameUpdated -->>
  }

  /**
   * This is called when the game ends, you can clean up your data and dump files here if need be.
   *
   * @param {boolean} won - True means you won, false means you lost.
   * @param {string} reason - The human readable string explaining why you won or lost.
   */
  ended(won, reason) {
    // <<-- Creer-Merge: ended -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // pass
    // <<-- /Creer-Merge: ended -->>
  }


  /**
   * This is called every time it is this AI.player's turn.
   *
   * @returns {boolean} - Represents if you want to end your turn. True means end your turn, False means to keep your turn going and re-call this function.
   */
  runTurn() {
    // <<-- Creer-Merge: runTurn -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    console.log("my turn", this.game.currentTurn);
    // return true;
    /*
    for (const warehouse of this.player.warehouses) {
        if (this.canBribe(warehouse)) {
            var building = rand(this.player.opponent.buildings);
            if(!building.isHeadquarters) {
                console.log(`${warehouse} is going to ignite ${building}`);
                warehouse.ignite(building);
            }
        }
    }

    return true;
    */
    // return true;
    var warehouse = rand(this.player.warehouses);
    if(this.canBribe(warehouse)) {
        //ignite the first enemy building
        var building = rand(this.player.opponent.buildings);
        if(!building.isHeadquarters) {
            console.log(`${warehouse} is going to ignite ${building}`);
            warehouse.ignite(building);
        }
    }

    // Get my first fire department
    var fireDepartment = rand(this.player.fireDepartments);
    if(this.canBribe(fireDepartment)) {
        // extinguish my first building if it's not my headquarters
        var myBuilding = rand(this.player.buildings);
        if(!myBuilding.isHeadquarters) {
            console.log(`${fireDepartment} is going to extinguish ${myBuilding}`);
            fireDepartment.extinguish(myBuilding);
        }
    }

    // Get my first police department
    var policeDepartment = rand(this.player.policeDepartments);
    if(this.canBribe(policeDepartment)) {
        // Get the first enemy warehouse
        var toRaid = rand(this.player.opponent.warehouses);
        // Make sure it is alive to be raided
        if(toRaid.health > 0 && !toRaid.isHeadquarters) {
            // Raid the first enemy warehouse if it's alive and not a headquarters
            console.log(`${policeDepartment} is going to raid ${toRaid}`);
            policeDepartment.raid(toRaid);
        }
    }

    // Get my first weather station
    var weatherStation1 = rand(this.player.weatherStations);
    if(this.canBribe(weatherStation1) && this.game.nextForecast) {
        // Make sure the intensity isn't at max
        if(this.game.nextForecast.intensity < this.game.maxForecastIntensity) {
            console.log(`${weatherStation1} is going to intensify pos`);
            weatherStation1.intensify();
        }
        else {
            // Otherwise decrease the intensity
            console.log(`${weatherStation1} is going to intensify neg`);
            weatherStation1.intensify(true);
        }
    }

    // Get my second weather station
    var weatherStation2 = rand(this.player.weatherStations);
    if(this.canBribe(weatherStation2) && this.game.nextForecast) {
        // Rotate clockwise
        console.log(`${weatherStation2} is going to rotate`);
        weatherStation2.rotate();
    }

    return true;
    // <<-- /Creer-Merge: runTurn -->>
  }

  canBribe(building) {
    return (building && building.health > 0 && !building.bribed && building.owner == this.player && this.player.bribesRemaining > 0)
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add for your AI
  //<<-- /Creer-Merge: functions -->>

}

module.exports = AI;
