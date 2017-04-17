var fs = require('fs')
var path = require('path');


/**
 * Exporta a função que faz a leitura de arquivos de um diretório, filtrando pela extensão passada 
 * @folder: diretório a ser lido
 * @ext: extensão a ser filtrada
 * @callback: executada em caso de erro na leitura do arquivo
 */
module.exports = function (folder, ext, callback) {
    fs.readdir(folder, function (err, files) {
        if (err) return callback(err)

        var files = files.filter(function (file) {
            if (path.extname(file) === '.' + ext) {
                return true
            }
        })

        callback(null, files);
    })
}