import React from "react"

const func = props => [
        <h1 key='h1'>Bom dia, {props.nome}!</h1>,
        <h2 key='h2'>Até breve!</h2>
]


// const func = props => 
//     <React.Fragment>
//         <h1>Bom dia, {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>

// const func = props => 
//     <div>
//         <h1>Bom dia, {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>

export default func