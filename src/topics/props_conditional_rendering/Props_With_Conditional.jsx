import React from 'react'
import User from './User';

const Props_With_Conditional = () => {
  const data = [
    {
      username: "sundari",
      age: 23,
      email: "sundari@gmail.com",
      bike: 'https://www.rushlane.com/wp-content/uploads/2020/12/royal-enfield-meteor-350-sales-nov-2020-1-854x854.jpg'
    },
    {
      username: "maala",
      age: 25,
      email: "maala@gmail.com",
      bike: null
    },
    {
      username: "Tinku",
      age: 30,
      email: "tinku@gmail.com",
      bike: 'https://www.otocapital.in/_next/image?url=https%3A%2F%2Fassets.otocapital.in%2Fproduction%2Ffireball-black-royal-enfield-meteor-350-image.png&w=1536&q=75'
    }
  ]
  return (
    <div>
      {
        data.map((ele) => {
          return <User data = {ele} />
        })
      }
    </div>
  )
}

export default Props_With_Conditional
