// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

function filtrarNumeros(array){
    array_novo = []
    for(let i of array){
        if(typeof i == "number"){
            array_novo.push(i)
        }
    }
    
    return array_novo
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))
