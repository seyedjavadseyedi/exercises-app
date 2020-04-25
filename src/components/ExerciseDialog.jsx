import React, { useEffect, useContext } from 'react'

// global context
import { GlobalContext } from '../store/GlobalContex'

// actions
import {
  setFormItems,
  getExercisesByMuscles,
  addNewExercise,
  closeDialog,
  editExercise,
} from '../store/actions/GlobalActions'

// material-ui components
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  AppBar,
  Toolbar,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'

const ExerciseDialog = () => {

  // get state & dispatch
  const {
    state: {
      exerciseDialog: { open, data, dialogType },
      // change muscles name to the category to prevent conflict
      muscles: categories,
    },
    dispatch,
  } = useContext(GlobalContext)

  const handleFormItems = (name) => ({ target: { value } }) => {
    const newItem = {
      ...data,
      [name]: value,
    }
    setFormItems(dispatch, newItem, dialogType)
  }

  useEffect(() => {
    getExercisesByMuscles(dispatch)
  }, [dispatch, data])

  

  return (
    <Dialog open={open} onClose={() => closeDialog(dispatch)} fullWidth maxWidth='xs'>
      <AppBar
        position='static'
        color={dialogType === 'new' ? 'primary' : 'secondary'}
      >
        <Toolbar variant='dense'>
          {dialogType === 'new' ? (
            <DialogTitle>Create a new exercise</DialogTitle>
          ) : (
            <DialogTitle>Edit Exercise</DialogTitle>
          )}
        </Toolbar>
      </AppBar>

      <DialogContent>
        {dialogType === 'new' ? (
          <DialogContentText>Please fill out the form below</DialogContentText>
        ) : (
          <DialogContentText>You can edit exercise</DialogContentText>
        )}
        <form>
          <TextField
            variant='outlined'
            size='small'
            label='Title'
            autoFocus
            required
            value={data.title}
            onChange={handleFormItems('title')}
            fullWidth
            margin='normal'
          />
          <br />
          <FormControl
            variant='outlined'
            fullWidth
            margin='normal'
            size='small'
            required
          >
            <InputLabel>Muscles</InputLabel>
            <Select
              label='Muscles'
              value={data.muscles}
              onChange={handleFormItems('muscles')}
            >
              {categories.map((category) => (
                <MenuItem value={category} key={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            variant='outlined'
            size='small'
            label='Description'
            multiline
            rows='4'
            value={data.description}
            onChange={handleFormItems('description')}
            fullWidth
            margin='normal'
          />
        </form>
      </DialogContent>
      <DialogActions>
        {dialogType === 'new' ? (
          <Button
            color='primary'
            variant='contained'
            onClick={() => addNewExercise(dispatch, data)}
            disabled={!data.title || !data.muscles}
          >
            Add Exercise
          </Button>
        ) : (
          <Button
            color='secondary'
            variant='contained'
            onClick={() => editExercise(dispatch, data)}
            disabled={!data.title || !data.muscles}
          >
            Edit Exercise
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default ExerciseDialog
