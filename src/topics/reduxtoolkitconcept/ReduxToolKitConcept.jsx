import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../../features/counterSlice';

const ReduxToolKitConcept = () => {
  const {count} = useSelector((state) => state.counter)
  console.log(count)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <hr />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default ReduxToolKitConcept
