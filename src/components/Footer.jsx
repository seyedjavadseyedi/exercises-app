import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../store/GlobalContex'
import { getMuscles, selectedCategory } from '../store/actions/GlobalActions'

import { Paper, Tabs, Tab } from '@material-ui/core'

const Footer = () => {
  const {
    state: { category, muscles },
    dispatch,
  } = useContext(GlobalContext)

  const index = category
    ? muscles.findIndex((group) => group === category) + 1
    : 0
  const onSelected = (e, index) => {
    const categoryItem = index !== 0 ?  muscles[index - 1] : 0
    selectedCategory(dispatch, categoryItem)
  }

  useEffect(() => {
    getMuscles(dispatch)
  }, [dispatch])

  return (
    <Paper>
      <Tabs
        indicatorColor='primary'
        value={index}
        onChange={onSelected}
        centered
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
