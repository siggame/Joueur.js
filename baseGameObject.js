var Class = require("./utilities/class");

// @class BaseGameObject: the base class that every game object within a game inherit from for Python manipulation that would be redundant via Creer
var BaseGameObject = Class({
	init: function(data) {
		this._game = data.game;
		this._ai = data.ai;
		this._client = data.client;
	},
});

module.exports = BaseGameObject;
