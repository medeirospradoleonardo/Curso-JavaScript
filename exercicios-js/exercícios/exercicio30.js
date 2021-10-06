// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
// num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
// com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.


function recerberMelhorEstudante(objeto_estudantes){
    array_estudante_media = Object.values(objeto_estudantes).map(function(e){
        return e.reduce(function(acumulador, atual){
            return acumulador + atual
        })
    })

    for(let i=0; i<Object.values(objeto_estudantes).length; i++){
        array_estudante_media[i] = array_estudante_media[i]/Object.values(objeto_estudantes)[i].length
    }

    array_estudante_media.sort().reverse()
    return array_estudante_media[0]
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }))


