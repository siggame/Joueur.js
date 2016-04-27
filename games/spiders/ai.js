// This is where you build your AI for the Spiders game.

var Class = require(__basedir + "/joueur/class");
var BaseAI = require(__basedir + "/joueur/baseAI");

/**
 * @class
 * @classdesc This is the class to play the Spiders game. This is where you should build your AI.
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
        return "Spiders JavaScript Player";
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
        // This is ShellAI, it is very simple, and demonstrates how to use all the game objects in Spiders

        // get a random spider to try to do things with
        var spider = this.player.spiders.randomElement();

        if(spider.gameObjectName === "BroodMother") {
            var broodMother = spider;

            var choice = Math.random();

            if(choice <= 0.10) { // try to consume a Spiderling 10% of the time
                if(broodMother.nest.spiders > 1) { // then there is another spider on this Nest, so let's try to consume one
                    // get a random other spider to see if it's not us
                    var otherSpider = broodMother.nest.spiders.randomElement();
                    if(otherSpider !== broodMother) { // then we can comsume this poor soul
                        console.log("Broodmother #" + broodMother.id + " consuming " + otherSpider.gameObjectName + " #" + otherSpider.id);
                        broodMother.consume(otherSpider)
                    }
                }
            }
            else { // try to spawn a Spiderling
                if(broodMother.eggs > 0) { // then we can spawn a Spiderling
                    // get a random spiderling type to spawn a new Spiderling of that type
                    var randomSpiderlingType = ["Cutter", "Weaver", "Spitter"].randomElement();
                    console.log("Broodmother #" + broodMother.id + " spawning " + randomSpiderlingType);
                    broodMother.spawn(randomSpiderlingType);
                }
            }
        }
        else { // it is a Spiderling
            var spiderling = spider;

            if(spiderling.busy === "") { // then it is NOT busy
                var choice = parseInt(Math.random()*3); // do a random choice of 3 options

                if(choice === 0) { // then try to move somewhere
                    if(spiderling.nest.webs.length > 0) {
                        var web = spiderling.nest.webs.randomElement();
                        console.log("Spiderling " + spiderling.gameObjectName + " #" + spiderling.id + " moving on Web #" + web.id);
                        spiderling.move(web);
                    }
                }
                else if(choice === 1) { // then try to attack something
                    if(spiderling.nest.spiders.length > 1) { // then there is someone besides us on the nest, let's try to attack!
                        var otherSpider = spiderling.nest.spiders.randomElement();
                        if(otherSpider.owner !== spiderling.owner) { // then attack the enemy!
                            spiderling.attack(otherSpider);
                        }
                    }
                }
                else { // the only thing left is to do something unique based on what type of Spiderling we are
                    // if that spider is a Spitter
                    if(spiderling.gameObjectName === "Spitter") { // then try to spit
                        var spitter = spiderling;
                        var enemysNest = this.player.otherPlayer.broodMother.nest;

                        // loop through to check to make sure there is not already a Web to the enemys Nest
                        var existingWeb = null;
                        for(var i = 0; i < enemysNest.webs.length; i++) {
                            var web = enemysNest.webs[i];
                            if(web.nestA === spitter.nest || web.nestB === spitter.nest) {
                                existingWeb = web;
                                break;
                            }
                        }

                        if(existingWeb === null) { // because no web exists between here and the enemy's nest, spit a web to it
                            console.log("Spitter #" + spitter.id + " spitting to Nest #" + enemysNest.id);
                            spitter.spit(enemysNest);
                        }
                    }
                    else if(spiderling.gameObjectName === "Cutter") { // then try to cut
                        var cutter = spiderling;
                        if(cutter.nest.webs.length > 0) { // then cut one of the Webs
                            var web = cutter.nest.webs.randomElement();
                            console.log("Cutter #" + cutter.id + " cutting Web #" + web.id);
                            cutter.cut(web);
                        }
                    }
                    if(spiderling.gameObjectName === "Weaver") { // then try to strengthen or weaken
                        var weaver = spiderling;
                        if(weaver.nest.webs.length > 0) { // then weave one of the Webs
                            // 50% of the time do a strengthening weave, the other 50% of the time weaken
                            if(Math.random() >= 0.50) {
                                weaver.strengthen(weaver.nest.webs.randomElement());
                            }
                            else {
                                weaver.weaken(weaver.nest.webs.randomElement());
                            }
                        }
                    }
                }
            }
        }

        return true; // To signify that we are done with our turn
    },
});

module.exports = AI;
