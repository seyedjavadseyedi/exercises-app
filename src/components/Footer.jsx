import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../store/GlobalContex'
import { useStore } from "../store/GlobalContex"
import { getMuscles, selectedCategory } from '../store/actions/GlobalActions'

import { Tabs, Tab, AppBar } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Footer = () => {
  const {state: { category, muscles }} = useStore()
  const {
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
