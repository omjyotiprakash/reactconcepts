import React, { useState } from 'react'

const ControlledForm = () => {
  const [gender, setGender] = useState("male")

  const handleForm = (e) => {
    e.preventDefault()
    console.log(gender)
  }

  const handleInput = (e) => {
    const {name, value} = e.target
    setGender(value)
  }

  return (
    <div className='flex items-center flex-col justify-center w-screen h-screen'>
      <form onSubmit={handleForm} className='flex items-center justify-center'>
        <input checked={gender === "male"} type="radio" name='gender' value='male' onChange={handleInput} />Male
        <input checked={gender === "female"} type="radio" name='gender' value='female' onChange={handleInput} />Female
        <input checked={gender === "others"} type="radio" name='gender' value='others' onChange={handleInput} />Others
        <button className='w-100 h-50 cursor-pointer border-none relative top-5 rounded-3xl bg-blue-600 text-white'>Submit</button>
      </form>
    </div>
  )
}

export default ControlledForm
