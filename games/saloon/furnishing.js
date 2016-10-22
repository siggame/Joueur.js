// Furnishing: An furnishing in the Saloon that must be pathed around, or destroyed.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc An furnishing in the Saloon that must be pathed around, or destroyed.
 * @extends GameObject
 */
var Furnishing = Class(GameObject, {
    /**
     * initializes a Furnishing with basic logic as provided by the Creer code generator
     *
     * @memberof Furnishing
     * @private
     */
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * How much health this Furnishing currently has.
         *
         * @name Furnishing#health
         * @type number
         */
        this.health = 0;

        /**
         * If this Furnishing has been destroyed, and has been removed from the game.
         *
         * @name Furnishing#isDestroyed
         * @type boolean
         */
        this.isDestroyed = false;

        /**
         * True if this Furnishing is a piano and can be played, False otherwise.
         *
         * @name Furnishing#isPiano
         * @type boolean
         */
        this.isPiano = false;

        /**
         * If this is a piano and a Cowboy is playing it this turn.
         *
         * @name Furnishing#isPlaying
         * @type boolean
         */
        this.isPlaying = false;

        /**
         * The Tile that this Furnishing is located on.
         *
         * @name Furnishing#tile
         * @type Tile
         */
        this.tile = null;

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Furnishing;
