// This is where you build your AI for the Anarchy game.

var Class = require(__basedir + "/joueur/class");
var BaseAI = require(__basedir + "/joueur/baseAI");


/**
 * This is the class to play the Anarchy game. This is where you should build your AI.
 * @class
 */
var AI = Class(BaseAI, {
    /**
     * this is the name you send to the server to play as.
     */
    getName: function() {
        return "Anarchy JavaScript Player"; // REPLACE THIS WITH YOUR TEAM NAME
    },

    /**
     * this is called once the game starts and your AI knows its playerID and game. You can initialize your AI here.
     */
    start: function() {
    },

    /**
     * this is called every time the game's state updates, so if you are tracking anything you can update it here.
     */
    gameUpdated: function() {
    },

    /**
     * this is called when the game ends, you can clean up your data and dump files here if need be
     *
     * @param {boolean} won - true means you won, false means you lost
     * @param {string} reason - the human readable string explaining why you won or lost
     */
    ended: function(won, reason) {
    },



    /**
     * This is called every time the AI is asked to respond with a command during their turn
     *
     * @returns {boolean} represents if you want to end your turn. true means end the turn, false means to keep your turn going and re-call runTurn()
     */
    runTurn: function() {
        // Get my first warehouse
        var warehouse = this.player.warehouses[0];
        if(this.canBribe(warehouse)) {
            //ignite the first enemy building
            warehouse.ignite(this.player.otherPlayer.buildings[0]);
        }

        // Get my first fire department
        var fireDepartment = this.player.fireDepartments[0];
        if(this.canBribe(fireDepartment)) {
            // extinguish my first building if it's not my headquarters
            var myBuilding = this.player.buildings[0];
            if(!myBuilding.isHeadquarters) {
                fireDepartment.extinguish(myBuilding);
            }
        }

        // Get my first police department
        var policeDepartment = this.player.policeDepartments[0];
        if(this.canBribe(policeDepartment)) {
            // Get the first enemy warehouse
            var toRaid = this.player.otherPlayer.warehouses[0];
            // Make sure it is alive to be raided
            if(toRaid.health > 0 && !toRaid.isHeadquarters) {
                // Raid the first enemy warehouse if it's alive and not a headquarters
                policeDepartment.raid(toRaid);
            }
        }

        // Get my first weather station
        var weatherStation1 = this.player.weatherStations[0];
        if(this.canBribe(weatherStation1)) {
            // Make sure the intensity isn't at max
            if(this.game.nextForecast.intensity < this.game.maxForecastIntensity) {
                weatherStation1.intensify();
            }
            else {
                // Otherwise decrease the intensity
                weatherStation1.intensify(true);
            }
        }

        // Get my second weather station
        var weatherStation2 = this.player.weatherStations[1];
        if(this.canBribe(weatherStation2)) {
            // Rotate clockwise
            weatherStation2.rotate();
        }

        return true;
    },



    canBribe: function(building) {
        return (building && building.health > 0 && !building.bribed && building.owner == this.player)
    },


});

module.exports = AI;
