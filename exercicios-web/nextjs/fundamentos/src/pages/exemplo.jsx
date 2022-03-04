import Cabecalho from '../components/cabecalho'
import Layout from '../components/Layout'

export default function Exemplo(){
    // props é somente leitura
    return(
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.js & React" />
            <Cabecalho titulo="Aprenda Next na prática" />
        </Layout>
    )
}