import './Interval.css'
import React from 'react'
import Card from '../Card'
import { connect } from 'react-redux'
import { changeMinimumnNunber, changeMaxNunber } from '../../store/actions/numbers'

const Interval = props => {
  const { min, max } = props
  return (
    <Card title='Intervalo de Números' red>
      <div className='Interval'>
        <span>
          <strong>Mínimo:</strong>
          <input
            type='number'
            value={min}
            onChange={e => props.updateMinNumber(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type='number'
            value={max}
            onChange={e => props.updateMaxNumber(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    min: state.numbers.min,
    max: state.numbers.max
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateMinNumber (newNumber) {
      const action = changeMinimumnNunber(newNumber)
      dispatch(action)
    },
    updateMaxNumber (newNumber) {
      const action = changeMaxNunber(newNumber)
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval)
