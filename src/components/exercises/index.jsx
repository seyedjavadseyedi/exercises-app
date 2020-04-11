import React, { useEffect, useContext } from 'react'

import { GlobalContext } from '../../store/globalContext/GlobalContex'

import { Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: 10,
    marginBottom: 10,
  },
}))

const Exercises = () => {
  const { state, dispatch } = useContext(GlobalContext)
  useEffect(() => {
    axios
      .get('http://localhost:8000/exercises')
      .then((res) => {
        console.log(res.data)

        dispatch({
          type: 'GET_EXERCISES',
          payload: res.data,
        })
      })
      .catch((err) => console.log(err))
  }, [dispatch])
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      <Grid item sm>
        <Paper className={classes.paper}>
          <ul>
            {state.exercises.map((item) => (
              <li>{item.title}</li>
            ))}
          </ul>
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper className={classes.paper}>right panel</Paper>
      </Grid>
    </Grid>
  )
}

export default Exercises
