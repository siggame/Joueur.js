// Tile: A Tile in the game that makes up the 2D map grid.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");

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
         * The beer Bottle currently flying over this Tile.
         *
         * @name Tile#bottle
         * @type Bottle
         */
        this.bottle = null;

        /**
         * The Cowboy that is on this Tile, null otherwise.
         *
         * @name Tile#cowboy
         * @type Cowboy
         */
        this.cowboy = null;

        /**
         * The furnishing that is on this Tile, null otherwise.
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
         * If this Tile is a balcony of the Saloon that YoungGuns walk around on, and can never be pathed through by Cowboys.
         *
         * @name Tile#isBalcony
         * @type boolean
         */
        this.isBalcony = false;

        /**
         * The Tile to the 'East' of this one (x+1, y). Null if out of bounds of the map.
         *
         * @name Tile#tileEast
         * @type Tile
         */
        this.tileEast = null;

        /**
         * The Tile to the 'North' of this one (x, y-1). Null if out of bounds of the map.
         *
         * @name Tile#tileNorth
         * @type Tile
         */
        this.tileNorth = null;

        /**
         * The Tile to the 'South' of this one (x, y+1). Null if out of bounds of the map.
         *
         * @name Tile#tileSouth
         * @type Tile
         */
        this.tileSouth = null;

        /**
         * The Tile to the 'West' of this one (x-1, y). Null if out of bounds of the map.
         *
         * @name Tile#tileWest
         * @type Tile
         */
        this.tileWest = null;

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

        /**
         * The YoungGun on this tile, null otherwise.
         *
         * @name Tile#youngGun
         * @type YoungGun
         */
        this.youngGun = null;

        // any additional init logic you want can go here


    },

    /**
     * The valid directions that tiles can be in, "North", "East", "South", or "West"
     *
     * @memberof Tile
     * @instance
     * @constant
     * @static
     * @type {Array.<string>}
     */
    directions: [ "North", "East", "South", "West" ],

    /**
     * Gets the neighbors of this Tile
     *
     * @memberOf Tile
     * @instance
     * @returns {Array.<Tile>} - The neighboring (adjacent) Tiles to this tile
     */
    getNeighbors: function() {
        var neighbors = [];
        for(var i = 0; i < this.directions.length; i++) {
            var neighbor = this["tile" + this.directions[i]];
            if(neighbor) {
                neighbors.push(neighbor);
            }
        }

        return neighbors;
    },

    /**
     * Checks if a Tile is pathable to units
     *
     * @memberOf Tile
     * @instance
     * @returns {boolean} - True if pathable, false otherwise
     */
    isPathable: function() {
        return !this.isBalcony && !this.cowboy && !this.furnishing;
    },

    /**
     * Checks if this Tile has a specific neighboring Tile
     *
     * @memberOf Tile
     * @instance
     * @param {Tile} tile - tile to check against
     * @returns {boolean} true if the tile is a neighbor of this Tile, false otherwise
     */
    hasNeighbor: function(tile) {
        return Boolean(tile && (this.tileNorth === tile || this.tileEast === tile || this.tileSouth === tile || this.tileEast === tile));
    },
});

module.exports = Tile;
