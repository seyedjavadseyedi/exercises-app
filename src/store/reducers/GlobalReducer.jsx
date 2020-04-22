import {
  GET_MUSCLES,
  GET_EXERCISES_BY_MUSCLES,
  SELECTED_CATEGORY,
  SELECTED_EXERCISE,
  TOGGLE_DIALOG,
  OPEN_NEW_EXERCISE_DIALOG,
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
  exerciseDialog: {
    open: false,
    dialogType: 'new',
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
        exerciseDialog: {
          open: action.payload,
        },
        newExercise: {
          title: '',
          description: '',
          muscles: '',
        },
      }
    case OPEN_NEW_EXERCISE_DIALOG: {
      return {
        ...state,
        exerciseDialog: {
          open: true
        }
      }
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
        exerciseDialog: {
          open: false
        }
      }
    default:
      return state
  }
}
