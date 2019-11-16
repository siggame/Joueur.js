// Game: Two player grid based game where each player tries to burn down the other player's buildings. Let it burn.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGame = require(`${__basedir}/joueur/baseGame`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * Two player grid based game where each player tries to burn down the other player's buildings. Let it burn.
 * @extends BaseGame
 * @memberof Anarchy
 */
class Game extends BaseGame {
  /**
   * Initializes a Game with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    /**
     * The name of the game.
     * @type {string}
     */
    this.name = 'Anarchy';

    // default values for private member values
    this.baseBribesPerTurn = 0;
    this.buildings = [];
    this.currentForecast = null;
    this.currentPlayer = null;
    this.currentTurn = 0;
    this.forecasts = [];
    this.gameObjects = {};
    this.mapHeight = 0;
    this.mapWidth = 0;
    this.maxFire = 0;
    this.maxForecastIntensity = 0;
    this.maxTurns = 0;
    this.nextForecast = null;
    this.players = [];
    this.session = '';
    this.timeAddedPerTurn = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * How many bribes players get at the beginning of their turn, not counting their burned down Buildings.
   *
   * @type {number}
   */
  get baseBribesPerTurn() {
    return client.gameManager.getMemberValue(this, 'baseBribesPerTurn');
  }

  set baseBribesPerTurn(value) {
    client.gameManager.setMemberValue(this, 'baseBribesPerTurn', value);
  }


  /**
   * All the buildings in the game.
   *
   * @type {Array.<Anarchy.Building>}
   */
  get buildings() {
    return client.gameManager.getMemberValue(this, 'buildings');
  }

  set buildings(value) {
    client.gameManager.setMemberValue(this, 'buildings', value);
  }


  /**
   * The current Forecast, which will be applied at the end of the turn.
   *
   * @type {Anarchy.Forecast}
   */
  get currentForecast() {
    return client.gameManager.getMemberValue(this, 'currentForecast');
  }

  set currentForecast(value) {
    client.gameManager.setMemberValue(this, 'currentForecast', value);
  }


  /**
   * The player whose turn it is currently. That player can send commands. Other players cannot.
   *
   * @type {Anarchy.Player}
   */
  get currentPlayer() {
    return client.gameManager.getMemberValue(this, 'currentPlayer');
  }

  set currentPlayer(value) {
    client.gameManager.setMemberValue(this, 'currentPlayer', value);
  }


  /**
   * The current turn number, starting at 0 for the first player's turn.
   *
   * @type {number}
   */
  get currentTurn() {
    return client.gameManager.getMemberValue(this, 'currentTurn');
  }

  set currentTurn(value) {
    client.gameManager.setMemberValue(this, 'currentTurn', value);
  }


  /**
   * All the forecasts in the game, indexed by turn number.
   *
   * @type {Array.<Anarchy.Forecast>}
   */
  get forecasts() {
    return client.gameManager.getMemberValue(this, 'forecasts');
  }

  set forecasts(value) {
    client.gameManager.setMemberValue(this, 'forecasts', value);
  }


  /**
   * A mapping of every game object's ID to the actual game object. Primarily used by the server and client to easily refer to the game objects via ID.
   *
   * @type {Object.<string, Anarchy.GameObject>}
   */
  get gameObjects() {
    return client.gameManager.getMemberValue(this, 'gameObjects');
  }

  set gameObjects(value) {
    client.gameManager.setMemberValue(this, 'gameObjects', value);
  }


  /**
   * The width of the entire map along the vertical (y) axis.
   *
   * @type {number}
   */
  get mapHeight() {
    return client.gameManager.getMemberValue(this, 'mapHeight');
  }

  set mapHeight(value) {
    client.gameManager.setMemberValue(this, 'mapHeight', value);
  }


  /**
   * The width of the entire map along the horizontal (x) axis.
   *
   * @type {number}
   */
  get mapWidth() {
    return client.gameManager.getMemberValue(this, 'mapWidth');
  }

  set mapWidth(value) {
    client.gameManager.setMemberValue(this, 'mapWidth', value);
  }


  /**
   * The maximum amount of fire value for any Building.
   *
   * @type {number}
   */
  get maxFire() {
    return client.gameManager.getMemberValue(this, 'maxFire');
  }

  set maxFire(value) {
    client.gameManager.setMemberValue(this, 'maxFire', value);
  }


  /**
   * The maximum amount of intensity value for any Forecast.
   *
   * @type {number}
   */
  get maxForecastIntensity() {
    return client.gameManager.getMemberValue(this, 'maxForecastIntensity');
  }

  set maxForecastIntensity(value) {
    client.gameManager.setMemberValue(this, 'maxForecastIntensity', value);
  }


  /**
   * The maximum number of turns before the game will automatically end.
   *
   * @type {number}
   */
  get maxTurns() {
    return client.gameManager.getMemberValue(this, 'maxTurns');
  }

  set maxTurns(value) {
    client.gameManager.setMemberValue(this, 'maxTurns', value);
  }


  /**
   * The next Forecast, which will be applied at the end of your opponent's turn. This is also the Forecast WeatherStations can control this turn.
   *
   * @type {Anarchy.Forecast}
   */
  get nextForecast() {
    return client.gameManager.getMemberValue(this, 'nextForecast');
  }

  set nextForecast(value) {
    client.gameManager.setMemberValue(this, 'nextForecast', value);
  }


  /**
   * List of all the players in the game.
   *
   * @type {Array.<Anarchy.Player>}
   */
  get players() {
    return client.gameManager.getMemberValue(this, 'players');
  }

  set players(value) {
    client.gameManager.setMemberValue(this, 'players', value);
  }


  /**
   * A unique identifier for the game instance that is being played.
   *
   * @type {string}
   */
  get session() {
    return client.gameManager.getMemberValue(this, 'session');
  }

  set session(value) {
    client.gameManager.setMemberValue(this, 'session', value);
  }


  /**
   * The amount of time (in nano-seconds) added after each player performs a turn.
   *
   * @type {number}
   */
  get timeAddedPerTurn() {
    return client.gameManager.getMemberValue(this, 'timeAddedPerTurn');
  }

  set timeAddedPerTurn(value) {
    client.gameManager.setMemberValue(this, 'timeAddedPerTurn', value);
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Game;
