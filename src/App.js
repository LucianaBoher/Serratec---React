import FraseMotivacional from './componentes/FraseMotivacional/FraseMotivacional';
import './App.css'

// function App() {

const App = () => {

  //const date = new Date()

  const frases = [
    {
      frase: 'Hoje tem muito React pra espantar o frio.',
      autor: 'Euzinha',
      criadaEm: new Date(2021, 5, 1)
    },
    {
      frase: 'Seja a mudança que você quer ver no mundo.',
      autor: 'Autor desconhecido',
      criadaEm: new Date(2021, 5, 2)
    },
    {
      frase: 'Você é capaz. Acredite em si mesmo.',
      autor: 'Lorival Lopez',
      criadaEm: new Date(2021, 5, 3)
    },
    {
      frase: 'Não se cobre tanto. A vida está te pedindo mais leveza.',
      autor: 'RobsonHrique',
      criadaEm: new Date()
    }
  ] 
   
  return (
    <div className="container">
      <h1>Frases motivacionais para esquentar nosso dia!</h1>
      <FraseMotivacional frase={frases[0].frase} autor={frases[0].autor} criadaEm={frases[0].criadaEm}/>
      <FraseMotivacional frase={frases[1].frase} autor={frases[1].autor} criadaEm={frases[1].criadaEm}/>
      <FraseMotivacional frase={frases[2].frase} autor={frases[2].autor} criadaEm={frases[2].criadaEm}/>
      <FraseMotivacional frase={frases[3].frase} autor={frases[3].autor} criadaEm={frases[3].criadaEm}/>
      {/* <FraseMotivacional frase="Gustavo tá brigando pra roubar o lugar de ILUMINADO do Vinicius." autor="Claudia Maia" criadaEm="date"/> */}
    </div>
  );
}

export default App;
