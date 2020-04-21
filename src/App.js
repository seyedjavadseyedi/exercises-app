import React from 'react'
import { GlobalProvider } from './store/GlobalContex'
import Header from './components/Header'
import ExercisesList from './components/ExercisesList'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <ExercisesList />
        <Footer />
      </GlobalProvider>
    </>
  )
}

export default App
