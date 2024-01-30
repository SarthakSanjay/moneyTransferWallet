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
    <div className='h-20 w-full flex justify-start items-center px-4'>Balance $ {balance.toFixed(2)}</div>
  )
}

export default Balance