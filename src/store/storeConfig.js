import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux'
import NumberReducer from './reducers/numbers';

const reducer = combineReducers({
  numbers: NumberReducer
})

function storeConfig() {
   return createStore(reducer)
}

export default storeConfig