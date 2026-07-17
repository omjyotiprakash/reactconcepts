import React from 'react'
import Parent from './Parent';

const Child = ({data}) => {

  console.log("Child")
  return (
    <div>
      {data}
    </div>
  )
}

export default React.memo(Child)
