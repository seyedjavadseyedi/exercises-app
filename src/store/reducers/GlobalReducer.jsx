import {
  GET_MUSCLES,
  GET_EXERCISES_BY_MUSCLES,
  SELECTED_CATEGORY,
  SELECTED_EXERCISE,
  TOGGLE_DIALOG,
  SET_FORM_ITEMS,
  ADD_NEW_EXERCISE,
} from '../actions/types'

//initial state
export const initialState = {
  muscles: [],
  exercises: [],
  category: 0,
  exercise: {
    id: '',
    title: 'Welcome',
    description: 'Please select an exercise from the list on the left',
  },
  dialog: {
    open: false,
  },
  newExercise: {
    title: '',
    description: '',
    muscles: '',
  },
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
    case SELECTED_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    case SELECTED_EXERCISE:
      return {
        ...state,
        exercise: action.payload,
      }
    case TOGGLE_DIALOG:
      return {
        ...state,
        dialog: {
          open: action.payload,
        },
      }
    case SET_FORM_ITEMS:
      return {
        ...state,
        newExercise: action.payload,
      }
    case ADD_NEW_EXERCISE:
      return {
        ...state,
        newExercise: action.payload,
        dialog: {
          open: false,
        },
        state: {
          newExercise: {
            title: '',
            description: '',
            muscles: '',
          },
        }
      }
    default:
      return state
  }
}
