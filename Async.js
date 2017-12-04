var fs = require('fs');
var num = undefined;

function sumNewlines(callback) {
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        var str = fileContents.toString();
        var arr = str.split('\n');
        num = arr.length - 1;
        callback();
    })
}

function logNumber() {
    console.log(num);
}

sumNewlines(logNumber);