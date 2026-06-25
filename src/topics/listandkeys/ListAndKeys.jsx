import React from 'react'

const ListAndKeys = () => {
  const arr = ['sundari', 'maala', 'sheela']
  return (
    <div>
      <ol>
        {
          arr.map((ele,idx) => {
            return <li className='list-decimal' key={idx}>{ele}</li>
          })
        }
      </ol>
    </div>
  )
}

export default ListAndKeys
