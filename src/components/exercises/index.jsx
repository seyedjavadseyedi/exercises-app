import React, { useEffect, useContext } from 'react'

import { GlobalContext } from '../../store/GlobalContex'
import {
  getExercisesByMuscles,
  selectedExercise,
} from '../../store/actions/GlobalActions'

import {
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: 10,
    marginBottom: 10,
    height: 400,
    overflowY: 'auto',
  },
}))

const Exercises = () => {
  const {
    state: {
      exercises,
      category,
      exercise: { title, description },
    },
    dispatch,
  } = useContext(GlobalContext)

  useEffect(() => {
    getExercisesByMuscles(dispatch)
  }, [dispatch])

  const classes = useStyles()


  return (
    <Grid container spacing={2}>
      <Grid item sm>
        <Paper className={classes.paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <React.Fragment key={group}>
                <Typography variant='h5'>{group}</Typography>
                <List component='ul'>
                  {exercises.map((exercise) => (
                    <ListItem
                      key={exercise.id}
                      button
                      dense
                      onClick={() => selectedExercise(dispatch, exercise)}
                    >
                      <ListItemText primary={exercise.title} />
                    </ListItem>
                  ))}
                </List>
              </React.Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper className={classes.paper}>
          <Typography variant='h4'>{title}</Typography>
          <Typography variant='body1'>{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Exercises
