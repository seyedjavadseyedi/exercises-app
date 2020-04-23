import {
  GET_MUSCLES,
  GET_EXERCISES_BY_MUSCLES,
  SELECTED_CATEGORY,
  SELECTED_EXERCISE,
  CLOSE_DIALOG,
  OPEN_NEW_EXERCISE_DIALOG,
  OPEN_EDIT_EXERCISE_DIALOG,
  SET_FORM_ITEMS,
  ADD_NEW_EXERCISE,
  EDIT_EXERCISE
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
    data: {
      title: '',
      description: '',
      muscles: '',
    }
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
    case CLOSE_DIALOG:
      return {
        ...state,
        exerciseDialog: {
          open: false,
          data: {
            title: '',
            description: '',
            muscles: '',
          }
        },
      }
    case OPEN_NEW_EXERCISE_DIALOG: {
      return {
        ...state,
        exerciseDialog: {
          open: true,
          dialogType: 'new',
          data: {
            title: '',
            description: '',
            muscles: '',
          }
        },
      }
    }
    case OPEN_EDIT_EXERCISE_DIALOG: {
      return {
        ...state,
        exerciseDialog: {
          open: true,
          dialogType: 'edit',
          data: action.exercise
        },
      }
    }
    case SET_FORM_ITEMS:
      return {
        ...state,
        exerciseDialog: {
          open: true,
          dialogType: action.dialogType,
          data: action.payload,
        },
      }  
    case ADD_NEW_EXERCISE:
      return {
        ...state,
        exerciseDialog: {
          open: false,
          data: action.payload
        },
      }
    case EDIT_EXERCISE: 
      return {
        ...state,
        exerciseDialog: {
          open: false,
          data: {
            title: '',
            description: '',
            muscles: ''
          }
        }
      }  
    default:
      return state
  }
}
