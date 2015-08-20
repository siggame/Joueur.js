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

Make sure you have Node.js installed and then

```
npm install
node main.js GAME_NAME -s SERVER -p PORT -n PLAYER_NAME -r REQUESTED_SESSION
```

## Requirements

node-gyp is required to build the netlinkwrapper module, which is a wrapper to a simple c++ socket library. For Windows this can be built easily if you have visual studio 2013 installed. You may need the `--msvs_version=2013` flag if `npm install` gives a compiler error.
