// DO NOT MODIFY THIS FILE

/**
 * Two player grid based game where each player tries to burn down the other player's buildings. Let it burn.
 * @namespace Anarchy
 */

// This manages the game for you

const GameManager = require(`${__basedir}/joueur/gameManager`);

class AnarchyGameManager extends GameManager {}

AnarchyGameManager.gameVersion = '2bc66f9a5d7babd553079e149c7466feb6f553935b608ff722872e195fbadab8';

AnarchyGameManager.prototype._gameObjectClasses = {
  Building: require('./building'),
  FireDepartment: require('./fireDepartment'),
  Forecast: require('./forecast'),
  GameObject: require('./gameObject'),
  Player: require('./player'),
  PoliceDepartment: require('./policeDepartment'),
  Warehouse: require('./warehouse'),
  WeatherStation: require('./weatherStation'),
};

module.exports = AnarchyGameManager;
