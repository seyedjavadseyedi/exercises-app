import React from 'react'
import  AddExercise  from "./AddExercise";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  logoName: {
    flex: 1
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5' component='h1' className={classes.logoName} >Exercises Database</Typography>
        <AddExercise />
      </Toolbar>
    </AppBar>
  )
}

export default Header
