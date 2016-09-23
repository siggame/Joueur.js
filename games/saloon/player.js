// This is a simple class to represent the Player object in the game. You can extend it by adding utility functions here in this file.

var Class = require("classe");
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
         * @name Player#rowdyness
         * @type number
         */
        this.rowdyness = 0;

        /**
         * How many times their team has played a piano.
         *
         * @name Player#score
         * @type number
         */
        this.score = 0;

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


    /**
     * The Cowboy that was previously a 'Young Gun', and has now been promoted to a different job if successful, null otherwise.
     *
     * @memberof Player
     * @instance
     */
    returns: function() {
        return client.runOnServer(this, "returns", {
        });
    },

    /**
     * Sends in the Young Gun to the nearest Tile into the Saloon, and promotes them to a new job.
     *
     * @memberof Player
     * @instance
     * @param {string} job - The job you want the Young Gun being brought in to be called in to do, changing their job to it.
     */
    sendIn: function(job) {
        return client.runOnServer(this, "sendIn", {
            job: job,
        });
    },


    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Player;
