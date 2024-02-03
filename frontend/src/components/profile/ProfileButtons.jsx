import React from 'react'

const ProfileButtons = ({icon , text , setSelected ,check}) => {
  return (
    <button onClick={()=>{check && setSelected(check)}} className='  w-full my-2 px-2 transition-all duration-500  text-base md:text-2xl flex items-center hover:scale-105 hover:bg-black/50 rounded-lg py-1 gap-2'>
        {icon}{text}{text==='Account' ?<span className='hidden md:block'>Info</span>:''}
    </button>
  )
}

export default ProfileButtons