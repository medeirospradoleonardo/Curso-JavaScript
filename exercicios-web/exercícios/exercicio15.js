// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.

function receberSomenteOsParesDeIndicesPares(array){
    array_novo = []
    for (let i of array){
        if((i % 2 == 0) && (array.indexOf(i) % 2 == 0)){
            array_novo.push(i)
        }
    }

    return array_novo
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))