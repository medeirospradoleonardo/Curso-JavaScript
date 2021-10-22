const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho){
    return new Promise(function(resolve){
       fs.readFile(caminho, (err, conteudo) => resolve(conteudo.toString()))
    })
}


lerArquivo(caminho)
    .then(console.log)
