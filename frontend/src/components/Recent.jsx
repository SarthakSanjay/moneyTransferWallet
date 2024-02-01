import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { capitalizeFirstLetter } from '../utils/usefullFuncitons';
import RecentLoader from '../loaders/RecentLoader';

const Recent = () => {
    const [transactions , setTransactions] = useState([])
    const [loading , setLoading] = useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        axios.get(`http://localhost:3000/api/v1/user/transaction`,{
            headers:{
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        }).then(res =>{
            setTransactions(res.data.transactions)
            setLoading(false)
        })
      },2000)
    },[])
  return (
    <>
        {loading ? <RecentLoader /> : <div className='h-max lg:h-1/2 w-full md:w-1/2 p-4 text-black font-semibold dark:text-white '>
        <h1 className='mb-2'>Recent Activity</h1>
       <div className='flex gap-2'>
       {transactions.map((transx)=>{
            return <div className='h-16 w-16 border rounded-lg border-emerald-500 dark:bg-emerald-600/30'>
                <p className='text-black dark:text-[#F28500] font-normal text-center'>{capitalizeFirstLetter(transx.receiver.firstname)}</p>
                <p className='text-black font-normal dark:text-[#D4AF37] text-sm text-center'>${transx.amount}</p>
                <span className='relative left-11  bottom-0 text-emerald-500 dark:text-white'><MdOutlineArrowOutward /></span>
            </div>
        })}
       </div>
    </div>}
    </>
  )
}

export default Recent