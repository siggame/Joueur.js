var Serializer = require("./serializer");
var Class = require("classe");

// @class GameManager: basically state management. Competitiors do not modify
var GameManager = Class({
    init: function(game) {
        this.game = game;
    },

    setConstants: function(constants) {
        this._serverConstants = constants;
        this._DELTA_LIST_LENGTH = constants.DELTA_LIST_LENGTH;
        this._DELTA_REMOVED = constants.DELTA_REMOVED;
    },

    /// applies a delta state (change in state information) to this game
    applyDeltaState: function(delta) {
        if(delta.gameObjects !== undefined) {
            this._initGameObjects(delta.gameObjects);
        }

        this._mergeDelta(this.game, delta);
    },

    /// game objects can be refences in the delta states for cycles, they will all point to the game objects here.
    _initGameObjects: function(gameObjects) {
        for(var id in gameObjects) {
            if(gameObjects.hasOwnProperty(id)) {
                if(this.game.gameObjects[id] === undefined) { // then this a new game object that we need to create as a class instance
                    var gameObject = gameObjects[id];
                    var gameObjectClass = this.game._gameObjectClasses[gameObject.gameObjectName];

                    this.game.gameObjects[id] = new gameObjectClass();
                }
            }
        }
    },

    /// recursively merges delta changes to the game.
    _mergeDelta: function(state, delta) {
        var deltaLength = delta[this._DELTA_LIST_LENGTH];

        if(deltaLength !== undefined) { // then this part in the state is an array
            delete delta[this._DELTA_LIST_LENGTH]; // we don't want to copy this key/value over to the state, it was just to signify the delta is an array
            while(state.length > deltaLength) { // pop elements off the array until the array is short enough. an increase in array size will be added below as arrays resize when keys larger are set
                state.pop();
            }
        }

        for(var key in delta) {
            if(delta.hasOwnProperty(key)) {
                var d = delta[key];
                var stateKey = key;
                if(deltaLength !== undefined) {
                    stateKey = parseInt(key);
                }

                if(d === this._DELTA_REMOVED) {
                    delete state[stateKey];
                }
                else if(Serializer.isGameObjectReference(d)) {
                    state[stateKey] = this.game.getGameObject(d.id);
                }
                else if(Serializer.isObject(d) && Serializer.isObject(state[stateKey])) {
                    this._mergeDelta(state[stateKey], d);
                }
                else {
                    if(Serializer.isObject(d)) {
                        var dIsArray = (d[this._DELTA_LIST_LENGTH] !== undefined);
                        state[stateKey] = this._mergeDelta(dIsArray ? [] : {}, d);
                    }
                    else {
                        state[stateKey] = d;
                    }
                }
            }
        }

        return state;
    },
});

module.exports = GameManager;
