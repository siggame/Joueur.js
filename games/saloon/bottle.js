// Bottle: A bottle thrown by a bartender at a Tile.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");

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
         * The Direction this Bottle is flying and will move to between turns, can be 'North', 'East', 'South', or 'West'.
         *
         * @name Bottle#direction
         * @type string
         */
        this.direction = "";

        /**
         * The direction any Cowboys hit by this will move, can be 'North', 'East', 'South', or 'West'.
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
         * @name Bottle#tile
         * @type Tile
         */
        this.tile = null;

        // any additional init logic you want can go here


    },

});

module.exports = Bottle;
