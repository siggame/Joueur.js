// @class BaseGame: the basics of any game, basically state management. Competitors do not modify
class BaseGame{
  constructor() {
    this._gameObjectClasses = {};
  }

    // @returns BaseGameObject with the given id
  getGameObject(id) {
    return this.gameObjects[id];
  }
}

module.exports = BaseGame;
