import React from 'react'
import { TbLogout2 } from 'react-icons/tb'

const LogoutBtn = ({setLogoutModal , logoutModal}) => {
  return (
    <button onClick={()=>{setLogoutModal(!logoutModal)}} className='  w-full my-2 px-2 transition-all duration-500  text-base md:text-2xl flex items-center hover:scale-105 hover:bg-black/50 rounded-lg py-1 gap-2'><TbLogout2 />Logout</button>
  )
}

export default LogoutBtn