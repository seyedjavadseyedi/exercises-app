import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { GlobalProvider } from './store/GlobalContex'
import Header from './components/Header'
import ExercisesList from './components/ExercisesList'
import ExerciseDialog from './components/ExerciseDialog'
import Footer from './components/Footer'

import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './themeConfig'

function App() {
  return (
    <>
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <ExercisesList />
          <ExerciseDialog />
          <Footer />
        </ThemeProvider>
      </GlobalProvider>
    </>
  )
}

export default App
