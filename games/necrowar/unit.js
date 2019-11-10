// Unit: A unit in the game. May be a worker, zombie, ghoul, hound, abomination, wraith or horseman.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A unit in the game. May be a worker, zombie, ghoul, hound, abomination, wraith or horseman.
 * @extends Necrowar.GameObject
 * @memberof Necrowar
 */
class Unit extends GameObject {
  /**
   * Initializes a Unit with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.acted = false;
    this.health = 0;
    this.job = null;
    this.moves = 0;
    this.owner = null;
    this.tile = null;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * Whether or not this Unit has performed its action this turn (attack or build).
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
   * The remaining health of a unit.
   *
   * @type {number}
   */
  get health() {
    return client.gameManager.getMemberValue(this, 'health');
  }

  set health(value) {
    client.gameManager.setMemberValue(this, 'health', value);
  }


  /**
   * The type of unit this is.
   *
   * @type {Necrowar.UnitJob}
   */
  get job() {
    return client.gameManager.getMemberValue(this, 'job');
  }

  set job(value) {
    client.gameManager.setMemberValue(this, 'job', value);
  }


  /**
   * The number of moves this unit has left this turn.
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
   * The Player that owns and can control this Unit.
   *
   * @type {Necrowar.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The Tile this Unit is on.
   *
   * @type {Necrowar.Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }



  /**
   * Attacks an enemy tower on an adjacent tile.
   *
   * @param {Necrowar.Tile} tile - The Tile to attack.
   * @returns {boolean} - True if successfully attacked, false otherwise.
   */
  attack(tile) {
    return client.runOnServer(this, 'attack', {
      tile: tile,
    });
  }


  /**
   * Unit, if it is a worker, builds a tower on the tile it is on, only workers can do this.
   *
   * @param {string} title - The tower type to build, as a string.
   * @returns {boolean} - True if successfully built, false otherwise.
   */
  build(title) {
    return client.runOnServer(this, 'build', {
      title: title,
    });
  }


  /**
   * Stops adjacent to a river tile and begins fishing for mana.
   *
   * @param {Necrowar.Tile} tile - The tile the unit will stand on as it fishes.
   * @returns {boolean} - True if successfully began fishing for mana, false otherwise.
   */
  fish(tile) {
    return client.runOnServer(this, 'fish', {
      tile: tile,
    });
  }


  /**
   * Enters a mine and is put to work gathering resources.
   *
   * @param {Necrowar.Tile} tile - The tile the mine is located on.
   * @returns {boolean} - True if successfully entered mine and began mining, false otherwise.
   */
  mine(tile) {
    return client.runOnServer(this, 'mine', {
      tile: tile,
    });
  }


  /**
   * Moves this Unit from its current Tile to an adjacent Tile.
   *
   * @param {Necrowar.Tile} tile - The Tile this Unit should move to.
   * @returns {boolean} - True if it moved, false otherwise.
   */
  move(tile) {
    return client.runOnServer(this, 'move', {
      tile: tile,
    });
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Unit;
