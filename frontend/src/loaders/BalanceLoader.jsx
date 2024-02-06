import React from 'react'

const Loader = () => {
  return (
    <div className='h-20 w-full flex justify-start items-center text-xl px-4 gap-2 '>
        <span className='bg-gray-400 dark:bg-slate-700 h-2 w-24 rounded-full'></span>
        <span className='bg-gray-400 dark:bg-slate-700 h-2 w-12 rounded-full'></span>
    </div>
  )
}

export default Loader