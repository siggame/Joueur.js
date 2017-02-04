const color = require('./ansiColorCoder');

// @class BaseAI: the base functions all AIs should do
class BaseAI {
  constructor(game) {
    this.game = game;
    this._settings = {};
  }

  getName() {
    return 'JavaScript Player'; // intended to be overridden by the AI class
  }

  start() {
    // intended to be overridden by the AI class
  }

  gameUpdated() {
    // intended to be overridden by the AI class
  }

  invalid(message) {
    console.warn(`${color.text('yellow')}Invalid: ${message}${color.reset()}`);
  }

  ended(won, reason) {
    // intended to be overridden by the AI class
  }

  setSettings(aiSettings) {
    if (aiSettings) {
      const settings = aiSettings.split('&');
      for (let i = 0; i < settings.length; i++) {
        const kv = settings[i].split('=');
        this._settings[kv[0]] = kv[1];
      }
    }
  }

  /**
   * Gets an AI setting passed to the program via the `--aiSettings` flag. If the flag was set it will be returned as a string value, undefined otherwise.
   *
   * @param {string} key - The key of the setting you wish to get the value for
   * @returns {string|undefined} A string representing the value set via command line, or undefined if the key was not set
   */
  getSetting(key) {
    return this._settings[key];
  }
}

module.exports = BaseAI;
