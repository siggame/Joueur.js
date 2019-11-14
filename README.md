# JavaScript Joueur Client (via Node.js)

This is the client for the [Cadre][cadre] AI framework. It can play multiple different games, though you will probably only be interested in one at a time.

In general, try to stay out of the `joueur/` folder, it does most of the heavy lifting to play on our game servers.

Each AI, and the game objects it manipulates are all in `games/game_name/`, with your very own AI living in `games/game_name/ai.js` for you to make smarter.

## How to Run

This client has been tested and confirmed to work on the MST campus rc##xcs213 Linux machines, but it can work on your own Windows/Linux/Mac machines if you desire.

### Requirements

You need [Node.js][nodejs], which should install `node` and `npm` for you. Make sure to install a node version greater than or equal to Version 4.3.2. If you somehow require an older version, look at the [ES5 branch][es5] on GitHub, which is the last version of this client that did not use ES6 features present in more recent node versions.

In addition, [node-gyp][node-gyp] is **highly** recommended, but *not* required to build the netlinkwrapper module. Make sure `npm` can build node-gyp projects by following their [installation instructions][node-gyp-install]. Basically you will need a C++ compiler and Python 2.7 hooked up to node-gyp.

If you opt not to install node-gyp because it is annoying to set up, the client will fallback to a pure JavaScript module, but your game client will run much slower during testing. However, in the arena, we will build node-gyp correctly so it will run much faster in there.

### Linux

If you are using your own Linux/Mac make sure you have g++ installed and node-gyp can find it, then:

```
make
./testRun MyOwnGameSession
```

### Windows

Install [Node.js][nodejs] and a C++ compiler. Having a version of Visual Studio with Visual C++ normally installs these tools for you on Windows, but [MS Build Tools 2013][ms-build-tools] should work as well if you have a hatred of Visual Studio on Windows, or get node-gyp build errors complaining of no way to build native V8 addons. You may need the `--msvs_version=2013` flag if `npm install` gives a compiler error.

Then from a powershell:

```
npm install
node main.js GAME_NAME -s game.siggame.io -r MyOwnGameSession
```

## Other Notes

For advanced JavaScript users, we reccomend using the [TypeScript] client, [Joueur.ts]. It has all the advantages of JavaScript, with strict type checking to ensure your code it type safe before you even have to run it.

If you wish to use a different version of node, edit your `.nvmrc`, which will tell [Node Version Manager][nvm] your desired node version.

It is possible that on your Missouri S&T S-Drive this client will not run properly. This is not a fault with the client, but rather the school's S-Drive implementation changing some file permissions during run time. We cannot control this. Instead, we recommend cloning your repo outside the S-Drive and use an SCP program like [WinSCP][winscp] to edit the files in Windows using whatever IDE you want if you want to code in Windows, but compile in Linux.

The only file you should ever modify to create your AI is the `ai.js` file. All the other files are needed for the game to work. In addition, you should never be creating your own instances of the Game's classes, nor should you ever try to modify their variables. Instead, treat the Game and its members as a read only structure that represents the game state on the game server. You interact with it by calling the game object functions.

[cadre]: https://github.com/siggame/Cadre
[nodejs]: https://nodejs.org/
[node-gyp]: https://github.com/nodejs/node-gyp
[node-gyp-install]: https://github.com/nodejs/node-gyp#installation
[nvm]: https://github.com/creationix/nvm
[es5]: https://github.com/siggame/Joueur.js/tree/es5
[winscp]: https://github.com/siggame/Joueur.js/tree/es6
[ms-build-tools]: http://www.microsoft.com/en-us/download/details.aspx?id=40760
[vagrant]: https://www.vagrantup.com/
[vagrant-guide]: https://www.vagrantup.com/docs/getting-started/
[virtualbox]: https://www.virtualbox.org/wiki/Downloads
[gitbash]: https://git-scm.com/downloads
[Typescript]: https://www.typescriptlang.org/
[Joueur.ts]: https://github.com/siggame/Joueur.ts
