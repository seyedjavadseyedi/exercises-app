import {GET_MUSCLES, GET_EXERCISES_BY_MUSCLES} from '../actions/types'

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case GET_MUSCLES:
      return {
        ...state,
        muscles: action.payload,
      }
    case GET_EXERCISES_BY_MUSCLES:
      
      return {
        ...state,
        exercises: action.payload,
      }
    default:
      return state
  }
}
