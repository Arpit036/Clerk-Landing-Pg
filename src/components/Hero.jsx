import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col jusitfy-center items-center bg-gradient-to-t from-blue-50 via-white to-violet-50 h-200px h-[500px] w-full'>

    <div className='text-6xl font-bold justify mt-30 mb-10'>
       <h1 className='flex justify-center'>More than authentication,</h1>
        <h1 className='flex justify-center'>Complete User Management</h1>
    </div>
    <div>
      <h2 className='text-xl text-gray-600 mb-10'>Need More than sign-in? Clerk gives you full stack auth and user management- <br /> so you can launch faster, scale easier, and stay focused on building your business.</h2>
    </div>

    <div>
      <button className='bg-gradient-to-b from-blue-500 to-blue-800 text-white px-2 py-1 rounded-md'>start building for free</button>
    </div>
         
    </div>
  )
}

export default Hero
