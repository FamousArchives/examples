var fs = require('graceful-fs');
var path = require('path');
var esprima = require("esprima");
var doctrine = require("doctrine");
var async = require('async');

module.exports = function(jsonFiles, examplesPath, cb) {
    var lessons = {};
    for (var i = 0; i < jsonFiles.length; i++) {
        var filePath = path.resolve('./src/examples/', jsonFiles[i]);
        var fileContents = fs.readFileSync(filePath, 'utf8');

        var json = JSON.parse(fileContents);

        for (var version in json.versions) {
            if (!lessons[version]) lessons[version] = {};

            for (var example in json.versions[version]) {
                var lessonData = createIndividualLesson(version, json.name, json.versions[version][example], examplesPath);
                lessons[lessonData.id] = lessonData.data;

                if (!lessons[version][lessonData.repo]) lessons[version][lessonData.repo] = {};
                if (!lessons[version][lessonData.repo][lessonData.component]) lessons[version][lessonData.repo][lessonData.component] = [];

                lessons[version][lessonData.repo][lessonData.component].push(lessonData.example);
            }
        }
    }

    fs.writeFile('output.txt', JSON.stringify(lessons, null, 4), cb);
}

function createIndividualLesson(version, name, example, examplesPath) {
    examplesPath = examplesPath.split('/');
    examplesPath.pop();
    examplesPath = examplesPath.join('/');

    var temp = name.split('/');

    var repo = temp[1];
    var component = temp[2].toLowerCase();
    var exampleName = example.split('.')[0];

    var id = [name, example].join('/');
    var temp = id.replace('famous', 'examples');
    var filePath = [examplesPath, temp].join('/');

    var example = fs.readFileSync(filePath, "utf8")
    var syntax = esprima.parse(example, { tokens: true, range: true, comment: true });

    var baseWebsiteUrl = 'https://famo.us/examples'



    return {
        repo: repo,
        component: component,
        example: {
            "name": exampleName,
            "url": [baseWebsiteUrl, version, repo, component, exampleName].join('/'),
            "instruction": getComments(syntax, id),
            "javascript": commentlessCode(example)
        }
    };
}

function sendToFirebase(lessonData) {
    fileID = lessonData.id.replace(/\//g, '-');
    fileID = fileID.replace(".js", "");
    examplesFirebase.child('lessons').child(fileID).set(lessonData);
}

function referenceDocLink(module) {
    module = module.split('/');
    module.splice(module.length - 1, 1);
    module = module.join('/');
    module = module.replace('famous', '\n\n[Reference Documentation](http://launch.famo.us/docs/0.1.0');
    module += ')';
    return module;
}

function getComments(syntax, name) {
    var blockComments = syntax.comments.filter(function(comment) {
        return comment.type === "Block";
    });

    var parsedBlockComments = blockComments.map(function(blockComment) {
        var parsedComment = doctrine.parse(blockComment.value, { unwrap: true });
        parsedComment.range = blockComment.range;
        return parsedComment;
    });

    var result = parsedBlockComments[0]['description'];

    return result;
}

function commentlessCode(code) {
    var lines = code.split('\n');
    var finalCode = [];
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf('*') !== 1 && lines[i].indexOf('define') !== 0 && lines[i].indexOf('});') !== 0 ) {
            finalCode.push(lines[i].replace(/^    /, ""));
        }
    }

    return finalCode.join('\n');
}