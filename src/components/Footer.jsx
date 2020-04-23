import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../store/GlobalContex'
import { getMuscles, selectedCategory } from '../store/actions/GlobalActions'

import { Paper, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  footerTabs: {
    margin: theme.spacing(1),
  },
}))
const Footer = () => {
  const {
    state: { category, muscles },
    dispatch,
  } = useContext(GlobalContext)

  const index = category
    ? muscles.findIndex((group) => group === category) + 1
    : 0
  const onSelected = (e, index) => {
    const categoryItem = index !== 0 ? muscles[index - 1] : 0
    selectedCategory(dispatch, categoryItem)
  }

  useEffect(() => {
    getMuscles(dispatch)
  }, [dispatch])

  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Paper className={classes.footerTabs}>
      <Tabs
        indicatorColor='primary'
        value={index}
        onChange={onSelected}
        variant={!matches ? 'scrollable' : 'standard'}
        centered={matches ? true : false}
        textColor='primary'
      >
        <Tab label='All'></Tab>
        {muscles.map((item, index) => (
          <Tab key={index} label={item}></Tab>
        ))}
      </Tabs>
    </Paper>
  )
}

export default Footer
