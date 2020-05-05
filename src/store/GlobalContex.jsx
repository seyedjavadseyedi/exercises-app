import React, { createContext, useReducer, useContext } from 'react'
import { GlobalReducer, initialState } from './reducers/GlobalReducer'

// create global context
const GlobalContext = createContext()

// create store context
const StoreContext = createContext()

// Provider Component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState)
  return (
    <StoreContext.Provider value={state}>
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    </StoreContext.Provider>
  )
}

// custom hooks
export const useStore = () => useContext(StoreContext)

export { GlobalContext, GlobalProvider }
