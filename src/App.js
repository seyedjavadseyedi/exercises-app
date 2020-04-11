import React from 'react'
import { GlobalProvider } from './store/globalContext/GlobalContex'
import { Header, Footer } from './components/layout'
import Exercises from './components/exercises'

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Exercises />
        <Footer />
      </GlobalProvider>
    </>
  )
}

export default App
