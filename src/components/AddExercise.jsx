import React, { useContext } from 'react'

// global context
import { GlobalContext } from '../store/GlobalContex'

// actions
import { openNewExerciseDialog } from '../store/actions/GlobalActions'

// material-ui components
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const AddExercise = () => {

  // get state & dispatch
  const {
    dispatch,
  } = useContext(GlobalContext)

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
