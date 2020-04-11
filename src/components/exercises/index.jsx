import React from 'react'
import { Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: 10,
    marginBottom: 10,
  },
}))

const Exercises = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      <Grid item sm>
        <Paper className={classes.paper}>left panel</Paper>
      </Grid>
      <Grid item sm>
        <Paper className={classes.paper}>right panel</Paper>
      </Grid>
    </Grid>
  )
}

export default Exercises
