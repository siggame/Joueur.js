var path = require('path');
var fs = require('fs');

// List all files in a directory in Node.js recursively in a synchronous fashion
var walkSync = function(dir, filelist) {
    var files = fs.readdirSync(dir);
    filelist = filelist || [];

    files.forEach(function(file) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = walkSync(path.join(dir, file), filelist);
        }
        else {
            filelist.push(file);
        }
    });

    return filelist;
};

module.exports = walkSync;
