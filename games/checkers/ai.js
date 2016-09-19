// This is where you build your AI for the Checkers game.

var Class = require("classe");
var BaseAI = require(__basedir + "/joueur/baseAI");

// <<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
// <<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc This is the class to play the Checkers game. This is where you should build your AI.
 */
var AI = Class(BaseAI, {
    /**
     * The reference to the Game instance this AI is playing.
     *
     * @member {Game} game
     * @memberof AI
     * @instance
     */

    /**
     * The reference to the Player this AI controls in the Game.
     *
     * @member {Player} player
     * @memberof AI
     * @instance
     */

    /**
     * This is the name you send to the server so your AI will control the player named this string.
     *
     * @memberof AI
     * @instance
     * @returns {string} - The name of your Player.
     */
    getName: function() {
        // <<-- Creer-Merge: getName -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        return "Checkers JavaScript Player";
        // <<-- /Creer-Merge: getName -->>
    },

    /**
     * This is called once the game starts and your AI knows its playerID and game. You can initialize your AI here.
     *
     * @memberof AI
     * @instance
     */
    start: function() {
        // <<-- Creer-Merge: start -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // pass
        // <<-- /Creer-Merge: start -->>
    },

    /**
     * This is called every time the game's state updates, so if you are tracking anything you can update it here.
     *
     * @memberof AI
     * @instance
     */
    gameUpdated: function() {
        // <<-- Creer-Merge: gameUpdated -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // pass
        // <<-- /Creer-Merge: gameUpdated -->>
    },

    /**
     * This is called when the game ends, you can clean up your data and dump files here if need be.
     *
     * @memberof AI
     * @instance
     * @param {boolean} won - True means you won, false means you lost.
     * @param {string} reason - The human readable string explaining why you won or lost.
     */
    ended: function(won, reason) {
        // <<-- Creer-Merge: ended -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // pass
        // <<-- /Creer-Merge: ended -->>
    },



    /**
     * This is called whenever your checker gets captured (during an opponent's turn).
     *
     * @memberof AI
     * @instance
     * @param {Checker} checker - The checker that was captured.
     */
    gotCaptured: function(checker) {
        // <<-- Creer-Merge: gotCaptured -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // Put your game logic here for gotCaptured
        return undefined;
        // <<-- /Creer-Merge: gotCaptured -->>
    },

    /**
     * This is called every time it is this AI.player's turn.
     *
     * @memberof AI
     * @instance
     * @returns {boolean} - Represents if you want to end your turn. True means end your turn, False means to keep your turn going and re-call this function.
     */
    runTurn: function() {
        // <<-- Creer-Merge: runTurn -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // Put your game logic here for runTurn
        return true;
        // <<-- /Creer-Merge: runTurn -->>
    },


    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add for your AI
    //<<-- /Creer-Merge: functions -->>

});

module.exports = AI;
