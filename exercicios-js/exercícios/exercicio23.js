// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

function contarPalavras(string){
    return Array.from(string.split(" ")).length
}

console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))
