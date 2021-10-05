function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({}))
// console.log(rand()) //erro pois nao foi colocado um objeto como parametro e na função
// ele nao está inicializado