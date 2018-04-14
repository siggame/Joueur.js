// GameObject: An object in the game. The most basic class that all game classes should inherit from automatically.

// DO NOT MODIFY THIS FILE
// Never try to directly create an instance of this class, or modify its member variables.
// Instead, you should only be reading its variables and calling its functions.

const client = require(`${__basedir}/joueur/client`);
const BaseGameObject = require(`${__basedir}/joueur/baseGameObject`);

//<<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
// any additional requires you want can be required here safely between creer runs
//<<-- /Creer-Merge: requires -->>

/**
 * An object in the game. The most basic class that all game classes should inherit from automatically.
 * @extends BaseGameObject
 * @memberof Anarchy
 */
class GameObject extends BaseGameObject {
  /**
   * Initializes a GameObject with basic logic as provided by the Creer code generator.
   * 
   * Never use this directly. It is for internal Joueur use.
   */
  constructor(...args) {
    super(...args);


    // The following values should get overridden when delta states are merged, but we set them here as a reference for you to see what variables this class has.

    // default values for private member values
    this.gameObjectName = '';
    this.id = '';
    this.logs = [];

    //<<-- Creer-Merge: init -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // any additional init logic you want can go here
    //<<-- /Creer-Merge: init -->>
  }


  // Member variables

  /**
   * String representing the top level Class that this game object is an instance of. Used for reflection to create new instances on clients, but exposed for convenience should AIs want this data.
   *
   * @type {string}
   */
  get gameObjectName() {
    return client.gameManager.getMemberValue(this, 'gameObjectName');
  }

  set gameObjectName(value) {
    client.gameManager.setMemberValue(this, 'gameObjectName', value);
  }


  /**
   * A unique id for each instance of a GameObject or a sub class. Used for client and server communication. Should never change value after being set.
   *
   * @type {string}
   */
  get id() {
    return client.gameManager.getMemberValue(this, 'id');
  }

  set id(value) {
    client.gameManager.setMemberValue(this, 'id', value);
  }


  /**
   * Any strings logged will be stored here. Intended for debugging.
   *
   * @type {Array.<string>}
   */
  get logs() {
    return client.gameManager.getMemberValue(this, 'logs');
  }

  set logs(value) {
    client.gameManager.setMemberValue(this, 'logs', value);
  }



  /**
   * Adds a message to this GameObject's logs. Intended for your own debugging purposes, as strings stored here are saved in the gamelog.
   *
   * @param {string} message - A string to add to this GameObject's log. Intended for debugging.
   */
  log(message) {
    return client.runOnServer(this, 'log', {
      message: message,
    });
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add to this class can be preserved here
  //<<-- /Creer-Merge: functions -->>
}

module.exports = GameObject;
