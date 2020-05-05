import React from 'react'

// dispatch
import { useDispatch } from '../store/GlobalContex'

// actions
import { openNewExerciseDialog } from '../store/actions/GlobalActions'

// material-ui components
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const AddExercise = () => {

  // get dispatch
  const {
    dispatch,
  } = useDispatch()

  return (
    <>
      <Fab
        color='secondary'
        size='small'
        onClick={() => openNewExerciseDialog(dispatch)}
      >
        <AddIcon />
      </Fab>
    </>
  )
}

export default AddExercise
