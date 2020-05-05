import React, { createContext, useReducer, useContext } from 'react'
import { GlobalReducer, initialState } from './reducers/GlobalReducer'

// create store context
const StoreContext = createContext()
// create dispatch context
const DispatchContext = createContext()

// Provider Component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState)
  return (
    <DispatchContext.Provider value={{ dispatch }}>
      <StoreContext.Provider value={{ state }}>
        {children}
      </StoreContext.Provider>
    </DispatchContext.Provider>
  )
}

// custom hooks
const useStore = () => useContext(StoreContext)
const useDispatch = () => useContext(DispatchContext)

export { useStore, useDispatch, GlobalProvider }
