var Class = require("classe");

// @class BaseGame: the basics of any game, basically state management. Competitiors do not modify
var BaseGame = Class({
    init: function() {
        this._gameObjectClasses = {};
    },

    // @returns BaseGameObject with the given id
    getGameObject: function(id) {
        return this.gameObjects[id];
    },
});

module.exports = BaseGame;
