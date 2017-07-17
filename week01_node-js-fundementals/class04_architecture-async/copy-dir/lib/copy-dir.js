const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

function copyDir(fromDir, toDir, callback) {

    // read the files from the source dir
    fs.readdir(fromDir, (err, files) => {
        if(err) return callback(err);

        // make sure the toDir exists
        mkdirp(toDir, err => {
            if(err) return callback(err);

            let count = files.length;
            // loop through each file name
            files.forEach(file => {
                // make full source and destination paths
                const sourceFile = path.join(fromDir, file);
                const destFile = path.join(toDir, file);
                
                // read this file
                fs.readFile(sourceFile, (err, contents) => {
                    if(err) return callback(err);
                    // write this file
                    fs.writeFile(destFile, contents, err => {
                        if(err) return callback(err);
                        // take one down, pass it around...
                        count--;
                        // any bottles left on the wall?
                        if(count === 0) callback();
                    });
                });
            });
        })
    });

}

module.exports = copyDir;