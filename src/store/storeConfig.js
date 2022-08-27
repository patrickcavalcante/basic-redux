import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux'

const reducer = combineReducers({
  numeros: function(state, action) {
    return {
      min: 7,
      max: 31
    }
  }
})

function storeConfig() {
   return createStore(reducer)
}

export default storeConfig