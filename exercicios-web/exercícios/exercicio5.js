// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
// números de strings.


function maiorOuIgual(n1, n2){
    if(typeof n1 != typeof n2) return false
    
    return n1 >= n2

}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))