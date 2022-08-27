import { 
  NUN_MAX_CHANGED,
  NUN_MIN_CHANGED
} from './actionTypes'
 
// Action Creator Atualizar Valor Mínimo
export function changeMinimumnNunber(newNumber) {
  return {
    type: NUN_MIN_CHANGED,
    payload: newNumber
  }
}

// Action Creator Atualizar Valor Máximo
export function changeMaxNunber(newNumber) {
  return {
    type: NUN_MAX_CHANGED,
    payload: newNumber
  }
}