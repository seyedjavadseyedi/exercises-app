import React, { useEffect, useContext } from 'react'

// global context
import { GlobalContext } from '../store/GlobalContex'

// Actions
import {
  getExercisesByMuscles,
  selectedExercise,
  deleteExercise,
  openEditExerciseDialog,
} from '../store/actions/GlobalActions'

// material-ui components
import {
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  IconButton,
} from '@material-ui/core'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import { makeStyles } from '@material-ui/core/styles'

// jss
const useStyles = makeStyles((theme) => ({
  items: {
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100% - 56px - 48px)'
    },
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 68px - 48px)'
    }
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      height: 'calc(50% - 8px)',
    },
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 8px)',
    },
    padding: theme.spacing(1),
  },
  paper: {
    overflowY: 'auto',
    height: '100%',
    padding: theme.spacing(2),
  },
  // global styles
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
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
    <Grid container className={classes.items}>
      <Grid item className={classes.item} xs={12} sm={6}>
        <Paper className={classes.paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <React.Fragment key={group}>
                <Typography color='secondary' variant='h5'>{group}</Typography>
                <List component='ul'>
                  {exercises.map((exercise) => (
                    <ListItem
                      key={exercise.id}
                      button
                      dense
                      onClick={() => selectedExercise(dispatch, exercise)}
                    >
                      <ListItemText primary={exercise.title} />
                      <ListItemSecondaryAction>
                        <IconButton
                          onClick={() =>
                            openEditExerciseDialog(dispatch, exercise)
                          }
                          color='secondary'
                        >
                          <EditOutlinedIcon  fontSize='small'/>
                        </IconButton>
                        <IconButton
                          onClick={() => deleteExercise(dispatch, exercise.id)}
                          color='secondary'
                        >
                          <DeleteForeverOutlinedIcon fontSize='small'/>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </React.Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item className={classes.item} xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography variant='h4' color='secondary' gutterBottom>
            {title}
          </Typography>
          <Typography variant='body1'>
            {!description
              ? 'This exercise have not description, you can add with edite icon'
              : description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Exercises
