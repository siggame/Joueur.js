# Anarchy JavaScript Client (via Node.js)

This is the root of you AI. Stay out of the joueur/ folder, it does most of the heavy lifting to play on our game servers. Your AI, and the game objects it manipulates are all in `games/anarchy/`, with your very own AI living in `games/anarchy/ai.js` for you to make smarter.

## How to Run

This client has been tested and confirmed to work on the Campus rc##xcs213 Linux machines, but it can work on your own Windows/Linux/Mac machines if you desire.

### Linux

```
make
./testRun MyOwnGameSession
```

If you are using your own Linux/Mac make sure you have g++ installed and Node-gyp can find it.

### Windows

Install NodeJS and a C++ compiler. Having a version of Visual Studio with Visual C++ normally installs these tools for you on Windows, but [MS Build Tools 2013](http://www.microsoft.com/en-us/download/details.aspx?id=40760) should work as well if you have a hatred of Visual Studio on Windows, or get node-gyp build errors complaining of no way to build native V8 addons.

Then from a powershell:

```
npm install
node main.js Anarchy -s r99acm.device.mst.edu -r MyOwnGameSession
```

## Requirements

[node-gyp](https://github.com/nodejs/node-gyp) is required to build the netlinkwrapper module, which is a wrapper to a simple c++ socket library. For Windows this can be built easily if you have visual studio 2013 installed. You may need the `--msvs_version=2013` flag if `npm install` gives a compiler error.
