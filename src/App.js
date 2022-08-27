import './App.css'
import Interval from './components/Interval'
import Mean from './components/Mean'
import Sum from './components/Sum'
import Randon from './components/Randon'

function App () {
  return (
    <div className='App'>
      <h1>Exercício React Redux (Simples)</h1>
      <div className='linha'>
        <Interval />
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
