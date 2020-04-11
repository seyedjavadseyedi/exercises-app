import React from 'react'
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5' component='h1' >Exercises Database</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
