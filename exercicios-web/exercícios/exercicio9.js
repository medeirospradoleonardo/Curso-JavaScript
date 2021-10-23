// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function repetir(elemento_repetido, qtd_vezes){
    array = []
    for(let i=0; i<qtd_vezes; i++){
        array.push(elemento_repetido)
    }

    return array
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))
