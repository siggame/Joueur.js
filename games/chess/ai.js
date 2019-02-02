// This is where you build your AI for the Chess game.

const BaseAI = require(`${__basedir}/joueur/baseAI`);

/**
 * Pretty formats an FEN string to a human readable string.
 *
 * For more information on FEN (Forsyth-Edwards Notation) strings see:
 * https://wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation
 */
function prettyFEN(fen, us) {
  // split the FEN string up to help parse it
  const split = fen.split(' ');
  const first = split[0]; // the first part is always the board locations

  const sideToMove = split[1]; // always the second part for side to move
  const usOrThem = sideToMove === us[0] ? 'us'  : 'them';

  const fullmove = split[5]; // always the sixth part for the full move

  const lines = first.split('/');
  const strings = [`Move: ${fullmove}\nSide to move: ${sideToMove} (${usOrThem})\n   +-----------------+`];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    strings.push(`\n ${8 - i} |`);
    for (const char of line) {
      const charAsNumber = Number(char);
      if (isNaN(charAsNumber)) {
        strings.push(` ${char}`);
      }
      else { // it is a number, so that many blank lines
        for (let j = 0; j < charAsNumber; j++) {
          strings.push(' .');
        }
      }
    }
    strings.push(' |');
  }
  strings.push('\n   +-----------------+\n     a b c d e f g h\n');

  return strings.join('');
}

/**
 * This is the class to play the Chess game. This is where you should build your AI.
 * @memberof Chess
 */
class AI extends BaseAI {
  /**
   * The reference to the Game instance this AI is playing.
   *
   * @member {Game} game
   */

  /**
   * The reference to the Player this AI controls in the Game.
   *
   * @member {Player} player
   */

  /**
   * This is the name you send to the server so your AI will control the player named this string.
   *
   * @returns {string} - The name of your Player.
   */
  getName() {
    // TODO: Rename your player here!
    return 'Chess JavaScript Player';
  }

  /**
   * This is called once the game starts and your AI knows its playerID and game. You can initialize your AI here.
   */
  start() {
    // pass
  }

  /**
   * This is called every time the game's state updates, so if you are tracking anything you can update it here.
   */
  gameUpdated() {
    // pass
  }

  /**
   * This is called when the game ends, you can clean up your data and dump files here if need be.
   *
   * @param {boolean} won - True means you won, false means you lost.
   * @param {string} reason - The human readable string explaining why you won or lost.
   */
  ended(won, reason) {
    // pass
  }


  /**
   * This is called every time it is this AI.player's turn to make a move.
   *
   * @returns {string} - A string in Standard Algebraic Notation (SAN) for the move you want to make. If the move is invalid or not properly formatted you will lose the game.
   */
  makeMove() {
    console.log(prettyFEN(this.game.fen, this.player.color));

    // This will only work if we are black move the pawn at b2 to b3.
    // Otherwise we will lose.
    // Your job is to code SOMETHING to parse the FEN string in some way to determine a valid move, in SAN format.
    return 'b3';
  }
}

module.exports = AI;
