const assert = require('assert');
const copyDir = require('../lib/copy-dir');
const path = require('path');
const fs = require('fs');

const promisify = require('util').promisify;
const rimraf = promisify(require('rimraf'));


const COPY_DIR = path.join(__dirname, 'copy');
const SOURCE_DIR = path.join(__dirname, 'source-dir');

describe('copy directory', () => {
    
    before(() => rimraf(COPY_DIR));

    it('copy directory', () => {
        return copyDir(SOURCE_DIR, COPY_DIR)
            .then(() => {
                fs.readdir(COPY_DIR, (err, files) => {
                    if(err) throw err;
                    assert.equal(files.length, 3);
                });
            });
    });
});