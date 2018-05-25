// This is where you build your AI for the Spiders game.

const BaseAI = require(`${__basedir}/joueur/baseAI`);

// <<-- Creer-Merge: requires -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
function randomElement(items) {
  return items[Math.floor(Math.random()*items.length)];
}
// <<-- /Creer-Merge: requires -->>

/**
 * This is the class to play the Spiders game. This is where you should build your AI.
 * @memberof Spiders
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
    // <<-- Creer-Merge: getName -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    return 'Spiders JavaScript Player';
    // <<-- /Creer-Merge: getName -->>
  }

  /**
   * This is called once the game starts and your AI knows its playerID and game. You can initialize your AI here.
   */
  start() {
    // <<-- Creer-Merge: start -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // pass
    // <<-- /Creer-Merge: start -->>
  }

  /**
   * This is called every time the game's state updates, so if you are tracking anything you can update it here.
   */
  gameUpdated() {
    // <<-- Creer-Merge: gameUpdated -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // pass
    // <<-- /Creer-Merge: gameUpdated -->>
  }

  /**
   * This is called when the game ends, you can clean up your data and dump files here if need be.
   *
   * @param {boolean} won - True means you won, false means you lost.
   * @param {string} reason - The human readable string explaining why you won or lost.
   */
  ended(won, reason) {
    // <<-- Creer-Merge: ended -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
    // pass
    // <<-- /Creer-Merge: ended -->>
  }


  /**
   * This is called every time it is this AI.player's turn.
   *
   * @returns {boolean} - Represents if you want to end your turn. True means end your turn, False means to keep your turn going and re-call this function.
   */
  runTurn() {
    // <<-- Creer-Merge: runTurn -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.

    // get a random spider to try to do things with
    var spider = randomElement(this.player.spiders);

    if(spider.gameObjectName === "BroodMother") {
      var broodMother = spider;

      var choice = Math.random();

      if(choice <= 0.10) { // try to consume a Spiderling 10% of the time
        if(broodMother.nest.spiders > 1) { // then there is another spider on this Nest, so let's try to consume one
          // get a random other spider to see if it's not us
          var otherSpider = randomElement(broodMother.nest.spiders);
          if(otherSpider !== broodMother) { // then we can comsume this poor soul
            console.log("Broodmother #" + broodMother.id + " consuming " + otherSpider.gameObjectName + " #" + otherSpider.id);
            broodMother.consume(otherSpider)
          }
        }
      }
      else { // try to spawn a Spiderling
        if(broodMother.eggs > 0) { // then we can spawn a Spiderling
            // get a random spiderling type to spawn a new Spiderling of that type
          var randomSpiderlingType = randomElement(["Cutter", "Weaver", "Spitter"]);
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
              var web = randomElement(spiderling.nest.webs);
              console.log("Spiderling " + spiderling.gameObjectName + " #" + spiderling.id + " moving on Web #" + web.id);
              spiderling.move(web);
            }
          }
          else if(choice === 1) { // then try to attack something
            if(spiderling.nest.spiders.length > 1) { // then there is someone besides us on the nest, let's try to attack!
              var otherSpider = randomElement(spiderling.nest.spiders);
              if(otherSpider.owner !== spiderling.owner) { // then attack the enemy!
                spiderling.attack(otherSpider);
              }
            }
          }
          else { // the only thing left is to do something unique based on what type of Spiderling we are
              // if that spider is a Spitter
            if(spiderling.gameObjectName === "Spitter") { // then try to spit
              var spitter = spiderling;
              var opponentsNest = this.player.opponent.broodMother.nest;

              // loop through to check to make sure there is not already a Web to the enemys Nest
              var existingWeb = null;
              for(var i = 0; i < opponentsNest.webs.length; i++) {
                var web = opponentsNest.webs[i];
                if(web.nestA === spitter.nest || web.nestB === spitter.nest) {
                  existingWeb = web;
                  break;
                }
              }

              if(existingWeb === null) { // because no web exists between here and the enemy's nest, spit a web to it
                console.log("Spitter #" + spitter.id + " spitting to Nest #" + opponentsNest.id);
                spitter.spit(opponentsNest);
              }
            }
            else if(spiderling.gameObjectName === "Cutter") { // then try to cut
              var cutter = spiderling;
              if(cutter.nest.webs.length > 0) { // then cut one of the Webs
                var web = randomElement(cutter.nest.webs);
                console.log("Cutter #" + cutter.id + " cutting Web #" + web.id);
                cutter.cut(web);
              }
            }
            if(spiderling.gameObjectName === "Weaver") { // then try to strengthen or weaken
              var weaver = spiderling;
              if(weaver.nest.webs.length > 0) { // then weave one of the Webs
                // 50% of the time do a strengthening weave, the other 50% of the time weaken
                if(Math.random() >= 0.50) {
                  weaver.strengthen(randomElement(weaver.nest.webs));
                }
                else {
                  weaver.weaken(randomElement(weaver.nest.webs));
                }
              }
            }
          }
      }
    }

    // <<-- /Creer-Merge: runTurn -->>
  }

  //<<-- Creer-Merge: functions -->> - Code you add between this comment and the end comment will be preserved between Creer re-runs.
  // any additional functions you want to add for your AI
  //<<-- /Creer-Merge: functions -->>

}

module.exports = AI;
