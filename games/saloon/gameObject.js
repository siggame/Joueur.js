// GameObject: An object in the game. The most basic class that all game classes should inherit from automatically.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

var Class = require("classe");
var client = require(__basedir + "/joueur/client");
var BaseGameObject = require(__basedir + "/joueur/baseGameObject");


/**
 * @class
 * @classdesc An object in the game. The most basic class that all game classes should inherit from automatically.
 * @extends BaseGameObject
 */
var GameObject = Class(BaseGameObject, {
    /**
     * initializes a GameObject with basic logic as provided by the Creer code generator
     *
     * @memberof GameObject
     * @private
     */
    init: function() {
        BaseGameObject.init.apply(this, arguments);


        // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.


        /**
         * String representing the top level Class that this game object is an instance of. Used for reflection to create new instances on clients, but exposed for convenience should AIs want this data.
         *
         * @name GameObject#gameObjectName
         * @type string
         */
        this.gameObjectName = "";

        /**
         * A unique id for each instance of a GameObject or a sub class. Used for client and server communication. Should never change value after being set.
         *
         * @name GameObject#id
         * @type string
         */
        this.id = "";

        /**
         * Any strings logged will be stored here. Intended for debugging.
         *
         * @name GameObject#logs
         * @type Array.<string>
         */
        this.logs = [];

        // any additional init logic you want can go here


    },


    /**
     * Adds a message to this GameObject's logs. Intended for your own debugging purposes, as strings stored here are saved in the gamelog.
     *
     * @memberof GameObject
     * @instance
     * @param {string} message - A string to add to this GameObject's log. Intended for debugging.
     */
    log: function(message) {
        return client.runOnServer(this, "log", {
            message: message,
        });
    },
});

module.exports = GameObject;
