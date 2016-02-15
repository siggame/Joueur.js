// Generated by Creer at 06:37PM on February 15, 2016 UTC, git hash: '955970b8006ac45cc438822363db1bc1242d9868'
// This is a simple class to represent the Player object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc A player in this game. Every AI controls one player.
 * @extends GameObject
 */
var Player = Class(GameObject, {
    /**
     * initializes a Player with basic logic as provided by the Creer code generator
     *
     * @memberof Player
     * @private
     */
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * What type of client this is, e.g. 'Python', 'JavaScript', or some other language. For potential data mining purposes.
         *
         * @name Player#clientType
         * @type string
         */
        this.clientType = "";

        /**
         * The color (side) of this player. Either 'White' or 'Black', with the 'White' player having the first move.
         *
         * @name Player#color
         * @type string
         */
        this.color = "";

        /**
         * The direction your checkers must go along the file (y) axis until they reach the other side.
         *
         * @name Player#fileDirection
         * @type number
         */
        this.fileDirection = 0;

        /**
         * true if this player is currently in check, and must move out of check.
         *
         * @name Player#inCheck
         * @type boolean
         */
        this.inCheck = false;

        /**
         * If the player lost the game or not.
         *
         * @name Player#lost
         * @type boolean
         */
        this.lost = false;

        /**
         * If the Player has made their move for the turn. true means they can no longer move a piece this turn.
         *
         * @name Player#madeMove
         * @type boolean
         */
        this.madeMove = false;

        /**
         * The name of the player
         *
         * @name Player#name
         * @type string
         */
        this.name = "";

        /**
         * this player's opponent in the game.
         *
         * @name Player#otherPlayer
         * @type Player
         */
        this.otherPlayer = null;

        /**
         * All the unpcaptured chess pieces owned by this player.
         *
         * @name Player#pieces
         * @type Array.<Piece>
         */
        this.pieces = [];

        /**
         * The reason why the player lost the game.
         *
         * @name Player#reasonLost
         * @type string
         */
        this.reasonLost = "";

        /**
         * The reason why the player won the game.
         *
         * @name Player#reasonWon
         * @type string
         */
        this.reasonWon = "";

        /**
         * The amount of time (in ns) remaining for this AI to send commands.
         *
         * @name Player#timeRemaining
         * @type number
         */
        this.timeRemaining = 0;

        /**
         * If the player won the game or not.
         *
         * @name Player#won
         * @type boolean
         */
        this.won = false;

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Player;
