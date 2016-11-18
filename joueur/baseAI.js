var Class = require("classe");
var color = require("./ansiColorCoder");

// @class BaseAI: the base functions all AIs should do
var BaseAI = Class({
    init: function(game) {
        this.game = game;
        this._settings = {};
    },

    getName: function() {
        return "JavaScript Player"; // intended to be overridden by the AI class
    },

    start: function() {
        // intended to be overridden by the AI class
    },

    gameUpdated: function() {
        // intended to be overridden by the AI class
    },

    invalid: function(message) {
        console.warn(color.text("yellow") + "Invalid:", message + color.reset());
    },

    ended: function(won, reason) {
        // intended to be overridden by the AI class
    },

    setSettings: function(aiSettings) {
        console.log("aiSettings", aiSettings);
        var settings = aiSettings.split("&");
        for(var i = 0; i < settings.length; i++) {
            var kv = settings[i].split("=");
            this._settings[kv[0]] = kv[1];
        }
    },

    /**
     * Gets an AI setting passed to the program via the `--aiSettings` flag. If the flag was set it will be returned as a string value, None otherwise.
     *
     * @memberof BaseAI
     * @instance
     * @param {string} key - The key of the setting you wish to get the value for
     * @returns {string|undefined} A string representing the value set via command line, or undefined if the key was not set
     */
    getSetting: function(key) {
        return this._settings[key];
    },
});

module.exports = BaseAI;
