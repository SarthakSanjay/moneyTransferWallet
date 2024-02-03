import React from 'react'
import { IoReturnUpBackOutline } from 'react-icons/io5'

const Back = ({setSelected}) => {
  return (
    <button onClick={()=>setSelected('')} className='absolute top-10 hover:bg-black/50 rounded-md px-2  animate-bounce'><IoReturnUpBackOutline /></button>
  )
}

export default Back