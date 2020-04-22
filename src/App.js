import React from 'react'
import { GlobalProvider } from './store/GlobalContex'
import Header from './components/Header'
import ExercisesList from './components/ExercisesList'
import ExerciseDialog from './components/ExerciseDialog'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <ExercisesList />
        <ExerciseDialog />
        <Footer />
      </GlobalProvider>
    </>
  )
}

export default App
