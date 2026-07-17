import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0)

  const username = "sundari"
  console.log("Parent")
  return (
    <div>
      {count}
      <button onClick={() => {count+1}}>Update</button>
      <Child data = {username}/>
    </div>
  )
}

export default Parent
