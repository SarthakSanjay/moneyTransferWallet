import React from 'react'

const LogoutModal = ({logout , setLogoutModal , showProfile }) => {
   
  return (
    <div className={`h-2/3 shadow-xl w-[400px] md:h-[200px] md:w-[500px]  bg-blue-900/80 dark:bg-green-900/90 z-10 absolute right-[10%] md:right-[80%] lg:right-[120%] rounded-lg p-10 ${showProfile ? '' : 'hidden'}`}>
        <h1 className='text-center my-3'>Are you sure want to logout?</h1>
        <div className='flex gap-10 justify-center my-6'>
            <button onClick={()=>{logout()}} className='dark:bg-emerald-500 text-md px-2 rounded-md  text-white bg-blue-500  hover:scale-110 transition-all duration-500'>Logout</button>
            <button onClick={()=>{setLogoutModal(false)}} className='dark:bg-[#ff4621] bg-red-500 text-md px-2 hover:scale-110 transition-all duration-500 rounded-md dark:text-gray-900 text-black'>Cancle</button>
        </div>
    </div>
  )
}

export default LogoutModal