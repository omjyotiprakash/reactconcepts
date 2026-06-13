import React from 'react'

const User = (props) => {
  const {data:{username, age, email, bike}} = props
  return (
    <div>
      <h1>{username}</h1>
      {
        bike && <img src={bike} alt={username} width={300} />
      }
      
      <h1>{age}</h1>
      <h1>{email}</h1>
      <hr />
    </div>
  )
}

export default User
