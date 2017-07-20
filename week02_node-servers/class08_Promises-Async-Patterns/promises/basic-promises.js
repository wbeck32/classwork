/* eslint no-console: off */
const fs = require('fs');
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);

const filepath = __dirname + '/basic-promises.js';
const filepath2 = __dirname + '/callback-to-promises.js';

// fs.readFile(filepath, 'utf8', (err, data) => {
//     console.log('fs.readFile', data.slice(0, 20));
// });

// readFile(filepath, 'utf8')
//     .then(data => {
//         console.log('promisified readFile', data.slice(0, 20));
//         return readFile(filepath2, 'utf8');
//     })
//     .then(value => {
//         console.log('next then', value.slice(0, 30));
//     });

function copyFileUpper(dir, file) {
    return readFile(`${dir}/${file}`, 'utf8')
        .then(contents => contents.toUpperCase())
        .then(contents => {
            return writeFile(`${dir}/copy.js`, contents);
        });
}

copyFileUpper(__dirname, 'callback-to-promises.js')
    .then(() => {
        console.log('file copied!');
    });