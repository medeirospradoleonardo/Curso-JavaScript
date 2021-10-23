const pilotos = ['Vettel', 'Alonso', 'Raikkonen', ' Massa']
pilotos.pop() // Massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // insere um elemento na primeira posição da lista
console.log(pilotos)

// splice pode adicionar ou remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa quebrou novamente
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)