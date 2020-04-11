import {GET_MUSCLES} from '../actions/types'

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case GET_MUSCLES:
      return {
        ...state,
        muscles: action.payload,
      }
    case 'GET_EXERCISES':
      
      return {
        ...state,
        exercises: action.payload,
      }
    default:
      return state
  }
}
