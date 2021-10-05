const pilotos = ['Vettel', 'Alonso', 'Raikkonen', ' Massa']
pilotos.pop() // Massa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // insere um elemento na primeira posição da lista
console.log(pilotos)