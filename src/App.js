import './App.css'
import Card from './components/Card'
import Intervalo from './components/Intervalo'

function App () {
  return (
    <div className='App'>
      <h1>Exercício React Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo />
      </div>
      <div className='linha'>
        <Card title='Titulo 2' green>
          Y
        </Card>
        <Card title='Titulo 3' blue>
          A
        </Card>
        <Card title='Titulo 4' purple>
          B
        </Card>
      </div>
    </div>
  )
}

export default App
