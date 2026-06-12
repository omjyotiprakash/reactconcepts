// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MdVerified } from 'react-icons/md';

const Card = ({users}) => {
  return (
    <div className='relative top-5'>
      <div className='flex items-center flex-wrap justify-center gap-10'>
        {
          users.map((user, idx) => {
            return(
              <div key={idx} className='w-95 h-100 bg-gray-300 rounded-2xl flex items-center justify-center flex-wrap'>
                <div className='w-[95%] h-[30%] overflow-hidde rounded-2xl bg-linear-to-tr from-amber-200 via-green-200 to-blue-200'>
                  <img src={user.image} className='overflow-hidden w-25 h-25 object-cover rounded-full relative top-18 left-5' alt={user.name} />
                </div>
                <div className='w-[95%] h-[60%] overflow-hidden rounded-2xl bg-white'>
                  <div className='w-full h-[40%] relative top-10 left-4'>
                    <div className='flex items-center justify-start gap-1'><h1 className='text-xl font-semibold'>{user.name}</h1><MdVerified className='relative top-0.5 text-[blue]' /><button className='bg-black text-white w-17.5 h-7.5 rounded-[5px] shadow-2xl  text-sm absolute right-10'>Follow</button></div>
                    <h2 className='text-[12px] relative bottom-0.5'>@{user.username}</h2>
                    <h1 className='text-[15px] font-bold'>About</h1>
                    <p className='text-[13px]'>{user.about}</p>
                  </div>
                  <div className='w-full h-[45%] relative top-10 flex items-center justify-around'>
                    <h1 className='w-[33%] h-full flex flex-col items-center justify-center'>
                      <h1 className='text-[30px] font-semibold'>{user.post}</h1>
                      <h1 className='text-[12px] text-gray-500'>Post</h1>
                    </h1>
                    <h1 className='w-[33%] h-full flex flex-col items-center justify-center'>
                      <h1 className='text-[30px] font-semibold'>{user.following}</h1>
                      <h1 className='text-[12px] text-gray-500'>Following</h1>
                    </h1>
                    <h1 className='w-[33%] h-full flex flex-col items-center justify-center'>
                      <h1 className='text-[30px] font-semibold'>{user.follower}</h1>
                      <h1 className='text-[12px] text-gray-500'>Followers</h1>
                    </h1>
                  </div>
                </div>
              </div>
            )
          })
        }  
      </div>
    </div>
  )
}

export default Card
