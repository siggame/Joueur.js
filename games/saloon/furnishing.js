// Furnishing: An furnishing in the Saloon that must be pathed around, or destroyed.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");

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

        // any additional init logic you want can go here


    },
});

module.exports = Furnishing;
