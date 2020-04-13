import React, { createContext, useReducer } from 'react'
import { GlobalReducer, initialState } from './reducers/GlobalReducer'


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
