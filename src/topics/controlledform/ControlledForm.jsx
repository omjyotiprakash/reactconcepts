import React, { useState } from 'react'

const ControlledForm = () => {
  const [form, setForm] = useState({
    username:"",
    password:""
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
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ControlledForm
