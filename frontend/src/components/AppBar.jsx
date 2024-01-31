import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
const AppBar = () => {
    const [profile ,setProfile] = useState('')
    const [showProfile , setShowProfile] = useState(false)
    const [theme , setTheme] = useState('light')
    const handelDarkMode = () =>{
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')

        }
    },[theme])
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
    <div className='h-20 w-full flex justify-between items-center px-4 border-b dark:border-b-emerald-700  dark:text-white'>
        <div className='text-xl font-semibold'>PayTM App</div>
        <div className='flex justify-center items-center '>
        <button className='mx-5 border-2 text-xl h-10 w-10 flex justify-center items-center font-semibold rounded-full border-black dark:border-white' onClick={handelDarkMode}>
            {theme === 'dark' ?<CiDark /> : <MdOutlineLightMode />}
        </button>
            <h1>Hello! {profile}</h1>
            <div onClick={()=>{
                setShowProfile(!showProfile)
            }} className='bg-[#e2e8f0] hover:bg-blue-400 hover:text-white cursor-pointer rounded-full h-16 w-16 mx-3 flex justify-center items-center text-2xl dark:bg-emerald-500'>{profile.charAt(0).toUpperCase()}</div>
            <Profile showProfile={showProfile} />
        </div>
    </div>
  )
}

export default AppBar