// This AI uses the Chess.js library to show all valid moves, then makes one at random.
// Use it to test your Chess AIs, as this one can never fail to play correctly.

const BaseAI = require(`${__basedir}/joueur/baseAI`);
const Chess = require('chess.js').Chess;

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
    return 'Chess Valid Tester';
  }

  /**
   * This is called once the game starts and your AI knows its playerID and game. You can initialize your AI here.
   */
  start() {
    this.chess = new Chess();
    this.printedEnemyMoves = false;
  }

  /**
   * This is called every time the game's state updates, so if you are tracking anything you can update it here.
   */
  gameUpdated() {
    if (!this.game.fen || !this.player.color || this.printedEnemyMoves) {
      return;
    }

    this.chess.load(this.game.fen);

    if (this.chess.turn() !== this.player.color[0]) {
      this.printChessInfo(`enemy's`);
      this.printedEnemyMoves = true;
    }
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
    this.chess.load(this.game.fen);

    this.printChessInfo('my');
    this.printedEnemyMoves = false; // reset for next

    const moves = this.chess.moves();
    const randomMove = moves[Math.floor(Math.random() * moves.length)];

    return randomMove;
  }

  printChessInfo(owner) {
    console.log(`>> Start of ${owner} turn: ${Math.floor(this.game.history.length / 2)}`);
    console.log(this.chess.ascii());

    const moves = this.chess.moves();

    console.log(`   ${owner} valid moves in SAN:`);
    for (const move of moves) {
      console.log(`   - ${move}`);
    }
    console.log("----------\n");
  }
}

module.exports = AI;
