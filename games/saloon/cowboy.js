// Cowboy: A person on the map that can move around and interact within the saloon.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const GameObject = require('./gameObject');

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * A person on the map that can move around and interact within the saloon.
 * @extends Saloon.GameObject
 * @memberof Saloon
 */
class Cowboy extends GameObject {
  /**
   * Initializes a Cowboy with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.canMove = false;
    this.drunkDirection = '';
    this.focus = 0;
    this.health = 0;
    this.isDead = false;
    this.isDrunk = false;
    this.job = '';
    this.owner = null;
    this.tile = null;
    this.tolerance = 0;
    this.turnsBusy = 0;

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * If the Cowboy can be moved this turn via its owner.
   *
   * @type {boolean}
   */
  get canMove() {
    return client.gameManager.getMemberValue(this, 'canMove');
  }

  set canMove(value) {
    client.gameManager.setMemberValue(this, 'canMove', value);
  }


  /**
   * The direction this Cowboy is moving while drunk. Will be 'North', 'East', 'South', or 'West' when drunk; or '' (empty string) when not drunk.
   *
   * @type {string}
   */
  get drunkDirection() {
    return client.gameManager.getMemberValue(this, 'drunkDirection');
  }

  set drunkDirection(value) {
    client.gameManager.setMemberValue(this, 'drunkDirection', value);
  }


  /**
   * How much focus this Cowboy has. Different Jobs do different things with their Cowboy's focus.
   *
   * @type {number}
   */
  get focus() {
    return client.gameManager.getMemberValue(this, 'focus');
  }

  set focus(value) {
    client.gameManager.setMemberValue(this, 'focus', value);
  }


  /**
   * How much health this Cowboy currently has.
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
   * If this Cowboy is dead and has been removed from the game.
   *
   * @type {boolean}
   */
  get isDead() {
    return client.gameManager.getMemberValue(this, 'isDead');
  }

  set isDead(value) {
    client.gameManager.setMemberValue(this, 'isDead', value);
  }


  /**
   * If this Cowboy is drunk, and will automatically walk.
   *
   * @type {boolean}
   */
  get isDrunk() {
    return client.gameManager.getMemberValue(this, 'isDrunk');
  }

  set isDrunk(value) {
    client.gameManager.setMemberValue(this, 'isDrunk', value);
  }


  /**
   * The job that this Cowboy does, and dictates how they fight and interact within the Saloon.
   *
   * @type {string}
   */
  get job() {
    return client.gameManager.getMemberValue(this, 'job');
  }

  set job(value) {
    client.gameManager.setMemberValue(this, 'job', value);
  }


  /**
   * The Player that owns and can control this Cowboy.
   *
   * @type {Saloon.Player}
   */
  get owner() {
    return client.gameManager.getMemberValue(this, 'owner');
  }

  set owner(value) {
    client.gameManager.setMemberValue(this, 'owner', value);
  }


  /**
   * The Tile that this Cowboy is located on.
   *
   * @type {Saloon.Tile}
   */
  get tile() {
    return client.gameManager.getMemberValue(this, 'tile');
  }

  set tile(value) {
    client.gameManager.setMemberValue(this, 'tile', value);
  }


  /**
   * How many times this unit has been drunk before taking their siesta and resetting this to 0.
   *
   * @type {number}
   */
  get tolerance() {
    return client.gameManager.getMemberValue(this, 'tolerance');
  }

  set tolerance(value) {
    client.gameManager.setMemberValue(this, 'tolerance', value);
  }


  /**
   * How many turns this unit has remaining before it is no longer busy and can `act()` or `play()` again.
   *
   * @type {number}
   */
  get turnsBusy() {
    return client.gameManager.getMemberValue(this, 'turnsBusy');
  }

  set turnsBusy(value) {
    client.gameManager.setMemberValue(this, 'turnsBusy', value);
  }



  /**
   * Does their job's action on a Tile.
   *
   * @param {Saloon.Tile} tile - The Tile you want this Cowboy to act on.
   * @param {string} [drunkDirection] - The direction the bottle will cause drunk cowboys to be in, can be 'North', 'East', 'South', or 'West'.
   * @returns {boolean} - True if the act worked, false otherwise.
   */
  act(tile, drunkDirection) {
    if(arguments.length <= 1) {
      drunkDirection = '';
    }

    return client.runOnServer(this, 'act', {
      tile: tile,
      drunkDirection: drunkDirection,
    });
  }


  /**
   * Moves this Cowboy from its current Tile to an adjacent Tile.
   *
   * @param {Saloon.Tile} tile - The Tile you want to move this Cowboy to.
   * @returns {boolean} - True if the move worked, false otherwise.
   */
  move(tile) {
    return client.runOnServer(this, 'move', {
      tile: tile,
    });
  }


  /**
   * Sits down and plays a piano.
   *
   * @param {Saloon.Furnishing} piano - The Furnishing that is a piano you want to play.
   * @returns {boolean} - True if the play worked, false otherwise.
   */
  play(piano) {
    return client.runOnServer(this, 'play', {
      piano: piano,
    });
  }


  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = Cowboy;
