// eslint-disable-next-line no-unused-vars
import React from 'react'
import Child from './Child';

const Parent = () => {
  console.log("parent file")
  return (
    <div>
      <Child/>
    </div>
  )
}

export default Parent
