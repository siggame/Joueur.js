// Unit: A unit group in the game. This may consist of a ship and any number of crew.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A unit group in the game. This may consist of a ship and any number of crew.
 * @extends GameObject
 */
class Unit extends GameObject {
  /**
   * initializes a Unit with basic logic as provided by the Creer code generator
   *
   * @memberof Unit
   * @private
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.acted = false;
    this.crew = 0;
    this.crewHealth = 0;
    this.gold = 0;
    this.moves = 0;
    this.owner = null;
    this.path = [];
    this.shipHealth = 0;
    this.targetPort = null;
    this.tile = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * Whether this Unit has performed its action this turn.
   *
   * @type {boolean}
   */
  get acted() {
    return client.gameManager.getMemberValue(this, 'acted');
  }

  set acted(value) {
    client.gameManager.setMemberValue(this, 'acted', value);
  }


  /**
   * How many crew are on this Tile. This number will always be <= crewHealth.
   *
   * @type {number}
   */
  get crew() {
    return client.gameManager.getMemberValue(this, 'crew');
  }

  set crew(value) {
    client.gameManager.setMemberValue(this, 'crew', value);
  }


  /**
   * How much total health the crew on this Tile have.
   *
   * @type {number}
   */
  get crewHealth() {
    return client.gameManager.getMemberValue(this, 'crewHealth');
  }

  set crewHealth(value) {
    client.gameManager.setMemberValue(this, 'crewHealth', value);
  }


  /**
   * How much gold this Unit is carrying.
   *
   * @type {number}
   */
  get gold() {
    return client.gameManager.getMemberValue(this, 'gold');
  }

  set gold(value) {
    client.gameManager.setMemberValue(this, 'gold', value);
  }


  /**
   * How many more times this Unit may move this turn.
   *
   * @type {number}
   */
  get moves() {
    return client.gameManager.getMemberValue(this, 'moves');
  }

  set moves(value) {
    client.gameManager.setMemberValue(this, 'moves', value);
  }


  /**
   * The Player that owns and can control this Unit, or null if the Unit is neutral.
   *
   * @type {Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * (Merchants only) The path this Unit will follow. The first element is the Tile this Unit will move to next.
   *
   * @type {Array.<Tile>}
   */
  get path() {
    return client.gameManager.getMemberValue(this, 'path');
  }

  set path(value) {
    client.gameManager.setMemberValue(this, 'path', value);
  }


  /**
   * If a ship is on this Tile, how much health it has remaining. 0 for no ship.
   *
   * @type {number}
   */
  get shipHealth() {
    return client.gameManager.getMemberValue(this, 'shipHealth');
  }

  set shipHealth(value) {
    client.gameManager.setMemberValue(this, 'shipHealth', value);
  }


  /**
   * (Merchants only) The Port this Unit is moving to.
   *
   * @type {Port}
   */
  get targetPort() {
    return client.gameManager.getMemberValue(this, 'targetPort');
  }

  set targetPort(value) {
    client.gameManager.setMemberValue(this, 'targetPort', value);
  }


  /**
   * The Tile this Unit is on.
   *
   * @type {Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }



  /**
   * Attacks either crew, a ship, or a port on a Tile in range.
   *
   * @param {Tile} tile - The Tile to attack.
   * @param {string} target - Whether to attack 'crew', 'ship', or 'port'. Crew deal damage to crew, and ships deal damage to ships and ports. Consumes any remaining moves.
   * @returns {boolean} - True if successfully attacked, false otherwise.
   */
  attack(tile, target) {
    return client.runOnServer(this, 'attack', {
      tile: tile,
      target: target,
    });
  }


  /**
   * Builds a Port on the given Tile.
   *
   * @param {Tile} tile - The Tile to build the Port on.
   * @returns {boolean} - True if successfully constructed a Port, false otherwise.
   */
  build(tile) {
    return client.runOnServer(this, 'build', {
      tile: tile,
    });
  }


  /**
   * Buries gold on this Unit's Tile.
   *
   * @param {number} amount - How much gold this Unit should bury.
   * @returns {boolean} - True if successfully buried, false otherwise.
   */
  bury(amount) {
    return client.runOnServer(this, 'bury', {
      amount: amount,
    });
  }


  /**
   * Puts gold into an adjacent Port. If that Port is the Player's main port, the gold is added to that Player. If that Port is owned by merchants, adds to the investment.
   *
   * @param {number} [amount] - The amount of gold to deposit. Amounts <= 0 will deposit all the gold on this Unit.
   * @returns {boolean} - True if successfully deposited, false otherwise.
   */
  deposit(amount) {
    if(arguments.length <= 0) {
      amount = 0;
    }

    return client.runOnServer(this, 'deposit', {
      amount: amount,
    });
  }


  /**
   * Digs up gold on this Unit's Tile.
   *
   * @param {number} [amount] - How much gold this Unit should take. Amounts <= 0 will dig up as much as possible.
   * @returns {boolean} - True if successfully dug up, false otherwise.
   */
  dig(amount) {
    if(arguments.length <= 0) {
      amount = 0;
    }

    return client.runOnServer(this, 'dig', {
      amount: amount,
    });
  }


  /**
   * Moves this Unit from its current Tile to an adjacent Tile.
   *
   * @param {Tile} tile - The Tile this Unit should move to.
   * @returns {boolean} - True if it moved, false otherwise.
   */
  move(tile) {
    return client.runOnServer(this, 'move', {
      tile: tile,
    });
  }


  /**
   * Regenerates this Unit's health. Must be used in range of a port.
   *
   * @param {Tile} tile - The Tile to move the crew to.
   * @param {number} [amount] - The number of crew to move onto that Tile. Amount <= 0 will move all the crew to that Tile.
   * @returns {boolean} - True if successfully split, false otherwise.
   */
  rest(tile, amount) {
    if(arguments.length <= 1) {
      amount = 1;
    }

    return client.runOnServer(this, 'rest', {
      tile: tile,
      amount: amount,
    });
  }


  /**
   * Moves a number of crew from this Unit to the given Tile. This will consume a move from those crew.
   *
   * @param {Tile} tile - The Tile to move the crew to.
   * @param {number} [amount] - The number of crew to move onto that Tile. Amount <= 0 will move all the crew to that Tile.
   * @param {number} [gold] - The amount of gold the crew should take with them. Gold < 0 will move all the gold to that Tile.
   * @returns {boolean} - True if successfully split, false otherwise.
   */
  split(tile, amount, gold) {
    if(arguments.length <= 1) {
      amount = 1;
    }

    if(arguments.length <= 2) {
      gold = 0;
    }

    return client.runOnServer(this, 'split', {
      tile: tile,
      amount: amount,
      gold: gold,
    });
  }


  /**
   * Takes gold from the Player. You can only withdraw from your main port.
   *
   * @param {number} [amount] - The amount of gold to withdraw. Amounts <= 0 will withdraw everything.
   * @returns {boolean} - True if successfully withdrawn, false otherwise.
   */
  withdraw(amount) {
    if(arguments.length <= 0) {
      amount = 0;
    }

    return client.runOnServer(this, 'withdraw', {
      amount: amount,
    });
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Unit;
