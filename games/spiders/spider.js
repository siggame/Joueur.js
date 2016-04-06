// Generated by Creer at 03:31PM on April 06, 2016 UTC, git hash: 'e7ec4e35c89d7556b9e07d4331ac34052ac011bd'
// This is a simple class to represent the Spider object in the game. You can extend it by adding utility functions here in this file.

var Class = require(__basedir + "/joueur/class");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");


//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * @class
 * @classdesc A Spider in the game. The most basic unit.
 * @extends GameObject
 */
var Spider = Class(GameObject, {
    /**
     * initializes a Spider with basic logic as provided by the Creer code generator
     *
     * @memberof Spider
     * @private
     */
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * If this Spider is dead and has been removed from the game.
         *
         * @name Spider#isDead
         * @type boolean
         */
        this.isDead = false;

        /**
         * The Nest that this Spider is currently on. Null when moving on a Web.
         *
         * @name Spider#nest
         * @type Nest
         */
        this.nest = null;

        /**
         * The Player that owns this Spider, and can command it.
         *
         * @name Spider#owner
         * @type Player
         */
        this.owner = null;

        //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
        // any additional init logic you want can go here
        //<<-- /Creer-Merge: init -->>

    },



    //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional functions you want to add to this class can be perserved here
    //<<-- /Creer-Merge: functions -->>

});

module.exports = Spider;
