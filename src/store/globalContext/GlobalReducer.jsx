import axios from 'axios'

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'GET_EXERCISES':
      return {
        ...state,
        exercises: action.payload
      }
    default:
      return state
  }
}
