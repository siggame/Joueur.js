// Serializer: functions to serialize and unserialize json communications strings

const BaseGameObject = require('./baseGameObject');

class Serializer {
  static isEmpty(obj) {
    return (Object.getOwnPropertyNames(obj).length === 0);
  }

  static isEmptyExceptFor(obj, key) {
    return (this.isObject(obj) && Object.getOwnPropertyNames(obj).length === 1 && obj[key] !== undefined);
  }

  static isGameObjectReference(obj) {
    return this.isEmptyExceptFor(obj, 'id');
  }

  static isObject(obj) {
    return (typeof(obj) === 'object' && obj !== null);
  }

  static isSerializable(obj, key) {
    return this.isObject(obj) && obj.hasOwnProperty(key) && !String(key).startsWith('_');
  }

  static serialize(data) {
    if (!this.isObject(data)) {
      // then no need to serialize it
      // as it's already json serializable primitive such as a string, number, boolean, null, etc.
      return data;
    }

    if (data instanceof BaseGameObject) {
      // no need to serialize this whole thing, send an object reference
      return { id: data.id };
    }

    let serialized = data.isArray ? [] : {};
    for (let key in data) {
      if (this.isSerializable(data, key)) {
        serialized[key] = this.serialize(data[key]);
      }
    }
    return serialized;
  }

  static deserialize(data, game) {
    if (!this.isObject(data)) {
      return data;
    }

    if (this.isGameObjectReference(data)) {
      // it's a tracked game object
      return game.getGameObject(data.id);
    }

    let result = data.isArray ? [] : {};

    for (let key in data) {
      let value = data[key];
      if (typeof(value) == 'object') {
        result[key] = this.deserialize(value);
      }
      else {
        result[key] = value;
      }
    }

    return result;
  }
}

module.exports = Serializer;
