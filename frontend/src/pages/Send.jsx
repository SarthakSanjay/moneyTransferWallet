import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { capitalizeFirstLetter } from '../utils/usefullFuncitons'
import DarkMode from '../components/buttons/DarkMode'
const Send = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const name = searchParams.get("name")
    const userId = searchParams.get("id")
    const [amount , setAmount] = useState(0)
    const [message , setMessage] = useState('')
    const [displayMessage , setDisplayMessage] = useState(false)
    const handleAmount = (e) =>{
        setAmount(e.target.value)
    }
    const handleClick = () =>{
        axios.post('http://localhost:3000/api/v1/account/transfer',{
            userId: userId,
            amount: amount
        },{headers:{
            'Authorization': `Bearer ${Cookies.get('token')}`
        }}).then(res =>{
            if(res.status === 200){
                setDisplayMessage(true)
                setMessage(res.data.message)
                setAmount(0)
            }
            setTimeout(()=>{setDisplayMessage(false)},3000)
        })
    }
  return (
    <div className='h-screen w-screen  bg-black/20 dark:bg-[#191a19] flex justify-center items-center'>
    <div className='absolute top-10 '><DarkMode /></div>
    {displayMessage ? <div className='absolute top-10 bg-green-300 h-10 w-1/6 rounded-md border border-green-950  flex items-center px-2'>{message}</div> :''}
        <div className='shadow-md rounded-lg bg-white h-1/2 w-2/5 p-2 border flex justify-between flex-col dark:border-emerald-500 dark:bg-emerald-600/10'>
        <h1 className='font-semibold h-1/4 text-center text-black text-2xl mt-6 dark:text-[#d8e9a8] '>Send Money</h1>
        <div className=' h-3/4 my-10'>
            <div className='flex gap-4 items-center p-2 text-2xl font-semibold text-black dark:text-white'>
                <div className='h-14 w-14 bg-green-500 flex justify-center items-center rounded-full text-2xl text-white'>{name.charAt(0).toUpperCase()}</div>
                <h1>{capitalizeFirstLetter(name)}</h1>
            </div>
            <p className='px-3 font-medium text-black dark:text-white'>Amount (in Rs)</p>
            <input onChange={handleAmount} type='number'  className='h-10 w-full outline-none border px-3 my-2 rounded-md dark:bg-emerald-500/20 dark:border-emerald-500 dark:text-white' placeholder='Enter Amount'/>
            <button onClick={handleClick} className='h-10  w-full bg-green-500 text-white rounded-md'>Initiate Transfer</button>
            <button onClick={()=>{

                navigate('/dashboard/users')
            }} className='h-10  w-full bg-blue-500 text-white rounded-md my-2'>Go Back</button>
        </div>
    </div>
    </div>
  )
}

export default Send