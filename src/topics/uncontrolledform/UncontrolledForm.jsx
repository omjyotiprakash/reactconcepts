import React, { useRef } from 'react'

const UncontrolledForm = () => {

  const usernameRef = useRef()
  const ageRef = useRef()

  const handleForm = (e) => {
    e.preventDefault()
    console.log(usernameRef.current.value)
    usernameRef.current.value=""
    console.log(ageRef.current.value)
    ageRef.current.value=""
  }

  return (
    <div>
      <h1>UncontrolledForm</h1>
      <form onSubmit={handleForm}>
        <input ref={usernameRef} type="text" placeholder="name" />
        <input ref={ageRef} type="number" placeholder="age" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UncontrolledForm
