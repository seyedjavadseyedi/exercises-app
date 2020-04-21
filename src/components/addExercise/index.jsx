import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../../store/GlobalContex'

import {
  toggleDialog,
  setFormItems,
  getExercisesByMuscles,
  addNewExercise,
} from '../../store/actions/GlobalActions'

import {
  Fab,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles((theme) => ({
  formItem: {
    width: 500,
  },
}))

const AddExercise = () => {
  const classes = useStyles()
  const {
    state: {
      dialog: { open },
      // change muscles name to the category to prevent conflict
      muscles: categories,
      newExercise,
    },
    dispatch,
  } = useContext(GlobalContext)

  const handleFormItems = (name) => ({ target: { value } }) => {
    const newItem = {
      ...newExercise,
      [name]: value,
    }

    setFormItems(dispatch, newItem)
  }


  useEffect(() => {
    getExercisesByMuscles(dispatch)
  }, [dispatch, newExercise])

  
  return (
    <>
      <Fab
        color='secondary'
        size='medium'
        onClick={() => toggleDialog(dispatch, open)}
      >
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={() => toggleDialog(dispatch, open)}>
        <DialogTitle>Create a new exercise</DialogTitle>

        <DialogContent>
          <DialogContentText>Please fill out the form below</DialogContentText>
          <form>
            <TextField
              variant='outlined'
              size='small'
              label='Title'
              autoFocus
              required
              value={newExercise.title}
              onChange={handleFormItems('title')}
              className={classes.formItem}
              margin='normal'
            />
            <br />
            <FormControl
              variant='outlined'
              className={classes.formItem}
              margin='normal'
              size='small'
              required
            >
              <InputLabel>Muscles</InputLabel>
              <Select
                label='Muscles'
                value={newExercise.muscles}
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
              value={newExercise.description}
              onChange={handleFormItems('description')}
              className={classes.formItem}
              margin='normal'
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            color='primary'
            variant='contained'
            onClick={() => addNewExercise(dispatch, newExercise)}
          >
            Add Exercise
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddExercise
