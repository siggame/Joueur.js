// Player: A player in this game. Every AI controls one player.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");

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
         * Every Cowboy owned by this Player.
         *
         * @name Player#cowboys
         * @type Array.<Cowboy>
         */
        this.cowboys = [];

        /**
         * How many enemy Cowboys this player's team has killed.
         *
         * @name Player#kills
         * @type number
         */
        this.kills = 0;

        /**
         * If the player lost the game or not.
         *
         * @name Player#lost
         * @type boolean
         */
        this.lost = false;

        /**
         * The name of the player.
         *
         * @name Player#name
         * @type string
         */
        this.name = "";

        /**
         * This player's opponent in the game.
         *
         * @name Player#opponent
         * @type Player
         */
        this.opponent = null;

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
         * How rowdy their team is. When it gets too high their team takes a collective siesta.
         *
         * @name Player#rowdiness
         * @type number
         */
        this.rowdiness = 0;

        /**
         * How many times their team has played a piano.
         *
         * @name Player#score
         * @type number
         */
        this.score = 0;

        /**
         * 0 when not having a team siesta. When greater than 0 represents how many turns left for the team siesta to complete.
         *
         * @name Player#siesta
         * @type number
         */
        this.siesta = 0;

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

        /**
         * The YoungGun this Player uses to call in new Cowboys.
         *
         * @name Player#youngGun
         * @type YoungGun
         */
        this.youngGun = null;

        // any additional init logic you want can go here

    },
});

module.exports = Player;
