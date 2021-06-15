import './estilos.css'
import Rodape from './Rodape'
import Card from '../Card'

const FraseMotivacional = (parametros) => {
     
    return <Card>
        {/* <p className="frase"> */}
        <p>
           "{parametros.frase}"
        </p>
        <Rodape autor={parametros.autor} criadaEm={parametros.criadaEm}/>
    </Card> 
}

export default FraseMotivacional;