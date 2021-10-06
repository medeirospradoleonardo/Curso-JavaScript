// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
// gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
// sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
// não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.

function funcaoDaSorte(numero){
    const numero_gerado = Math.floor(Math.random() * 11)
    return numero_gerado == numero ? "Parabéns! O número sorteado foi o ".concat(numero) : "Que pena! O número sorteado foi o ".concat(numero_gerado)
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))