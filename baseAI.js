// @class BaseAI: the base functions all AIs should do
var Class = require("./utilities/class");

var BaseAI = Class({
    init: function(game) {
        this.game = game;
    },


    start: function(data) {
        this.playerID = data.playerID;
        this.playerName = data.playerName;
    },

    connected: function(data) {
        this._serverConstants = data.constants;
    },

    connectPlayer: function() {
        this.player = this.game.getGameObject(this.playerID);
    },

    gameInitialized: function() {
        // intended to be overridden by the AI class
    },

    gameUpdated: function() {
        // intended to be overridden by the AI class
    },

    run: function() {
        // intended to be overridden by the AI class
    },

    ignoring: function() {
        // intended to be overridden by the AI class
    },

    over: function() {
        // intended to be overridden by the AI class
    },
});

module.exports = BaseAI;
