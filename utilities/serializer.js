// Serializer: functions to serialize and unserialize json communications strings
var Class = require("./class");
var BaseGameObject = require("../baseGameObject");

Serializer = {
	isEmpty: function(obj){
		return (Object.getOwnPropertyNames(obj).length === 0);
	},

	isEmptyExceptFor: function(obj, key) {
		return (Serializer.isObject(obj) && Object.getOwnPropertyNames(obj).length === 1 && obj[key] !== undefined);
	},

	isGameObjectReference: function(obj) {
		return Serializer.isEmptyExceptFor(obj, 'id');
	},

	isObject: function(obj) {
		return (typeof(obj) === 'object' && obj !== null);
	},

	isSerializable: function(obj, key) {
		return Serializer.isObject(obj) && obj.hasOwnProperty(key) && !String(key).startsWith("_") && (obj._serializableKeys === undefined || obj._serializableKeys[key]);
	},

	serialize: function(data) {
		var serialized = {};

		for(var key in data) {
			if(data.hasOwnProperty(key)) {
				var value = data[key];

				if(Class.isInstance(value, BaseGameObject)) { // then make a reference to it via ID
					serialized[key] = {id: value.id};
				}
				else if(typeof(value) == "object") {
					serialized[key] = Serializer.serialize(value);
				}
				else {
					serialized[key] = value;
				}
			}
		}

		return serialized;
	},
};

module.exports = Serializer;
