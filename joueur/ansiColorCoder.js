var _style = {
    none: 0,
    bold: 1,
    underline: 4,
    blink: 5,
    inverse: 7,
    hidden: 8,
};

var _text = {
    black: 30,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    magenta: 35,
    cyan: 36,
    white: 37,
    "default": 39,
};

var _background = {
    black: 40,
    red: 41,
    green: 42,
    yellow: 43,
    blue: 44,
    magenta: 45,
    cyan: 46,
    white: 47,
    "default": 49,
};

function ansi(num) {
    num = num || 0;
    return String.fromCharCode(27) + "[" + num + "m";
}

module.exports = {
    style: function(key) {
        return ansi(_style[key || "none"]);
    },

    text: function(key) {
        return ansi(_text[key || "default"]);
    },

    background: function(key) {
        return ansi(_background[key || "default"]);
    },

    reset: function() {
        return ansi(0);
    },
};
