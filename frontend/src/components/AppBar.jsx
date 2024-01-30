import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'

const AppBar = () => {
    const [profile ,setProfile] = useState('')
    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/user/detail',{
            headers:{
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        }).then(res =>{
            setProfile(res.data.user.firstname)
        })
    },[])
  return (
    <div className='h-20 w-full flex justify-between items-center px-4 border-b'>
        <div className='text-xl font-semibold'>PayTM App</div>
        <div className='flex justify-center items-center '>
            <h1>Hello! {profile}</h1>
            <div className='bg-[#e2e8f0] rounded-full h-16 w-16 mx-3 flex justify-center items-center text-2xl'>{profile.charAt(0).toUpperCase()}</div>
        </div>
    </div>
  )
}

export default AppBar