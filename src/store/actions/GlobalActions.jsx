import axios from 'axios'
import { GET_MUSCLES, GET_EXERCISES_BY_MUSCLES, SELECTED_CATEGORY, SELECTED_EXERCISE, TOGGLE_DIALOG } from './types'


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
    payload: exercise
  })
}

export const toggleDialog = (dispatch, open) => {
  dispatch({
    type: TOGGLE_DIALOG,
    payload: !open
  })
}