import React from 'react'

const RecentLoader = () => {
  return (
    <div className='h-max lg:h-1/2 w-full animate-pulse md:w-1/2 p-4  font-semibold dark:text-white '>
    <h1 className='my-2 rounded-full bg-gray-400 dark:bg-slate-700 h-3 w-36 flex items-center   '></h1>
   <div className='flex gap-2'>
   {[1,2,3,4].map((index)=>{
        return <div key={index} className='h-16 w-16 rounded-lg bg-gray-400 dark:bg-slate-700 '>
                
                </div>
    })}
   </div>
</div>
  )
}

export default RecentLoader