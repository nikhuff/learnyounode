var path = require('path');
var fs = require('fs');

var pathname = process.argv[2];
var fileType = process.argv[3];
var textFiles = [];

function getTextFiles(callback) {
    fs.readdir(pathname, function readList(err, list) {
        if (err) {
            console.log(err);
        }
        for (var i = 0; i < list.length; i++) {
            if (path.extname(list[i]) == '.' + fileType) {
                textFiles.push(list[i]);
            }
        }
        callback();
    })
}

function logConsole() {
    for (var i = 0; i < textFiles.length; i++) {
        console.log(textFiles[i]);
    }
}

getTextFiles(logConsole);