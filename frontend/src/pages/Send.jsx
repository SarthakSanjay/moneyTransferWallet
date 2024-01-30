import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Send = () => {
    const [searchParams] = useSearchParams()
    const name = searchParams.get("name")

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='shadow-md rounded-lg h-1/2 w-2/5 p-2 border flex justify-between flex-col'>
        <h1 className='font-semibold h-1/4 text-center text-2xl mt-6 '>Send Money</h1>
        <div className=' h-3/4 my-10'>
            <div className='flex gap-4 items-center p-2 text-2xl font-semibold'>
                <div className='h-14 w-14 bg-green-500 flex justify-center items-center rounded-full text-2xl text-white'>A</div>
                <h1>{name}</h1>
            </div>
            <p className='px-3 font-medium'>Amount (in Rs)</p>
            <input className='h-10 w-full outline-none border px-3 my-2 rounded-md' placeholder='Enter Amount'/>
            <button className='h-10  w-full bg-green-500 text-white rounded-md'>Initiate Transfer</button>
        </div>
    </div>
    </div>
  )
}

export default Send