// eslint-disable-next-line no-unused-vars
import React from 'react'
import Child from './Child';

const Parent = () => {
  const data = ["sundari", "sheela", "leela"]
  return (
    <div>
      <Child name="sundari" />
      <Child name="sheela" />
      <Child name="leela" />
      <Child/>
    </div>
  )
}

export default Parent
