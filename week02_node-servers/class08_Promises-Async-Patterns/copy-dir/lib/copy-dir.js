const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdirp = promisify(require('mkdirp'));

function copyDir(fromDir, toDir) {
    return Promise.all([
        readdir(fromDir), 
        mkdirp(toDir)
    ]).then( ([files]) => {
        return Promise.all(
            files.map(file => {
                const sourceFile = path.join(fromDir, file);
                const destFile = path.join(toDir, file);  
                return copyFile(sourceFile, destFile);      
            })
        );
    });
}

function copyFile(sourceFile, destFile) {
    return readFile(sourceFile)
        .then(contents => writeFile(destFile, contents));

}

module.exports = copyDir;