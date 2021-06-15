const Rodape = (parametros) => {

    const opcoes = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const data = parametros.criadaEm.toLocaleString('pt-BR', opcoes)
    //Fragment
    return <>
        <p className="autor">
            Autor: {parametros.autor} 
        </p>
        <p>
            Postada em: <strong>{data}</strong>
        </p>
        {/* <hr /> */}
    </>
}

export default Rodape