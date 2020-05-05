import React, { useEffect } from 'react'

// state & dispatch
import { useStore, useDispatch } from '../store/GlobalContex'
// actions
import { getMuscles, selectedCategory } from '../store/actions/GlobalActions'

// material-ui components
import { Tabs, Tab, AppBar } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Footer = () => {
  // get state
  const {
    state: { category, muscles },
  } = useStore()
  // get dispatch
  const { dispatch } = useDispatch()

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

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <AppBar position='static'>
      <Tabs
        value={index}
        onChange={onSelected}
        variant={!matches ? 'scrollable' : 'standard'}
        centered={matches ? true : false}
        indicatorColor='secondary'
        textColor='secondary'
      >
        <Tab label='All'></Tab>
        {muscles.map((item, index) => (
          <Tab key={index} label={item}></Tab>
        ))}
      </Tabs>
    </AppBar>
  )
}

export default Footer
