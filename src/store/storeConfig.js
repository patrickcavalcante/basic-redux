import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux'

const reducer = combineReducers({
  numbers: function(state, action) {
    switch(action.type) {
      case 'NUN_MIN_CHANGED': 
        return {
          ...state,
          min: action.payload
        }
      case 'NUN_MAX_CHANGED': 
        return {
          ...state,
          max: action.payload
        }
      default: 
        return {
          min: 7,
          max: 31
        }
    }
  }
})

function storeConfig() {
   return createStore(reducer)
}

export default storeConfig