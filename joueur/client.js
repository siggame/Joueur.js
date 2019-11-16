const Serializer = require('./serializer');
const handleError = require('./handleError');
const color = require('./ansiColorCoder');
const EOT_CHAR = String.fromCharCode(4);
let netlinkwrapper = null;
let SyncSocket = null;

try {
  netlinkwrapper = require('netlinkwrapper');
}
catch (err) {
  // netlinkwrapper could not be found, they probably couldn't get node-gyp setup
  // so, fallback to SyncSocket
  SyncSocket = require('sync-socket');
}

// this will be the Socket class we use, we prefer netlinkwrapper but will fallback to SyncSocket if they couldn't get node-gyp working.
let Socket = netlinkwrapper || SyncSocket;

// @class Client: talks to the server receiving game information and sending commands to execute via TCP socket. Clients perform no game logic
class Client{
  constructor() {
    this._eventsStack = [];
    this._receievedBuffer = '';
    this._connected = false;
    this._bufferSize = 16*1024;
  }

  connect(hostname, port, options) {
    this.hostname = String(hostname);
    this.port = parseInt(port);
    this._printIO = options.printIO;

    console.log(`${color.text('cyan')}Connecting to:${this.hostname}:${this.port}${color.reset()}`);

    if (!netlinkwrapper) {
      console.log(`${color.text('yellow')}WARNING: Could not use 'netlinkwrapper', falling back to FAR slower 'sync-socket'. (Is your node-gyp configured properly?)${color.reset()}`);
    }

    try {
      this._socket = new Socket({ workerPort: 9000 + Math.floor(Math.random() * 1000) });
      this._socket.connect(this.port, this.hostname);
    }
    catch (err) {
      handleError('COULD_NOT_CONNECT', err, `Could not connect to ${this.hostname}:${this.port}.`);
    }

    this._connected = true;
  }

  setup(gameClass, aiClass, gameManagerClass) {
    this.gameManager = new gameManagerClass();
    this.game = new gameClass();
    this.ai = new aiClass(this.game);

    this.gameManager.setup(this.game);
  }

  _sendRaw(str) {
    if (this._printIO) {
      console.log(`${color.text('magenta')}TO SERVER <-- ${str}${color.reset()}`);
    }

    try {
      this._socket.write(str);
    }
    catch (err) {
      handleError('DISCONNECTED_UNEXPECTEDLY', err, 'Could not send string through server.');
    }
  }

  send(event, data) {
    this._sendRaw(
      JSON.stringify({
        sentTime: (new Date()).getTime(),
        event: event,
        data: Serializer.serialize(data),
      }) + EOT_CHAR
    );
  }

  disconnect() {
    if (this._socket) {
      try {
        this._socket.disconnect();
      }
      catch (err) {
                // ignore errors on disconnecting. should only happen during times we don't care about error, such as handleError()
      }
    }
  }

  runOnServer(caller, functionName, args) {
    this.send('run', {
      caller: caller,
      functionName: functionName,
      args: args,
    });

    let ranData = this.waitForEvent('ran');
    return Serializer.deserialize(ranData, this.game);
  }

  waitForEvent(event) {
    while (true) {
      this._waitForEvents();

      while (this._eventsStack.length > 0) {
        let sent = this._eventsStack.pop();

        if (event !== false && sent.event === event) {
          return sent.data;
        }
        else {
          this._autoHandle(sent.event, sent.data);
        }
      }
    }
  }

  _waitForEvents() {
    if (this._eventsStack.length > 0) {
      return; // as we already have events to handle, no need to wait for more
    }

    while (true) {
      let sent = undefined;
      try {
        sent = this._socket.read(this._bufferSize, !netlinkwrapper);
      }
      catch (err) {
        handleError('CANNOT_READ_SOCKET', err, 'Error reading socket');
      }

      if (sent !== undefined) {
        if (this._printIO) {
          console.log(`${color.text('magenta')}FROM SERVER --> ${sent}${color.reset()}`);
        }

        let total = this._receievedBuffer + sent;
        let split = total.split(EOT_CHAR);

        this._receievedBuffer = split.pop();

        for (let i = split.length - 1; i >= 0; i--) {
          let sentStr = split[i];
          let parsed = undefined;
          try {
            parsed = JSON.parse(sentStr);
          }
          catch (err) {
            handleError('MALFORMED_JSON', err, `Error parsing json: '${sentStr}'.`);
          }

          this._eventsStack.push(parsed);
        }

        if (this._eventsStack.length > 0) {
          return; // as we already have events to handle, no need to wait for more
        }
      }
    }
  }

  play() {
    this.waitForEvent(false);
  }



  //--- auto handle events ---\\

  _autoHandle(event, data) {
    let callback = this[`_autoHandle${event[0].toUpperCase() + event.substr(1)}`];

    if (callback) {
      return callback.call(this, data);
    }
    else {
      handleError('UNKNOWN_EVENT_FROM_SERVER', `Cannot auto handle event ' ${event}'.`);
    }
  }

  _autoHandleOrder(data) {
    let returned;
    let aiOrderCallback = this.ai[data.name];

    if (aiOrderCallback) {
      let args = Serializer.deserialize(data.args, this.game);
      try {
        returned = aiOrderCallback.apply(this.ai, args);
      }
      catch (err) {
        handleError('AI_ERRORED', err, `AI errored in order '${data.name}'.`);
      }
    }
    else {
      handleError('RELFECTION_FAILED', `Could not find AI order function '${data.name}'.`);
    }

    this.send('finished', {
      orderIndex: data.index,
      returned: returned,
    });
  }

  _autoHandleDelta(delta) {
    try {
      this.gameManager.applyDeltaState(delta);
    }
    catch (err) {
      handleError('DELTA_MERGE_FAILURE', err, 'Error applying delta state.');
    }

    if (this.ai.player) { // the AI is ready for updates
      try {
        this.ai.gameUpdated();
      }
      catch (err) {
        handleError('AI_ERRORED', err, 'AI errored in gameUpdate() after delta.');
      }
    }
  }

  _autoHandleInvalid(data) {
    try {
      this.ai.invalid(data.message);
    }
    catch (err) {
      handleError('AI_ERRORED', err, 'AI errored in invalid().');
    }
  }

  _autoHandleFatal(data) {
    handleError('FATAL_EVENT', `Got fatal event from server: ${data.message}`);
  }

  _autoHandleOver(data) {
    let won = this.ai.player.won;
    let reason = won ? this.ai.player.reasonWon : this.ai.player.reasonLost;

    console.log(`${color.text('green')}Game is over. ${won ? 'I Won!' : 'I Lost :('} because: ${reason}${color.reset()}`);

    try {
      this.ai.ended(won, reason);
    }
    catch (err) {
      handleError('AI_ERRORED', err, 'AI errored in ended().');
    }

    if (data.message) {
      const message = data.message.replace('__HOSTNAME__', this.hostname);
      console.log(color.text('cyan') + message + color.reset());
    }

    this.disconnect();
    process.exit(0);
  }
}

let clientSingleton = new Client();

module.exports = clientSingleton;
