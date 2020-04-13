import React, {useEffect, useContext } from 'react'
import { GlobalContext } from "../../store/GlobalContex";
import { toggleDialog } from "../../store/actions/GlobalActions";


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
  const {state: {dialog: {open}}, dispatch} = useContext(GlobalContext)


  return (
    <>
      <Fab color='secondary' size='medium' onClick={() => toggleDialog(dispatch, open)}>
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={() => toggleDialog(dispatch, open)}>
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
