import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import Profile from './profile/Profile'
import { useNavigate } from 'react-router-dom';
import { SlWallet } from "react-icons/sl";
import DarkMode from './buttons/DarkMode';

const AppBar = () => {
    const navigate =useNavigate()
    const [profile ,setProfile] = useState('')
    const [showProfile , setShowProfile] = useState(false)
  
    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/user/detail',{
            headers:{
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        }).then(res =>{
            setProfile(res.data.user)
        })
    },[])
  return (
    <div className='h-20 w-full flex justify-between items-center px-4 border-b dark:border-b-emerald-700  dark:text-white'>
        <div onClick={()=> navigate('/dashboard')} className='text-xl font-semibold cursor-pointer flex items-center gap-3 '><span className='text-emerald-700 dark:text-emerald-500 text-3xl'><SlWallet /></span> ePay App</div>
        <div className='flex justify-center items-center '>
            <div className='hidden md:block'><DarkMode /></div>
            <h1>Hello! {profile && profile.firstname.toUpperCase()}</h1>
            <div onClick={()=>{
                setShowProfile(!showProfile)
            }} className='bg-[#e2e8f0] hover:bg-blue-400 hover:text-white cursor-pointer rounded-full h-16 w-16 mx-3 flex justify-center items-center text-2xl dark:bg-emerald-500'>{profile && profile.firstname.charAt(0).toUpperCase()}</div>
            <Profile showProfile={showProfile} user={profile} />
        </div>
    </div>
  )
}

export default AppBar