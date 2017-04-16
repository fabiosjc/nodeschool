var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) throw err

    var filteredFiles = files.filter(filterByExtension)
    for (var file of filteredFiles) {
        console.log(file)
    }

})

function filterByExtension(file) {
    return file.endsWith(ext)
}

