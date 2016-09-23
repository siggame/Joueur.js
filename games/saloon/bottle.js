// This is a simple class to represent the Bottle object in the game. You can extend it by adding utility functions here in this file.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc A bottle thrown by a bartender at a Tile.
 * @extends GameObject
 */
var Bottle = Class(GameObject, {
    /**
     * initializes a Bottle with basic logic as provided by the Creer code generator
     *
     * @memberof Bottle
     * @private
     */
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * The direction any Cowboys hit by this will move, can be 'North', 'East', 'South', 'West'.
         *
         * @name Bottle#drunkDirection
         * @type string
         */
        this.drunkDirection = "";

        /**
         * True if this Bottle has impacted and has been destroyed (removed from the Game). False if still in the game flying through the saloon.
         *
         * @name Bottle#isDestroyed
         * @type boolean
         */
        this.isDestroyed = false;

        /**
         * The Tile this bottle is currently flying over.
         *
         * @name Bottle#location
         * @type Tile
         */
        this.location = null;

        /**
         * The Tile this Bottle will fly to next turn, if it does not impact anything on it's path.
         *
         * @name Bottle#nextLocation
         * @type Tile
         */
        this.nextLocation = null;

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Bottle;
