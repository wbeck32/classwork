const assert = require('assert');
const copyDir = require('../lib/copy-dir');
const rimraf = require('rimraf');
const path = require('path');
const fs = require('fs');

const COPY_DIR = path.join(__dirname, 'copy');
const SOURCE_DIR = path.join(__dirname, 'source-dir');

describe('copy directory', () => {
    
    before(done => {
        rimraf(COPY_DIR, err => {
            done();
        });
    });

    it('copy directory', done => {
        copyDir(SOURCE_DIR, COPY_DIR, err => {
            fs.readdir(COPY_DIR, (err, files) => {
                if(err) return done(err);
                assert.equal(files.length, 3);
                done();
            });
        });
    });
});