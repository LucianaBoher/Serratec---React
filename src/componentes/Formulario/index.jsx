import { useState } from 'react'
import './estilos.css'

const Formulario = () => {

    const [autor, setAutor] = useState('')
    const [texto, setTexto] = useState('')

    const manipuladorAutor = (evento) => {
        if(evento.target.value.split(' ').length <= 2){
            setAutor(evento.target.value)
        }
    }

    const manipuladorTexto = (evento) => {
        setTexto(evento.target.value)
    }

    const salvar = (evento) => {
        evento.preventDefault()
        console.log('Form submetido');
        console.log(autor);
        console.log(texto);

        const frase = {}
        frase.autor = autor;
        frase.texto = texto;
        console.log(frase);
    }


    return (
        <form onSubmit={salvar}>
            <div>
                <label>Autor</label>
                <input value={autor} onChange={manipuladorAutor}/>
            </div>
            <div>
                <label>Frase</label>
                <textarea value={texto} onChange={manipuladorTexto}></textarea>
            </div>
            <button>
                Salvar
            </button>
        </form>
    )
}

export default Formulario