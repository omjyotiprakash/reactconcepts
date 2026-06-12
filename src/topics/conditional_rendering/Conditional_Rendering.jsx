import React from 'react'

const Conditional_Rendering = () => {
  //! Conditional Rendering
    // 1. Ternary Operator (condition ? true : false)
    // 2. Short Circuit Logical AND (condition && true)
    // 3. Nullish Operator (null || undefined ?? true )
    // 4. Optional Chaining (?)
    // 5. Short Circuit Logical OR (variable = true || default value)

  // const status = undefined
  // const data = [1, 2]

  let value = 0
  let res = value || 0
  console.log(res)
  return (
    <div>
      {/* {
        status === true ? <h1>😀</h1> : <h1>😔</h1>
      }
      {
        status && <h1 className='text-2xl text-black'>Happy</h1>
      }
      {
        status ?? <h1>Nullish</h1>
      } */}
      {/* {
        data.map((ele) => {
          return <h1>{ele}</h1>
        })
      } */}
    </div>
  )
}

export default Conditional_Rendering
