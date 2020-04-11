import React, { createContext, useReducer } from 'react'
import { GlobalReducer } from './GlobalReducer'

//initial state
const initialState = {
  muscles: [],
  exercises: [],
}

// create global context
const GlobalContext = createContext()

// Provider Component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState)
  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }
