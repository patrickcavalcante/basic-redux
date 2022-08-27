import React from 'react'
import Card from './Card/index'
import { connect } from 'react-redux'

const Soma = props => {
  const { min, max } = props
  return (
    <Card title='Soma dos Números' blue>
      <div>
        <span>
          <strong>Resultado: </strong>
          <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Soma)
