import React from 'react'

const Profile = ({showProfile}) => {
  return (
    <div className={` ${showProfile? 'h-1/2 w-1/2 md:1/3 lg:w-1/4 p-10 ':'w-0 h-0 p-0'} transition-all duration-500 ease-in-out absolute top-24 right-0 mx-2 rounded-lg  text-white bg-blue-900/80
    flex justify-center items-start flex-col text-2xl`}>
    {showProfile ? <>
        <button className='my-2 px-2 hover:translate-x-2 transition-all duration-500'>Account Info</button>
        <button className='my-2 px-2 hover:translate-x-2 transition-all duration-500'>Settings</button>
        <button className='my-2 px-2 hover:translate-x-2 hover:bg-black rounded-lg transition-all duration-500'>Logout</button>
    </> : ''}
        
    </div>
  )
}

export default Profile