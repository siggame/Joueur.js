const path = require('path');
const fs = require('fs');

// List all files in a directory in Node.js recursively in a synchronous fashion
module.exports = function walkSync(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];

  files.forEach((file) => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      filelist.push(file);
    }
  });

  return filelist;
};
