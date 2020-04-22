import axios from 'axios'
import {
  GET_MUSCLES,
  GET_EXERCISES_BY_MUSCLES,
  SELECTED_CATEGORY,
  SELECTED_EXERCISE,
  TOGGLE_DIALOG,
  OPEN_NEW_EXERCISE_DIALOG,
  SET_FORM_ITEMS,
  ADD_NEW_EXERCISE,
} from './types'

export const getMuscles = (dispatch) => {
  axios
    .get('http://localhost:8000/muscles')
    .then((res) => {
      dispatch({
        type: GET_MUSCLES,
        payload: res.data,
      })
    })
    .catch((err) => console.log(err))
}

export const getExercisesByMuscles = (dispatch) => {
  axios
    .get('http://localhost:8000/exercises')
    .then((res) => {
      const exercises = Object.entries(
        res.data.reduce((exercises, exercise) => {
          const { muscles } = exercise
          exercises[muscles] = exercises[muscles]
            ? [...exercises[muscles], exercise]
            : [exercise]
          return exercises
        }, {})
      )
      dispatch({
        type: GET_EXERCISES_BY_MUSCLES,
        payload: exercises,
      })
    })
    .catch((err) => console.log(err))
}

export const selectedCategory = (dispatch, categoryItem) => {
  dispatch({
    type: SELECTED_CATEGORY,
    payload: categoryItem,
  })
}

export const selectedExercise = (dispatch, exercise) => {
  dispatch({
    type: SELECTED_EXERCISE,
    payload: exercise,
  })
}

export const toggleDialog = (dispatch, open) => {
  dispatch({
    type: TOGGLE_DIALOG,
    payload: !open,
  })
}

export const openNewExerciseDialog = (dispatch) => {
  dispatch({
    type: OPEN_NEW_EXERCISE_DIALOG
  })
}

export const setFormItems = (dispatch, newItem) => {
  dispatch({
    type: SET_FORM_ITEMS,
    payload: newItem,
  })
}

export const addNewExercise = (dispatch, newExercise) => {
  const addNewItem = {
    id: newExercise.title.toLocaleLowerCase().replace(/ /g, '-'),
    ...newExercise,
  }
  axios
    .post('http://localhost:8000/exercises', addNewItem)
    .then(() => {
      dispatch({
        type: ADD_NEW_EXERCISE,
        payload: addNewItem,
      })
    })
    .catch((err) => console.log(err))
}

export const deleteExercise = (dispatch, id) => {
  axios
    .delete(`http://localhost:8000/exercises/${id}`)
    .then((res) => {
      console.log(res, `deleted ${id} item`)
    })
    .catch((err) => console.log(err))

  getExercisesByMuscles(dispatch)
}
