import { createContext, useContext, useReducer } from 'react'
import { reducer, initialState } from '../utils/Reducer'

const StateContext = createContext()
const useStateProvider = () => useContext(StateContext)
const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

export { StateContext, useStateProvider, StateProvider }
