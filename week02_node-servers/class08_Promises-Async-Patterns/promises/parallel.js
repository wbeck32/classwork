/* eslint no-console: off */
const fs = require('fs');
const path = require('path');
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);


function getAllDirSnippets(dir) {
    return readdir(dir)
        .then(files => files.map(f => path.join(dir, f)))
        .then(filePaths => {
            return Promise.all(
                filePaths.map(f => readFile(f, 'utf8'))
            );     
        })
        .then(contents => contents.map(c => c.slice(0, 20)));
}

getAllDirSnippets(__dirname)
    .then(snippets => {
        snippets.forEach(s => console.log(s));
    })
    .catch(err => console.log(err));