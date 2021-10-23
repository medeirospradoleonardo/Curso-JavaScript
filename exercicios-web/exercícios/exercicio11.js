//Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:


function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento= elementos.shift()
    const ultimoElemento = elementos.pop()
    return [primeiroElemento, ultimoElemento]
    }
    

console.log(receberPrimeiroEUltimoElemento([7,14,"olá"]))   
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))