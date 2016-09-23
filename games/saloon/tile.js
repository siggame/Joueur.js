// This is a simple class to represent the Tile object in the game. You can extend it by adding utility functions here in this file.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc A Tile in the game that makes up the 2D map grid.
 * @extends GameObject
 */
var Tile = Class(GameObject, {
    /**
     * initializes a Tile with basic logic as provided by the Creer code generator
     *
     * @memberof Tile
     * @private
     */
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * All the beer Bottles currently flying over this Tile.
         *
         * @name Tile#bottles
         * @type Array.<Bottle>
         */
        this.bottles = [];

        /**
         * The Cowboy that is on this Tile, or null if empty.
         *
         * @name Tile#cowboy
         * @type Cowboy
         */
        this.cowboy = null;

        /**
         * The furnishing that is on this Tile, or null if empty.
         *
         * @name Tile#furnishing
         * @type Furnishing
         */
        this.furnishing = null;

        /**
         * If this Tile is pathable, but has a hazard that damages Cowboys that path through it.
         *
         * @name Tile#hasHazard
         * @type boolean
         */
        this.hasHazard = false;

        /**
         * If this Tile is a wall of the Saloon, and can never be pathed through.
         *
         * @name Tile#isWall
         * @type boolean
         */
        this.isWall = false;

        /**
         * The Tile above this one (x, y-1). Null if out of bounds of the map.
         *
         * @name Tile#tileAbove
         * @type Tile
         */
        this.tileAbove = null;

        /**
         * The Tile below this one (x, y+1). Null if out of bounds of the map.
         *
         * @name Tile#tileBelow
         * @type Tile
         */
        this.tileBelow = null;

        /**
         * The Tile to the left of this one (x-1, y). Null if out of bounds of the map.
         *
         * @name Tile#tileLeft
         * @type Tile
         */
        this.tileLeft = null;

        /**
         * The Tile to the right of this one (x+1, y). Null if out of bounds of the map.
         *
         * @name Tile#tileRight
         * @type Tile
         */
        this.tileRight = null;

        /**
         * The x (horizontal) position of this Tile.
         *
         * @name Tile#x
         * @type number
         */
        this.x = 0;

        /**
         * The y (vertical) position of this Tile.
         *
         * @name Tile#y
         * @type number
         */
        this.y = 0;

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Tile;
