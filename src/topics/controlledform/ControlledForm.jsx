import React, { useState } from 'react'

const ControlledForm = () => {
  const [form, setForm] = useState({
    username:"",
    password:"",
    gender:"",
    date: ""
  })

  const handleForm = (e) => {
    e.preventDefault()
    console.log(form)
  }

  const handleInput = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]:value})
  }

  return (
    <div className='flex items-center flex-col justify-center w-screen h-screen'>
      <form onSubmit={handleForm} className='flex flex-col'>
        <input type="text" placeholder='username' name='username' onChange={handleInput}  className='border-2 p-2'/>
        <input type="password" placeholder='password' name='password' onChange={handleInput}  className='border-2 p-2'/>
        <select name="education" onChange={handleInput} className='border-2'>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        <input type="date" name='date' onChange={handleInput} className='border-2' />
        <button className='border-none relative top-5 rounded-3xl bg-blue-600 text-white'>Submit</button>
      </form>
    </div>
  )
}

export default ControlledForm
