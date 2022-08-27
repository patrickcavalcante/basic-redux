import {
  NUN_MIN_CHANGED,
  NUN_MAX_CHANGED
} from '../actions/actionTypes'

const initialState = {
  min: 7,
  max: 31
}

export default function NumberReducer (state = initialState, action) {
  switch(action.type) {
    case NUN_MIN_CHANGED: 
      return {
        ...state,
        min: action.payload
      }
    case NUN_MAX_CHANGED: 
      return {
        ...state,
        max: action.payload
      }
    default: 
      return state
  }
}