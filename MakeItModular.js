var pathname = process.argv[2];
var ext = process.argv[3];
var ls = require('./ls');

function logConsole(err, filelist) {
    if (err)
        return console.error('There was an error: ', err);
    
    filelist.forEach(function(file) {
        console.log(file);
    })
}

ls(pathname, ext, logConsole);