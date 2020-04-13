import React, { useState } from 'react'

import {
  Fab,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'

const AddExercise = () => {
  const [open, setOpen] = useState(false)

  const toggleDialog = () => {
    setOpen(!open)
  }

  return (
    <>
      <Fab color='secondary' size='medium' onClick={toggleDialog}>
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={toggleDialog}>
        <DialogTitle>Create a new exercise</DialogTitle>

        <DialogContent>
          <DialogContentText>Please fill out the form below</DialogContentText>
          <form></form>
        </DialogContent>
        <DialogActions>
          <Button color='primary' variant='contained'>Add Exercise</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddExercise
