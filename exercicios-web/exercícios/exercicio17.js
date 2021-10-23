// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array

function somarNumeros(array){
    array_novo = []
    array_novo = array.reduce(function(acumulador, atual){
        return acumulador + atual
    })

    return array_novo
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))