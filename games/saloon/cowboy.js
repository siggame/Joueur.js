// Cowboy: A person on the map that can move around and interact within the saloon.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");

/**
 * @class
 * @classdesc A person on the map that can move around and interact within the saloon.
 * @extends GameObject
 */
var Cowboy = Class(GameObject, {
    /**
     * initializes a Cowboy with basic logic as provided by the Creer code generator
     *
     * @memberof Cowboy
     * @private
     */
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * If the Cowboy can be moved this turn via its owner.
         *
         * @name Cowboy#canMove
         * @type boolean
         */
        this.canMove = false;

        /**
         * The direction this Cowboy is moving while drunk. Will be 'North', 'East', 'South', or 'West' when drunk; or '' (empty string) when not drunk.
         *
         * @name Cowboy#drunkDirection
         * @type string
         */
        this.drunkDirection = "";

        /**
         * How much focus this Cowboy has. Different Jobs do different things with their Cowboy's focus.
         *
         * @name Cowboy#focus
         * @type number
         */
        this.focus = 0;

        /**
         * How much health this Cowboy currently has.
         *
         * @name Cowboy#health
         * @type number
         */
        this.health = 0;

        /**
         * If this Cowboy is dead and has been removed from the game.
         *
         * @name Cowboy#isDead
         * @type boolean
         */
        this.isDead = false;

        /**
         * If this Cowboy is drunk, and will automatically walk.
         *
         * @name Cowboy#isDrunk
         * @type boolean
         */
        this.isDrunk = false;

        /**
         * The job that this Cowboy does, and dictates how they fight and interact within the Saloon.
         *
         * @name Cowboy#job
         * @type string
         */
        this.job = "";

        /**
         * The Player that owns and can control this Cowboy.
         *
         * @name Cowboy#owner
         * @type Player
         */
        this.owner = null;

        /**
         * The Tile that this Cowboy is located on.
         *
         * @name Cowboy#tile
         * @type Tile
         */
        this.tile = null;

        /**
         * How many times this unit has been drunk before taking their siesta and reseting this to 0.
         *
         * @name Cowboy#tolerance
         * @type number
         */
        this.tolerance = 0;

        /**
         * How many turns this unit has remaining before it is no longer busy and can `act()` or `play()` again.
         *
         * @name Cowboy#turnsBusy
         * @type number
         */
        this.turnsBusy = 0;

        // any additional init logic you want can go here


    },


    /**
     * Does their job's action on a Tile.
     *
     * @memberof Cowboy
     * @instance
     * @param {Tile} tile - The Tile you want this Cowboy to act on.
     * @param {string} [drunkDirection] - The direction the bottle will cause drunk cowboys to be in, can be 'North', 'East', 'South', or 'West'.
     * @returns {boolean} - True if the act worked, false otherwise.
     */
    act: function(tile, drunkDirection) {
        if(arguments.length <= 1) {
            drunkDirection = "";
        }

        return client.runOnServer(this, "act", {
            tile: tile,
            drunkDirection: drunkDirection,
        });
    },

    /**
     * Moves this Cowboy from its current Tile to an adjacent Tile.
     *
     * @memberof Cowboy
     * @instance
     * @param {Tile} tile - The Tile you want to move this Cowboy to.
     * @returns {boolean} - True if the move worked, false otherwise.
     */
    move: function(tile) {
        return client.runOnServer(this, "move", {
            tile: tile,
        });
    },

    /**
     * Sits down and plays a piano.
     *
     * @memberof Cowboy
     * @instance
     * @param {Furnishing} piano - The Furnishing that is a piano you want to play.
     * @returns {boolean} - True if the play worked, false otherwise.
     */
    play: function(piano) {
        return client.runOnServer(this, "play", {
            piano: piano,
        });
    },
});

module.exports = Cowboy;
