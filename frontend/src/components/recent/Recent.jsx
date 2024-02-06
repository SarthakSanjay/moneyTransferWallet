import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import RecentLoader from '../../loaders/RecentLoader';
import RecentSquare from './RecentSquare';
import { useNavigate } from 'react-router-dom';
import { apiBaseURL } from '../../constant';

const Recent = () => {
    const [transactions , setTransactions] = useState([])
    const [loading , setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
      setTimeout(()=>{
        axios.get(`${apiBaseURL}/api/v1/user/transaction`,{
            headers:{
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        }).then(res =>{
            setTransactions(res.data.transactions)
            setLoading(false)
        })
      },1000)
    },[])
  return (
    <>
        {loading ? <RecentLoader /> : <div className='h-max  lg:h-1/2  w-full md:w-1/2 p-4 text-black font-semibold  dark:text-white '>
        <h1 className='mb-2'>Recent Activity</h1>
        <div className='flex'>
        <div className='w-max mr-2 flex flex-row-reverse justify-end gap-2   '>
          {transactions.slice(-3).map((transx , index)=>{
              if(index > 3) return
              return <RecentSquare key={transx._id} transx={transx} />
          })}
       </div>
        <button onClick={() => {navigate('/dashboard/transactions')}}>
          <RecentSquare text={'more'} />
        </button>
        </div>
    </div>}
    </>
  )
}

export default Recent