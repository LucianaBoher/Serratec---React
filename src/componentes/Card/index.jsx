import './card.css'

 function Card (parametros) {
    return <div className="card">
        {parametros.children}
    </div>
}

export default Card