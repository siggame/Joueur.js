// Checker: A checker on the game board.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A checker on the game board.
 * @extends Checkers.GameObject
 * @memberof Checkers
 */
class Checker extends GameObject {
  /**
   * Initializes a Checker with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.kinged = false;
    this.owner = null;
    this.x = 0;
    this.y = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * If the checker has been kinged and can move backwards.
   *
   * @type {boolean}
   */
  get kinged() {
    return client.gameManager.getMemberValue(this, 'kinged');
  }

  set kinged(value) {
    client.gameManager.setMemberValue(this, 'kinged', value);
  }


  /**
   * The player that controls this Checker.
   *
   * @type {Checkers.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The x coordinate of the checker.
   *
   * @type {number}
   */
  get x() {
    return client.gameManager.getMemberValue(this, 'x');
  }

  set x(value) {
    client.gameManager.setMemberValue(this, 'x', value);
  }


  /**
   * The y coordinate of the checker.
   *
   * @type {number}
   */
  get y() {
    return client.gameManager.getMemberValue(this, 'y');
  }

  set y(value) {
    client.gameManager.setMemberValue(this, 'y', value);
  }



  /**
   * Returns if the checker is owned by your player or not.
   *
   * @returns {boolean} - True if it is yours, false if it is not yours.
   */
  isMine() {
    return client.runOnServer(this, 'isMine', {
    });
  }


  /**
   * Moves the checker from its current location to the given (x, y).
   *
   * @param {number} x - The x coordinate to move to.
   * @param {number} y - The y coordinate to move to.
   * @returns {Checkers.Checker} - Returns the same checker that moved if the move was successful. Otherwise null.
   */
  move(x, y) {
    return client.runOnServer(this, 'move', {
      x: x,
      y: y,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Checker;
