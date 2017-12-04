var concat = require('concat-stream');
var http = require('http');

http.get(process.argv[2], function (response) {
    response.pipe(concat(function (data) {
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
})