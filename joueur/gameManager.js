const Serializer = require('./serializer');

// @class GameManager: basically state management. Competitors do not modify
class GameManager {
  constructor() {
    // map of game object ids to a mapping of their member values
    this._privateValues = new Map();

    // allow until the first delta merge ends
    this._allowGameObjectSets = true;
  }

  /// sets up the game
  setup(game) {
    this.game = game;
  }

  /// Sets constants sent from the game server needed to merge delta states
  setConstants(constants) {
    this._serverConstants = constants;
    this._DELTA_LIST_LENGTH = constants.DELTA_LIST_LENGTH;
    this._DELTA_REMOVED = constants.DELTA_REMOVED;
  }

  /// applies a delta state (change in state information) to this game
  applyDeltaState(delta) {
    this._allowGameObjectSets = true;
    if (delta.gameObjects !== undefined) {
      this._initGameObjects(delta.gameObjects);
    }

    this._mergeDelta(this.game, delta);
    this._allowGameObjectSets = false;
  }

  /// game objects can be references in the delta states for cycles, they will all point to the game objects here.
  _initGameObjects(gameObjects) {
    for (let id in gameObjects) {
      if (gameObjects.hasOwnProperty(id)) {
        if (this.game.gameObjects[id] === undefined) { // then this a new game object that we need to create as a class instance
          const gameObject = gameObjects[id];
          const gameObjectClass = this._gameObjectClasses[gameObject.gameObjectName];

          this.game.gameObjects[id] = new gameObjectClass();
        }
      }
    }
  }

  /// recursively merges delta changes to the game.
  _mergeDelta(state, delta) {
    let deltaLength = delta[this._DELTA_LIST_LENGTH];

    if (deltaLength !== undefined) { // then this part in the state is an array
      delete delta[this._DELTA_LIST_LENGTH]; // we don't want to copy this key/value over to the state, it was just to signify the delta is an array
      while (state.length > deltaLength) { // pop elements off the array until the array is short enough. an increase in array size will be added below as arrays resize when keys larger are set
        state.pop();
      }
    }

    for (let key in delta) {
      if (delta.hasOwnProperty(key)) {
        let d = delta[key];
        let stateKey = key;
        if (deltaLength !== undefined) {
          stateKey = parseInt(key);
        }

        if (d === this._DELTA_REMOVED) {
          delete state[stateKey];
        }
        else if (Serializer.isGameObjectReference(d)) {
          state[stateKey] = this.game.getGameObject(d.id);
        }
        else if (Serializer.isObject(d) && Serializer.isObject(state[stateKey])) {
          this._mergeDelta(state[stateKey], d);
        }
        else {
          if (Serializer.isObject(d)) {
            let dIsArray = (d[this._DELTA_LIST_LENGTH] !== undefined);
            state[stateKey] = this._mergeDelta(dIsArray ? [] : {}, d);
          }
          else {
            state[stateKey] = d;
          }
        }
      }
    }

    return state;
  }

  ///*
  getMemberValue(gameObject, memberName) {
    const privateValues = this._privateValues.get(gameObject);

    return privateValues[memberName];
  }

  setMemberValue(gameObject, memberName, value) {
    // check to make sure the AI is not trying to set a member value
    // (this should only be called during _mergeDelta, in which case no error will be thrown)
    if (!this._allowGameObjectSets) {
      throw new Error(`Setting '${memberName}' not allowed! Member variables are read only to AIs.`);
    }

    let privateValues = this._privateValues.get(gameObject);

    if (!privateValues) {
      privateValues = {};
      this._privateValues.set(gameObject, privateValues);
    }

    privateValues[memberName] = value;
  }
  //*/
}

module.exports = GameManager;
