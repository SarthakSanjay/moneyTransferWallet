import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { capitalizeFirstLetter } from '../utils/usefullFuncitons'
import { apiBaseURL } from '../constant'

const Transactions = () => {
    const [transactions , setTransactions] = useState([])
    useEffect(()=>{
        axios.get(`${apiBaseURL}/api/v1/user/transaction`,{
            headers:{
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        }).then(res =>{
            setTransactions(res.data.transactions)
        })
    },[])
  return (
    <div className='h-1/2 w-full px-4 font-semibold'>
    <div className='h-18 w-full flex justify-between px-4 my-1 items-center dark:text-white dark:border-b dark:border-b-emerald-400'>
        <span className='w-1/4 text-center hidden md:block'>TXID</span>
        <span className='w-1/4 text-center'>Name</span>
        <span className='w-1/4 text-center'>Status</span>
        <span className='w-1/4 text-center'>Date</span>
        <span className='w-1/4 text-center'>Amount</span>
    </div>
        {[...transactions].reverse().map((transaction)=>{
            return <div className='h-18 w-full flex justify-between px-4 my-1 items-center' key={transaction._id}>
                        <span className='w-1/4 text-center font-light text-sm dark:text-[#d8e9a8] hidden md:block'>{transaction._id}</span>
                        <span className='w-1/4 text-center dark:text-[#d8e9a8]'>{capitalizeFirstLetter(transaction.receiver.firstname)} {capitalizeFirstLetter(transaction.receiver.lastname)}</span>
                        <span className='w-1/4 text-center text-emerald-700 dark:text-emerald-500 '>sent</span>
                        <span className='w-1/4 text-center dark:text-white '>{new Date(transaction.createdAt).toLocaleDateString()}</span>
                        <span className='w-1/4 text-center dark:text-orange-500'>${transaction.amount}</span>
                    </div>
        })}

    </div>
  )
}

export default Transactions