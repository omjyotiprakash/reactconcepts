// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const UseStateHook = () => {
  //! const [ initial value, update function ] = useState( initial value )

  const [count, setCount] = useState(0)
  const addition = () => {
    setCount(count + 1)
  }
  const subtraction = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h1 className='text-9xl'>{count}</h1>
      <button onClick={addition} className='border-2 text-xl'>Add 1</button>
      <button onClick={subtraction} className='border-2 text-xl'>Sub 1</button>
    </div>
  )
}

export default UseStateHook
