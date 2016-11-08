// YoungGun: An eager young person that wants to join your gang, and will call in the veteran Cowboys you need to win the brawl in the saloon.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var GameObject = require("./gameObject");

/**
 * @class
 * @classdesc An eager young person that wants to join your gang, and will call in the veteran Cowboys you need to win the brawl in the saloon.
 * @extends GameObject
 */
var YoungGun = Class(GameObject, {
    /**
     * initializes a YoungGun with basic logic as provided by the Creer code generator
     *
     * @memberof YoungGun
     * @private
     */
    init: function() {
        GameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * The Tile that a Cowboy will be called in on if this YoungGun calls in a Cowboy.
         *
         * @name YoungGun#callInTile
         * @type Tile
         */
        this.callInTile = null;

        /**
         * True if the YoungGun can call in a Cowboy, false otherwise.
         *
         * @name YoungGun#canCallIn
         * @type boolean
         */
        this.canCallIn = false;

        /**
         * The Player that owns and can control this YoungGun.
         *
         * @name YoungGun#owner
         * @type Player
         */
        this.owner = null;

        /**
         * The Tile this YoungGun is currently on.
         *
         * @name YoungGun#tile
         * @type Tile
         */
        this.tile = null;

        // any additional init logic you want can go here


    },


    /**
     * Tells the YoungGun to call in a new Cowboy of the given job to the open Tile nearest to them.
     *
     * @memberof YoungGun
     * @instance
     * @param {string} job - The job you want the Cowboy being brought to have.
     * @returns {Cowboy} - The new Cowboy that was called in if valid. They will not be added to any `cowboys` lists until the turn ends. Null otherwise.
     */
    callIn: function(job) {
        return client.runOnServer(this, "callIn", {
            job: job,
        });
    },

});

module.exports = YoungGun;
