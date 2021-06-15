import './card.css'

 const Card (parametros) => {
    return <div className="card">
        {parametros.children}
    </div>
}

export default Card