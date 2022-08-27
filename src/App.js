import './App.css'
import Intervalo from './components/Intervalo'
import Mean from './components/Mean'
import Sum from './components/Sum'
import Randon from './components/Randon'

function App () {
  return (
    <div className='App'>
      <h1>Exercício React Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo />
      </div>
      <div className='linha'>
        <Mean />
        <Sum />
        <Randon />
      </div>
    </div>
  )
}

export default App
