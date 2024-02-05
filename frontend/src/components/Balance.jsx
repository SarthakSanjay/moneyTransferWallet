import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'

const Balance = () => {
    const [balance , setBalance] = useState(0)
    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/account/balance',{
            headers:{
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        }).then(res =>{
            setBalance(res.data.balance)
        })
    },[])
    
  return (
    <div className='h-20 w-full flex justify-start items-center text-xl px-4 gap-2 dark:text-[#d8e9a8]'>Balance $ {balance.toFixed(2)}
    {/* <span className={`w-max px-4   ${
    balance > 500 ? 'text-green-500' :
    balance > 0 ? 'text-yellow-600' :
    balance <= 0 ? 'text-red-500' : ''
  }`}>Low Balance</span> */}
    </div>
  )
}

export default Balance