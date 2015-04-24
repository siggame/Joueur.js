var extend = require("extend");
var Serializer = require("./utilities/serializer");
var Class = require("./utilities/class");
var BaseGameObject = require("./baseGameObject");

// @class BaseGame: the basics of any game, basically state management. Competitiors do not modify
var BaseGame = Class({
	init: function(session) {
		this.session = session;
		this.client = undefined;
		this.gameObjects = {};
		this.players = [];
		this.currentPlayers = [];

		this._gotInitialState = false;
		this._gameObjectClasses = {};
	},


	setClient: function(client) {
		this.client = client;
	},

	setAI: function(ai) {
		this.ai = ai;
	},

	connected: function(data) {
		this._serverConstants = data.constants;
	},

	// @returns BaseGameObject with the given id
	getGameObject: function(id) {
		return this.gameObjects[id];
	},

	/// applies a delta state (change in state information) to this game
	applyDeltaState: function(delta) {
		var notGotInitialState = !this._gotInitialState;
		this._gotInitialState = true;

		if(delta.gameObjects) {
			this._initGameObjects(delta.gameObjects);
		}

		this._mergeDelta(this, delta, 0, 'Game');

		if(notGotInitialState) {
			this.ai.connectPlayer();
			this.ai.gameInitialized();
		}

		this.ai.gameUpdated();
	},

	/// game objects can be refences in the delta states for cycles, they will all point to the game objects here.
	_initGameObjects: function(gameObjects) {
		for(var id in gameObjects) {
			if(gameObjects.hasOwnProperty(id)) {
				if(this.gameObjects[id] === undefined) { // then this a new game object that we need to create as a class instance
					var gameObject = gameObjects[id];
					this.gameObjects[id] = new this._gameObjectClasses[gameObject.gameObjectName]({
						game: this,
						ai: this.ai,
						client: this.client,
					});
				}
			}
		}
	},

	/// recursively merges delta changes to the game.
	_mergeDelta: function(state, delta) {
		var deltaLength = delta[this._serverConstants.DELTA_ARRAY_LENGTH];

		if(deltaLength !== undefined) { // then this part in the state is an array
			delete delta[this._serverConstants.DELTA_ARRAY_LENGTH]; // we don't want to copy this key/value over to the state, it was just to signify it is an array
			while(state.length > deltaLength) { // pop elements off the array until the array is short enough. an increase in array size will be added below as arrays resize when keys larger are set
				state.pop();
			}
		}

		for(var key in delta) {
			if(delta.hasOwnProperty(key)) {
				var d = delta[key];

				if(d === this._serverConstants.DELTA_REMOVED) {
					delete state[key];
				}
				else if(Serializer.isGameObjectReference(d)) {
					state[key] = this.getGameObject(d.id);
				}
				else if(Serializer.isObject(d) && Serializer.isObject(state[key])) {
					this._mergeDelta(state[key], d);
				}
				else {
					if(Serializer.isObject(d)) {
						var dIsArray = (d[this._serverConstants.DELTA_ARRAY_LENGTH] !== undefined);
						state[key] = this._mergeDelta(dIsArray ? [] : {}, d);
					}
					else {
						state[key] = d;
					}
				}
			}
		}

		return state;
	},
});

module.exports = BaseGame;
