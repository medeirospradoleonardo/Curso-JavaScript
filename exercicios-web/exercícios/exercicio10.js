// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.

function simboloMais(qtd_vezes){
    let resultado = ''
    for(let i = 0; i < qtd_vezes; i++)
        resultado += '+'

    return resultado
}

console.log(simboloMais(2))
console.log(simboloMais(4))