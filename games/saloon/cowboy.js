// This is a simple class to represent the Cowboy object in the game. You can extend it by adding utility functions here in this file.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

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
         * @type number
         */
        this.canMove = 0;

        /**
         * The direction this Cowboy is moving, can be 'North', 'East', 'South', 'West'.
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
         * How many turns this unit has remaining for their siesta. 0 means they are awake, and can act.
         *
         * @name Cowboy#siesta
         * @type number
         */
        this.siesta = 0;

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

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },


    /**
     * Does their job's action on a Tile.
     *
     * @memberof Cowboy
     * @instance
     * @param {Tile} tile - The Tile you want this Cowboy to act on.
     * @param {string} [drunkDirection] - The direction the bottle will cause drunk cowboys to be in, can be 'North', 'East', 'South', 'West'.
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


    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Cowboy;
