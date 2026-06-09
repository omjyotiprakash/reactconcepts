// eslint-disable-next-line no-unused-vars
import React from 'react'

const Jsx_Rules = () => {
  // 1. We can write all js code

  const theme = false

  const arr = ["Sundari", "Maala", "Sheela", "Shakila", "Madhubala", "Lalaa"]
  return (
    <div className='flex items-center justify-center h-screen'>
      {
        // jsx expression
        // we can access all js but we can't create the js
        
        // Rules:
        // 1. We can't declare variables but we can access it
        // 2. We can't use conditional statements like if, if-else, switch but we can use ternary operator.
        // 3. We can't use loops like for, while but we can use map function.
      }      


    {
      <h1 className='text-5xl font-bold'>
        {
          arr.map((ele) => {
            return(
              <h1 className='animate-bounce'>{ele}</h1>
            )
          })
        }
      </h1>
    }
     
    </div>
  )
}

export default Jsx_Rules
