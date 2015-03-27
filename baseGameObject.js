var Class = require("./utilities/class");

var BaseGameObject = Class({
	init: function(data) {
		this._game = data.game;
		this._ai = data.ai;
		this._client = data.client;
	},
});

module.exports = BaseGameObject;
