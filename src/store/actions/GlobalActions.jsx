import { GET_MUSCLES, GET_EXERCISES } from './types'
import axios from 'axios'

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

export const getExercises = (dispatch) => {
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
        type: GET_EXERCISES,
        payload: exercises
      })
    })
    .catch((err) => console.log(err))
}
