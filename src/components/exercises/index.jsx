import React, { useEffect, useContext } from 'react'

import { GlobalContext } from '../../store/GlobalContex'
import {getExercises} from '../../store/actions/GlobalActions'

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
    getExercises(dispatch)

  }, [dispatch])

  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      <Grid item sm>
        <Paper className={classes.paper}>
          <ul>
            {state.exercises.map(([group, exercises]) => (
              <li>{group}</li>
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
