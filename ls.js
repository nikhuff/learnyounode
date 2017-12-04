var path = require('path');
var fs = require('fs');

module.exports = function(directory, extension, callback) {
    fs.readdir(directory, function (err, files) {
        if (err) {
            return callback(err);
        }
        
        files = files.filter(function (file) {
            return path.extname(file) === '.' + extension;
            })
    
        callback(null, files);
        })
    }