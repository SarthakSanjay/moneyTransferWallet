import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Modal = ({text}) => {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/dashboard/users')
    }
    useEffect(()=>{
        setTimeout(()=>{
            handleClick()
        },2000)
    })
  return (
    <div className='absolute h-1/3 w-4/5 z-20 dark:bg-black bg-blue-600/90 rounded-lg text-black dark:text-white flex flex-col items-center justify-center'>
    <h1 className='text-center'>{text}</h1>
    <button className='bg-black text-white dark:bg-white dark:text-black rounded-md px-3 py-1' onClick={handleClick}>Okay</button>
    </div>
  )
}

export default Modal