import * as React from 'react'

type Action = {type: 'increment'} | {type: 'decrement'}
type Dispatch = (action: Action) => void
type State = {count: number}
type CountProviderProps = {children: React.ReactNode}

const CounterStateContext = React.createContext<
  {state: State; dispatch: Dispatch} | undefined
>(undefined)

function counterReducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment': {
      return {count: state.count + 1}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function CounterProvider({children}: CountProviderProps) {
  const [state, dispatch] = React.useReducer(counterReducer, {count: 0})
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch}
  return (
    <CounterStateContext.Provider value={value}>
      {children}
    </CounterStateContext.Provider>
  )
}

function useCount() {
  const context = React.useContext(CounterStateContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {CounterProvider, useCount}