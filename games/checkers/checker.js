// This is a simple class to represent the Checker object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc A checker on the game board.
 * @extends GameObject
 */
var Checker = Class(GameObject, {
    /**
     * initializes a Checker with basic logic as provided by the Creer code generator
     *
     * @memberof Checker
     * @private
     */
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * If the checker has been kinged and can move backwards.
         *
         * @name Checker#kinged
         * @type boolean
         */
        this.kinged = false;

        /**
         * The player that controls this Checker.
         *
         * @name Checker#owner
         * @type Player
         */
        this.owner = null;

        /**
         * The x coordinate of the checker.
         *
         * @name Checker#x
         * @type number
         */
        this.x = 0;

        /**
         * The y coordinate of the checker.
         *
         * @name Checker#y
         * @type number
         */
        this.y = 0;

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },


    /**
     * Returns if the checker is owned by your player or not.
     *
     * @memberof Checker
     * @instance
     * @returns {boolean} - True if it is yours, false if it is not yours.
     */
    isMine: function() {
        return client.runOnServer(this, "isMine", {
        });
    },

    /**
     * Moves the checker from its current location to the given (x, y).
     *
     * @memberof Checker
     * @instance
     * @param {number} x - The x coordinate to move to.
     * @param {number} y - The y coordinate to move to.
     * @returns {Checker} - Returns the same checker that moved if the move was successful. null otherwise.
     */
    move: function(x, y) {
        return client.runOnServer(this, "move", {
            x: x,
            y: y,
        });
    },


    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Checker;
