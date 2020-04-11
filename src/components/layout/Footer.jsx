import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../../store/GlobalContex'
import { getMuscles } from '../../store/actions/GlobalActions'

import { Paper, Tabs, Tab } from '@material-ui/core'

const Footer = () => {
  const { state, dispatch } = useContext(GlobalContext)

  useEffect(() => {
    getMuscles(dispatch)

  }, [dispatch])

  return (
    <Paper>
      <Tabs indicatorColor='primary' value={0} centered textColor='primary'>
        <Tab label='All'></Tab>
        {state.muscles.map((item, index) => (
          <Tab key={index} label={item}></Tab>
        ))}
      </Tabs>
    </Paper>
  )
}

export default Footer
