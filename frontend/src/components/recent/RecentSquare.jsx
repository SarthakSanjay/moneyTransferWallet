import React from 'react'
import { capitalizeFirstLetter } from '../../utils/usefullFuncitons'
import { MdOutlineArrowOutward } from 'react-icons/md'

const RecentSquare = ({transx , text}) => {
    if(text){
        return <div
        className='h-16 w-16 border hover:scale-105 rounded-lg border-emerald-500 dark:border-white hover:dark:bg-emerald-700 dark:bg-emerald-600/30'>
           <p className='text-black dark:text-white font-normal text-center'>See</p>
           <p className='text-black font-normal dark:text-white text-sm text-center'>All</p>
   </div>
    }
  return (
    <div key={transx._id}
         className='h-16 w-16 border rounded-lg border-emerald-500 dark:bg-emerald-600/30'>
            <p className='text-black dark:text-[#F28500] font-normal text-center'>{capitalizeFirstLetter(transx.receiver.firstname)}</p>
            <p className='text-black font-normal dark:text-[#D4AF37] text-sm text-center'>${transx.amount}</p>
            <span className='relative left-11  bottom-0 text-emerald-500 dark:text-white'><MdOutlineArrowOutward /></span>
    </div>
  )
}

export default RecentSquare