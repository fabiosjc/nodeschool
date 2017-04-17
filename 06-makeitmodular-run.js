
var listFilesModule = require('./06-mymodule.js')

var folder = process.argv[2]
var ext = process.argv[3]

var callback = function (err, list) {
    if (err) return console.error('There was an error:', err)

    list.forEach(function (file) {
        console.log(file);
    });
}

listFilesModule(folder, ext, callback)