var fs = require("graceful-fs");
var path = require('path');
var async = require('async');
var wrench = require('wrench');
var _ = require('underscore');

var createLessons = require('./lessons');

examplePath = process.argv[2] || '.';
examplePath = path.resolve(path.join(examplePath, 'src/examples'));

var files = wrench.readdirSyncRecursive(examplePath);
var jsonFiles = _.filter(files, function(file) {
    return file.indexOf('.json') === -1 ? false : true;
});

async.series([
    function(cb) {
        console.log('Creating Lessons');
        cb();
    },
    createLessons.bind(null, jsonFiles, examplePath),
    function() {
        console.log('Done');
        process.exit(0);
    }
]);

