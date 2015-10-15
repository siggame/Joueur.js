# Joueur.py
A simple JavaScript game client for the Cadre framework to connect to [Cerveau](https://github.com/JacobFischer/Cerveau) servers.

![{Cadre}](http://i.imgur.com/17wwI3f.png)

All inspiration taken from [MST's SIG-GAME framework](https://github.com/siggame), and most of the terminology is assuming some familiarity with it as this is a spiritual successor to it.

## Features

* Multi-Game:
  * One client can have multiple AIs to play different games.
* Easy generation of new game AIs using the [Creer](https://github.com/JacobFischer/Creer) codegen
* No game specific logic. All logic is done server side. Here on clients we just merge deltas into the game state.
* Generated game classes are slim and can be extended by coders without breaking client server communication.
* A simple Class implimentation that support multiple inheritance, mimicing Python's Classes.
* Networking via TCP sockets
  * Communication via json strings with support for cycles within game references
  * Only deltas in states are send over the network
  * Requires node-gyp to build the tcp library (it does not use the net module)

## How to Run

The only real requirement is Node.js. If you have the Cerveau server software working you should have everything you need. The only caveat is that this js client will build module that actually uses c++ code, so you'll need a c++ compiler installed.

### Windows

Install NodeJS and a C++ compiler. Having a version of Visual Studio with Visual C++ normally installs these tools for you on Windows, but [MS Build Tools 2013](http://www.microsoft.com/en-us/download/details.aspx?id=40760) should work as well if you have a hatred of Visual Studio on Windows, or get node-gyp build errors complaining of no way to build native V8 addons.

Then from a powershell:

```
npm install
node main.js GAME_NAME -s SERVER -p PORT
```

### Linux

Having g++ installed should be enough for node-gyp to build the addon. Then:

```
make
./run GAME_NAME -s SERVER -p PORT
```

## Requirements

node-gyp is required to build the netlinkwrapper module, which is a wrapper to a simple c++ socket library. For Windows this can be built easily if you have visual studio 2013 installed. You may need the `--msvs_version=2013` flag if `npm install` gives a compiler error.
