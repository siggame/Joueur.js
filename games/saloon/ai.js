// This is where you build your AI for the Saloon game.

var Class = require("classe");
var BaseAI = require(__basedir + "/joueur/baseAI");

/**
 * @class
 * @classdesc This is the class to play the Saloon game. This is where you should build your AI.
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
        return "Saloon JavaScript Player";
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
        // Put your game logic here for runTurn

        // This is "ShellAI", some basic code we've provided that does
        // everything in the game for demo purposed, but poorly so you
        // can get to optimizing or overwriting it ASAP
        //
        // ShellAI does a few things:
        // 1. Tries to spawn a new Cowboy
        // 2. Tries to move to a Piano
        // 3. Tries to play a Piano
        // 4. Tries to act

        console.log("Start of my turn: " + this.game.currentTurn);

        // for steps 2, 3, and 4 we will use this cowboy:
        var cowboy;
        for(var i = 0; i < this.player.cowboys.length; i++) {
            if(!this.player.cowboys[i].isDead) {
                cowboy = this.player.cowboys[i];
                break;
            }
        }



        //--- 1. Try to spawn a Cowboy --\\

        var callInJob = this.game.jobs.randomElement(); // grab a random job to try to call in
        var jobCount = 0;
        for(i = 0; i < this.player.cowboys.length; i++) {
            var myCowboy = this.player.cowboys[i];
            if(!myCowboy.isDead && myCowboy.job === callInJob) {
                jobCount++;
            }
        }

        // check to make sure we can call in this job
        if(this.player.youngGun.canCallIn && jobCount < this.game.maxCowboysPerJob) {
            console.log("1. Calling in: " + callInJob);
            this.player.youngGun.callIn(callInJob);
        }

        // make sure we found a cowboy to try to do things with
        if(cowboy) {
            //--- 2. Try to move to a Piano ---\\
            var piano; // find a piano
            for(i = 0; i < this.game.furnishings.length; i++) {
                var furnishing = this.game.furnishings[i];
                if(furnishing.isPiano && !furnishing.isDestroyed) {
                    piano = furnishing;
                    break;
                }
            }

            // if the cowboy can move and is not dead and there is a piano to move to
            if(cowboy.canMove && !cowboy.isDead) {
                console.log("Trying to do stuff with Cowboy #" + cowboy.id);

                // find a path from the Tile this cowboy is on to the tile the piano is on
                var path = this.findPath(cowboy.tile, piano.tile);

                // if there is a path, move to it
                //      length 0 means no path could be found to the tile
                //      length 1 means the piano is adjacent, and we can't move onto the same tile as the piano
                if(path.length > 1) {
                    console.log("2. Moving to Tile #" + path[0].id);
                    cowboy.move(path[0]);
                }
            }



            //--- 3. Try to play a piano ---\\\

            // make sure the cowboy is alive and is not busy
            if(!cowboy.isDead && cowboy.turnsBusy === 0) {
                // look at all the neighboring (adjacent) tiles, and if they have a piano, play it
                var neighbors = cowboy.tile.getNeighbors();
                for(i = 0; i < neighbors.length; i++) {
                    var neighbor = neighbors[i];

                    // if the neighboring tile has a piano
                    if(neighbor.furnishing && neighbor.furnishing.isPiano) {
                        // then play it
                        console.log("3. Playing Furnishing (piano) #" + neighbor.furnishing.id);
                        cowboy.play(neighbor.furnishing);
                        break;
                    }
                }
            }



            //--- 4. Try to act ---\\

            // make sure the cowboy is alive and is not busy
            if(!cowboy.isDead && cowboy.turnsBusy === 0) {
                // The Cowboy.act() function works differently based on job, and requires a neighboring tile to act on
                var randomNeighbor = cowboy.tile.getNeighbors().randomElement();

                switch(cowboy.job) {
                    case "Bartender":
                        // Bartenders throw Bottles in a direction, and the Bottle makes cowboys drunk which causes them to walk in random directions
                        // so throw the bottle on a random neighboring tile, and make drunks move in a random direction
                        var direction = cowboy.tile.directions.randomElement();
                        console.log("4. Bartender acting on Tile #" + randomNeighbor.id + " in direction " + direction);
                        cowboy.act(randomNeighbor, direction);
                        break;
                    case "Brawler":
                        // Brawlers cannot act, they instead automatically attack all neighboring tiles on the end of their owner's turn.
                        console.log("4. Brawlers cannot act.");
                        break;
                    case "Sharpshooter":
                        // Sharpshooters build focus by standing still, they can then act(tile) on a neighboring tile to fire in that direction
                        if(cowboy.focus > 0) {
                            console.log("4. Sharpshooter acting on Tile #" + randomNeighbor.id);
                            cowboy.act(randomNeighbor); // fire in a random direction
                        }
                        break;
                }
            }
        }

        console.log("Ending my turn.");

        // we are done, returning true tells the game server we are indeed done with our turn.
        return true;
    },

    /**
     * A very basic path finding algorithm (Breadth First Search) that when given a starting Tile, will return a valid path to the goal Tile.
     *
     * @memberof AI
     * @instance
     * @param {Tile} start - the starting Tile
     * @param {Tile} goal - the goal Tile
     * @returns {Array.<Tile>} An array of Tiles representing the path, the the first element being a valid adjacent Tile to the start, and the last element being the goal.
     */
    findPath: function(start, goal) {
        var queue = [ start ];
        var parents = {};
        var queued = {};

        while(queue.length > 0) {
            // pop the first tile off the front of the queue
            var tile = queue.shift();

            // look at all this tile's neighbors
            var neighbors = tile.getNeighbors();
            for(var i = 0; i < neighbors.length; i++) {
                var neighbor = neighbors[i];

                if(neighbor === goal) { // we found the path!
                    // let's reconstruct the path to this end goal, starting and the end and retracing our steps back to the start
                    var path = [ goal ];

                    // go backward to build the path till we find the starting tile
                    while(tile !== start) {
                        // push the tile in the path on the front (so the end of the path is the end of the array)
                        path.unshift(tile);
                        // and set the next tile to look at
                        tile = parents[tile.id];
                    }

                    return path;
                }

                // check if the neighbor we are looking at needs to be queued
                if(!queued[neighbor.id] && neighbor.isPathable()) {
                    // queue it, and record that it's been queued so we don't investigate it multiple times
                    queue.push(neighbor);
                    queued[neighbor.id] = true;

                    // record how we got to this tile, for path reconstruction
                    parents[neighbor.id] = tile;
                }
            }
        }

        return [];
    },
});

module.exports = AI;
