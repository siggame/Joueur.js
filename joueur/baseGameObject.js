/**
 * The base class that every game object within a game inherit from for Python
 * manipulation that would be redundant via Creer
 */
class BaseGameObject {
  /**
   * toString override for easier debugging
   * @returns {string} human readable string in the format `GameObjectName #id`
   */
  toString() {
    return `${this.gameObjectName} #${this.id}`;
  }
}

module.exports = BaseGameObject;
