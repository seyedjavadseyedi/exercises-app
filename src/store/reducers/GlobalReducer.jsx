import { GET_MUSCLES, GET_EXERCISES_BY_MUSCLES, SET_CATEGORY } from '../actions/types'

//initial state
export const initialState = {
  muscles: [],
  exercises: [],
  category: 0
}

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
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    default:
      return state
  }
}
