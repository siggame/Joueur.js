# Saloon JavaScript Client (via Node.js)

This is the root of you AI. Stay out of the `joueur/` folder, it does most of the heavy lifting to play on our game servers. Your AI, and the game objects it manipulates are all in `games/saloon/`, with your very own AI living in `games/saloon/ai.js` for you to make smarter.

## How to Run

This client has been tested and confirmed to work on the Campus rc##xcs213 Linux machines, but it can work on your own Windows/Linux/Mac machines if you desire.

### Requirements

You need [Node.js][1], which should install `node` and `npm` for you. Version 4.6.0 is officially supported, though older versions back to 0.10, and newer versions such as v6.X should work just as well.

In addition, [node-gyp][2] is required to build the netlinkwrapper module, which is a wrapper to a simple C++ socket library. Make sure `npm` can build node-gyp projects by following their [installation instructions][3].

### Linux

If you are using your own Linux/Mac make sure you have g++ installed and node-gyp can find it, then:

```
make
./testRun MyOwnGameSession
```

### Windows

Install [Node.js][1] and a C++ compiler. Having a version of Visual Studio with Visual C++ normally installs these tools for you on Windows, but [MS Build Tools 2013](http://www.microsoft.com/en-us/download/details.aspx?id=40760) should work as well if you have a hatred of Visual Studio on Windows, or get node-gyp build errors complaining of no way to build native V8 addons. You may need the `--msvs_version=2013` flag if `npm install` gives a compiler error.

Then from a powershell:

```
npm install
node main.js Saloon -s r99acm.device.mst.edu -r MyOwnGameSession
```

## Other Notes

It is possible that on your Missouri S&T S-Drive this client will not run properly. This is not a fault with the client, but rather the school's S-Drive implimentation changing some file permissions during run time. We cannot control this. Instead, we recommend cloning your repo outside the S-Drive and use an SCP program like [WinSCP](https://winscp.net/eng/download.php) to edit the files in Windows using whatever IDE you want if you want to code in Windows, but compile in Linux.

The only file you should ever modify to create your AI is the `ai.js` file. All the other files are needed for the game to work. In addition, you should never be creating your own instances of the Game's classes, nor should you ever try to modify their variables. Instead, treat the Game and its members as a read only structure that represents the game state on the game server. You interact with it by calling the game functions.

[1]: https://nodejs.org/
[2]: https://github.com/nodejs/node-gyp
[3]: https://github.com/nodejs/node-gyp#installation
