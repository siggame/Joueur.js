// The basics of any game, basically state management. Competitors do not modify
class BaseGame{
  constructor() {
    this._gameObjectClasses = {};
  }

  getGameObject(id) {
    return this.gameObjects[id];
  }
}

module.exports = BaseGame;
