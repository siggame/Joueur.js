# GAME_NAME JavaScript Client (via Node.js)

This is the root of you AI. Stay out of the `joueur/` folder, it does most of the heavy lifting to play on our game servers. Your AI, and the game objects it manipulates are all in `games/game_name/`, with your very own AI living in `games/game_name/ai.js` for you to make smarter.

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
node main.js GAME_NAME -s r99acm.device.mst.edu -r MyOwnGameSession
```

### Vagrant

Install [Vagrant][vagrant] and [Virtualbox][virtualbox] in order to use the Vagrant configuration we provide which satisfies all build dependencies inside of a virtual machine. This will allow for development with your favorite IDE or editor on your host machine while being able to run the client inside the virtual machine. Vagrant will automatically sync the changes you make into the virtual machine that it creates. In order to use vagrant **after installing the aforementioned requirements** simply run from the root of this client:

```bash
vagrant up
```

and after the build has completed you can ssh into the virtual environment by running:

```bash
vagrant ssh
```

From there you will be in a Linux environment that has all the dependencies you'll need to build and run this client.

When the competition is over, or the virtual environment becomes corrupted in some way, simply execute `vagrant destroy` to delete the virtual machine and its contents.

For a more in depth guide on using vagrant, take a look at [their guide][vagrant-guide]

#### Windows

Using Vagrant with Windows can be a bit of a pain. Here are some tips:

* Use an OpenSSH compatible ssh client. We recommend [Git Bash][gitbash] to serve double duty as your git client and ssh client
* Launch the terminal of your choice (like Git Bash) as an Administrator to ensure the symbolic links can be created when spinning up your Vagrant virtual machine

## Other Notes

If you wish to use a different version of node, edit your `.nvmrc`, which will tell [Node Version Manager][nvm] your desired node version.

It is possible that on your Missouri S&T S-Drive this client will not run properly. This is not a fault with the client, but rather the school's S-Drive implementation changing some file permissions during run time. We cannot control this. Instead, we recommend cloning your repo outside the S-Drive and use an SCP program like [WinSCP][winscp] to edit the files in Windows using whatever IDE you want if you want to code in Windows, but compile in Linux.

The only file you should ever modify to create your AI is the `ai.js` file. All the other files are needed for the game to work. In addition, you should never be creating your own instances of the Game's classes, nor should you ever try to modify their variables. Instead, treat the Game and its members as a read only structure that represents the game state on the game server. You interact with it by calling the game object functions.

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
