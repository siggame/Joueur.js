var Class = require("classe");
var Serializer = require("./serializer");
var GameManager = require("./gameManager");
var handleError = require("./handleError");
var netlinkwrapper = require("netlinkwrapper");
var color = require("./ansiColorCoder");
var EOT_CHAR = String.fromCharCode(4);

// @class Client: talks to the server recieving game information and sending commands to execute via TCP socket. Clients perform no game logic
var Client = Class({
    init: function() {
        this._socket = new netlinkwrapper();

        this._eventsStack = [];
        this._bufferSize = 1024;
        this._receievedBuffer = "";
        this._connected = false;
    },

    connect: function(server, port, options) {
        this.server = String(server);
        this.port = parseInt(port);
        this._printIO = options.printIO;

        console.log(color.text("cyan") + "Connecting to:", this.server + ":" + this.port + color.reset());

        try {
            this._socket.connect(this.server, this.port);
            this._socket.blocking(false);
        }
        catch(err) {
            handleError("COULD_NOT_CONNECT", err, "Could not connect to " + this.server + ":" + this.port + ".");
        }

        this._connected = true;
    },

    setup: function(game, ai) {
        this.game = game;
        this.ai = ai;
        this.gameManager = new GameManager(game);
    },

    _sendRaw: function(str) {
        if(this._printIO) {
            console.log(color.text("magenta") + "TO SERVER <-- " + str + color.reset());
        }

        try {
            this._socket.send(str);
        }
        catch(err) {
            handleError("DISCONNECTED_UNEXPECTEDLY", err, "Could not send string through server.");
        }
    },

    send: function(event, data) {
        this._sendRaw(
            JSON.stringify({
                sentTime: (new Date()).getTime(),
                event: event,
                data: Serializer.serialize(data),
            }) + EOT_CHAR
        );
    },

    disconnect: function() {
        if(this._connected) {
            try {
                this._socket.disconnect();
            }
            catch(err) {
                // ignore errors on disconnecting. should only happen during times we don't care about error, such as handleError()
            }
        }
    },

    runOnServer: function(caller, functionName, args) {
        this.send("run", {
            caller: caller,
            functionName: functionName,
            args: args,
        });

        var ranData = this.waitForEvent("ran");
        return Serializer.deserialize(ranData);
    },

    waitForEvent: function(event) {
        while(true) {
            this._waitForEvents();

            while(this._eventsStack.length > 0) {
                var sent = this._eventsStack.pop();

                if(event !== false && sent.event === event) {
                    return sent.data;
                }
                else {
                    this._autoHandle(sent.event, sent.data);
                }
            }
        }
    },

    _waitForEvents: function() {
        if(this._eventsStack.length > 0) {
            return; // as we already have events to handle, no need to wait for more
        }

        while(true) {
            var sent = undefined;
            try {
                sent = this._socket.read(this._bufferSize);
            }
            catch(err) {
                handleError("CANNOT_READ_SOCKET", err, "Error reading socket");
            }

            if(sent !== undefined) {
                if(this._printIO) {
                    console.log(color.text("magenta") + "FROM SERVER --> " + sent + color.reset());
                }

                var total = this._receievedBuffer + sent;
                var split = total.split(EOT_CHAR);

                this._receievedBuffer = split.pop();

                for(var i = split.length - 1; i >= 0; i--) {
                    var sentStr = split[i];
                    var parsed = undefined;
                    try {
                        parsed = JSON.parse(sentStr);
                    }
                    catch(err) {
                        handleError("MALFORMED_JSON", err, "Error parsing json: '" + sentStr + "'.");
                    }

                    this._eventsStack.push(parsed);
                }

                if(this._eventsStack.length > 0) {
                    return; // as we already have events to handle, no need to wait for more
                }
            }
        }
    },

    play: function() {
        this.waitForEvent(false);
    },



    //--- auto handle events ---\\

    _autoHandle: function(event, data) {
        var callback = this['_autoHandle' + event.upcaseFirst()];

        if(callback) {
            return callback.call(this, data);
        }
        else {
            handleError("UNKNOWN_EVENT_FROM_SERVER", "Cannot auto handle event '" + event + "'.");
        }
    },

    _autoHandleOrder: function(data) {
        var returned;
        var aiOrderCallback = this.ai[data.name];

        if(aiOrderCallback) {
            var args = Serializer.deserialize(data.args, this.game);
            try {
                returned = aiOrderCallback.apply(this.ai, args);
            }
            catch(err) {
                handleError("AI_ERRORED", err, "AI errored in order '" + data.name + "'.");
            }
        }
        else {
            handleError("RELFECTION_FAILED", "Could not find ai order function '" + data.name + "'.");
        }

        this.send("finished", {
            orderIndex: data.index,
            returned: returned,
        });
    },

    _autoHandleDelta: function(delta) {
        try {
            this.gameManager.applyDeltaState(delta);
        }
        catch(err) {
            handleError("DELTA_MERGE_FAILURE", err, "Error applying delta state.");
        }

        if(this.ai.player) { // the AI is ready for updates
            try {
                this.ai.gameUpdated();
            }
            catch(err) {
                handleError("AI_ERRORED", err, "AI errored in gameUpdate() after delta.");
            }
        }
    },

    _autoHandleInvalid: function(data) {
        try {
            this.ai.invalid(data.message);
        }
        catch(err) {
            handleError("AI_ERRORED", err, "AI errored in invalid().");
        }
    },

    _autoHandleFatal: function(data) {
        handleError("FATAL_EVENT", "Got fatal event from server: " + data.message);
    },

    _autoHandleOver: function(data) {
        var won = this.ai.player.won;
        var reason = won ? this.ai.player.reasonWon : this.ai.player.reasonLost;

        console.log(color.text("green") + "Game is over.", won ? "I Won!" : "I Lost :(", "because: " + reason + color.reset());

        try {
            this.ai.ended(won, reason);
        }
        catch(err) {
            handleError("AI_ERRORED", err, "AI errored in ended().");
        }

        if(data.message) {
            console.log(color.text("cyan") + data.message + color.reset());
        }

        this.disconnect();
        process.exit(0);
    },
});

var clientSingleton = new Client();
module.exports = clientSingleton;
