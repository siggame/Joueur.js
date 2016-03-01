// This is where you build your AI for the Chess game.

var Class = require(__basedir + "/joueur/class");
var BaseAI = require(__basedir + "/joueur/baseAI");

/**
 * @class
 * @classdesc This is the class to play the Chess game. This is where you should build your AI.
 */
var AI = Class(BaseAI, {
    /**
     * The reference to the Game instance this AI is playing.
     *
     * @member {Game} game
     * @memberof AI
     * @instance
     */

    /**
     * The reference to the Player this AI controls in the Game.
     *
     * @member {Player} player
     * @memberof AI
     * @instance
     */

    /**
     * This is the name you send to the server so your AI will control the player named this string.
     *
     * @memberof AI
     * @instance
     * @returns {string} - The name of your Player.
     */
    getName: function() {
        return "Chess JavaScript Player";
    },

    /**
     * This is called once the game starts and your AI knows its playerID and game. You can initialize your AI here.
     *
     * @memberof AI
     * @instance
     */
    start: function() {
        // pass
    },

    /**
     * This is called every time the game's state updates, so if you are tracking anything you can update it here.
     *
     * @memberof AI
     * @instance
     */
    gameUpdated: function() {
        // pass
    },

    /**
     * This is called when the game ends, you can clean up your data and dump files here if need be.
     *
     * @memberof AI
     * @instance
     * @param {boolean} won - True means you won, false means you lost.
     * @param {string} reason - The human readable string explaining why you won or lost.
     */
    ended: function(won, reason) {
        // pass
    },



    /**
     * This is called every time it is this AI.player's turn.
     *
     * @memberof AI
     * @instance
     * @returns {boolean} - Represents if you want to end your turn. True means end your turn, False means to keep your turn going and re-call this function.
     */
    runTurn: function() {
        // Here is where you'll want to code your AI.

        // We've provided sample code that:
        //    1) prints the board to the console
        //    2) prints the opponent's last move to the console
        //    3) prints how much time remaining this AI has to calculate moves
        //    4) makes a random (and probably invalid) move.

        // 1) print the board to the console
        for(var file = 9; file >= -1; file--) {
            var str = "";
            if(file === 9 || file === 0) { // then the top or bottom of the board
                str = "   +------------------------+"; 
            }
            else if(file === -1) { // then show the ranks
                str = "     a  b  c  d  e  f  g  h";
            }
            else { // board
                str += " " + file + " |";
                // fill in all the ranks with pieces at the current rank
                for(var rankOffset = 0; rankOffset < 8; rankOffset++) {
                    var rank = String.fromCharCode("a".charCodeAt(0) + rankOffset); // start at a, with with rank offset increasing the char;
                    var currentPiece = null;
                    for(var i = 0; i < this.game.pieces.length; i++) {
                        var piece = this.game.pieces[i];
                        if(piece.rank === rank && piece.file === file) { // then we found the piece at (rank, file)
                            currentPiece = piece;
                            break;
                        }
                    }

                    var code = "."; // default "no piece";
                    if(currentPiece) {
                        code = currentPiece.type[0];

                        if(currentPiece.type === "Knight") { // 'K' is for "King", we use 'N' for "Knights"
                            code = "N";
                        }

                        if(currentPiece.owner.id === "1") { // the second player (black) is lower case. Otherwise it's upppercase already
                            code = code.toLowerCase();
                        }
                    }

                    str += " " + code + " ";
                }

                str += "|";
            }

            console.log(str);
        }

        // 2) print the opponent's last move to the console
        if(this.game.moves.length > 0) {
            console.log("Opponent's Last Move: '" + this.game.moves[this.game.moves.length - 1].san + "'");
        }

        // 3) print how much time remaining this AI has to calculate moves
        console.log("Time Remaining: " + this.player.timeRemaining + " ns");

        // 4) make a random (and probably invalid) move.
        var randomPiece = this.player.pieces[Math.floor(Math.random()*this.player.pieces.length)];
        var randomFile = String.fromCharCode("a".charCodeAt(0) + Math.floor(Math.random()*8));
        var randomRank = Math.floor(Math.random()*8) + 1;
        randomPiece.move(randomFile, randomRank);

        return true; // to signify we are done with our turn.
    },
});

module.exports = AI;
