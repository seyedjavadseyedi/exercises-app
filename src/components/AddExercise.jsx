import React, { useContext } from 'react'

// local component
import ExerciseDialog from './ExerciseDialog'

// global context
import { GlobalContext } from '../store/GlobalContex'

// actions
import { toggleDialog } from '../store/actions/GlobalActions'

// material-ui components
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'



const AddExercise = () => {

  // get state & dispatch
  const {
    state: {
      dialog: { open },
    },
    dispatch,
  } = useContext(GlobalContext)

  return (
    <>
      <Fab
        color='secondary'
        size='medium'
        onClick={() => toggleDialog(dispatch, open)}
      >
        <AddIcon />
      </Fab>

      <ExerciseDialog />
    </>
  )
}

export default AddExercise
