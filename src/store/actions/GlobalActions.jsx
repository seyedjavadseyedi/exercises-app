import axios from 'axios'
import { GET_MUSCLES, GET_EXERCISES_BY_MUSCLES, SET_CATEGORY } from './types'

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

export const setCategory = (dispatch, selectedCategory) => {
  dispatch({
    type: SET_CATEGORY,
    payload: selectedCategory,
  })
}
