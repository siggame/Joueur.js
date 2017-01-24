// Serializer: functions to serialize and unserialize json communications strings
const BaseGameObject = require('./baseGameObject');

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
    return Serializer.isObject(obj) && obj.hasOwnProperty(key) && !String(key).startsWith('_');
  },

  serialize: function(data) {
    if (!Serializer.isObject(data)) { // then no need to serialize it, it's already json serializable as a string, number, boolean, null, etc.
      return data;
    }

    if (data instanceof BaseGameObject) { // no need to serialize this whole thing, send an object reference
      return { id: data.id };
    }

    let serialized = data.isArray ? [] : {};
    for (let key in data) {
      if (Serializer.isSerializable(data, key)) {
        serialized[key] = Serializer.serialize(data[key]);
      }
    }
    return serialized;
  },

  deserialize: function(data, game) {
    if (!Serializer.isObject(data)) {
      return data;
    }

    if (Serializer.isGameObjectReference(data)) { // it's a tracked game object
      return game.getGameObject(data.id);
    }

    let result = data.isArray ? [] : {};

    for (let key in data) {
      let value = data[key];
      if (typeof(value) == 'object') {
        result[key] = Serializer.deserialize(value);
      }
      else {
        result[key] = value;
      }
    }

    return result;
  },
};

module.exports = Serializer;
