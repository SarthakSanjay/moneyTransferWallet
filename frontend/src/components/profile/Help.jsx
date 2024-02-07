import React from 'react'
import Back from './Back'

const Help = ({showProfile , setSelected}) => {
  return (
    <div className={` ${showProfile? 'h-1/2 w-2/3 md:w-1/4 py-10 px-2 ':'w-0 h-0 p-0'} transition-all duration-500 ease-in-out absolute top-24 right-0 mx-2 rounded-lg  text-white bg-blue-900/80 dark:bg-emerald-800/80
        flex justify-center items-start flex-col text-2xl z-10`}>
        <div className={`${showProfile ? 'block' : 'hidden'}`}>
       
        <Back setSelected={setSelected} />
        <img className='rounded-lg' src='/dog.png' />

        </div>
        </div>
  )
}

export default Help