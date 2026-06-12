// eslint-disable-next-line no-unused-vars
import React from 'react'

const Child = ({name = 'default user'}) => {
  console.log("child file")
  return (
    <div className='flex items-center justify-center relative top-75 text-5xl font-bold'>My name is {name}</div>
  )
}

export default Child
