import React, { useState } from 'react'

const Checkbox = () => {
  const [terms, setTerms] = useState(false)

  const handleForm = (e) => {
    e.preventDefault()
    console.log(terms)
  }

  const handleInput = (e) => {
    setTerms(e.target.checked)
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="checkbox" name='terms' checked={terms} onChange={handleInput} />Terms & Conditions
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Checkbox
