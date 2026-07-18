import React, { useReducer } from 'react'

const UseReducerHook = () => {
  const reducer = (state, action) => {
    switch (action) {
      case "incre":
        return state + 1
        case "decre":
        return state - 1
        case "reset":
        return state = 0
    
      default:
        alert("Something went wrong")
        return state
    }
  }
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div className='flex items-center justify-center w-screen h-screen flex-col'>
      <h1 className='text-9xl'>{count}</h1>
      <div>
         <button onClick={() => dispatch("incre")} className='border-8 p-2 bg-red-400'>Increment</button>
         <button onClick={() => dispatch("decre")} className='border-8 p-2 bg-green-400'>Decrement</button>
         <button onClick={() => dispatch("resets")} className='border-8 p-2 bg-blue-400'>Reset</button>
      </div>
    </div>
  )
}

export default UseReducerHook
