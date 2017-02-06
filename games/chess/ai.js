// This is where you build your AI for the Chess game.

const BaseAI = require(`${__basedir}/joueur/baseAI`);

/**
 * This is the class to play the Chess game. This is where you should build your AI.
 *
 * @extends BaseAI
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
    return 'Chess JavaScript Player'; // REPLACE THIS WITH YOUR TEAM NAME!
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
   * This is called every time it is this AI.player's turn.
   *
   * @returns {boolean} - Represents if you want to end your turn. True means end your turn, False means to keep your turn going and re-call this function.
   */
  runTurn() {
    // We've provided sample code that:
    //  1) prints the board to the console
    //  2) prints the opponent's last move to the console
    //  3) prints how much time remaining this AI has to calculate moves
    //  4) makes a random (and probably invalid) move.

    // 1) print the board to the console
    this.printCurrentBoard();

    // 2) print the opponent's last move to the console
    if (this.game.moves.length > 0) {
      console.log(`Opponent's Last Move: '${this.game.moves[this.game.moves.length - 1].san}'`);
    }

    // 3) print how much time remaining this AI has to calculate moves
    console.log(`Time Remaining: ${this.player.timeRemaining} ns`);

    // 4) make a random (and probably invalid) move.
    const randomPiece = this.player.pieces[Math.floor(Math.random()*this.player.pieces.length)];
    const randomFile = String.fromCharCode('a'.charCodeAt(0) + Math.floor(Math.random()*8));
    const randomRank = Math.floor(Math.random()*8) + 1;
    randomPiece.move(randomFile, randomRank);

    return true; // to signify we are done with our turn.
  }

  /**
   * Prints the current board using pretty ASCII art
   * Note: you can delete this function if you wish
   */
  printCurrentBoard() {
    for (let rank = 9; rank >= -1; rank--) {
      let str = '';
      if (rank === 9 || rank === 0) { // then the top or bottom of the board
        str = '   +------------------------+';
      }
      else if (rank === -1) { // then show the ranks
        str = '   a  b  c  d  e  f  g  h';
      }
      else { // board
        str += ` ${rank} |`;
        // fill in all the ranks with pieces at the current rank
        for (let fileOffset = 0; fileOffset < 8; fileOffset++) {
          let file = String.fromCharCode('a'.charCodeAt(0) + fileOffset); // start at a, with with file offset increasing the char;
          let currentPiece = null;
          for (let piece of this.game.pieces) {
            if (piece.file === file && piece.rank === rank) { // then we found the piece at (file, rank)
              currentPiece = piece;
              break;
            }
          }

          let code = '.'; // default "no piece";
          if (currentPiece) {
            code = currentPiece.type[0];

            if (currentPiece.type === 'Knight') { // 'K' is for "King", we use 'N' for "Knights"
              code = 'N';
            }

            if (currentPiece.owner.id === '1') { // the second player (black) is lower case. Otherwise it's uppercase already
              code = code.toLowerCase();
            }
          }

          str += ` ${code} `;
        }

        str += '|';
      }

      console.log(str);
    }
  }
}

module.exports = AI;
