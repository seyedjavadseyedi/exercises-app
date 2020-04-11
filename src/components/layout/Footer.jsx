import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'

const Footer = () => {
  return (
    <Paper>
      <Tabs indicatorColor='primary' value={0} centered textColor='primary'>
        <Tab label='item one'></Tab>
        <Tab label='item two'></Tab>
        <Tab label='item three'></Tab>
      </Tabs>
    </Paper>
  )
}

export default Footer
