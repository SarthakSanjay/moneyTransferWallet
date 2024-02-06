import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import DarkMode from '../components/buttons/DarkMode'
import { apiBaseURL } from '../constant'
const SignIn = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()
    
    const handlePassword = (e) =>{
        e.preventDefault()
        setPassword(e.target.value)
    }
    const handleEmail = (e) =>{
        e.preventDefault()
        setEmail(e.target.value)
    }
    const handleClick = () =>{
        // console.log(firstName , lastName , email)
        axios.post(`${apiBaseURL}/api/v1/user/login`,{
            username: email,
            password: password
        }).then(res =>{
            Cookies.set('token',res.data.token)
            if(res.status === 200){
                navigate('/dashboard/users')
            }
        })
    }
  return (
    <div className=' h-screen w-screen flex justify-center items-center dark:bg-[#191a19] bg-black/40'>
    <div className='absolute top-10 '><DarkMode /></div>
        <div className='h-max w-[400px] rounded-md border dark:border-none py-3 px-5 bg-white dark:bg-emerald-600/90 dark:text-white'>
            <h1 className='text-center font-bold text-3xl'>Sign In</h1>
            <p className='text-center my-2 px-4'>Enter your credentials to access your account</p>
           <div className='flex flex-col justify-center h-[320px] '>
           
            <label>Email</label>
            <input 
            className='border h-10 outline-none px-2 my-2 rounded-md dark:bg-black/50 dark:border-none' 
            placeholder='johndoe@example.com'
            onChange={handleEmail}
            />
            <label>Password </label>
            <input 
            className='border h-10 outline-none px-2 my-2 rounded-md dark:bg-black/50 dark:border-none' 
            placeholder='John' 
            onChange={handlePassword}
            />
            <button 
            className='bg-black text-white h-10 rounded-md my-2 dark:bg-[#191a19]'
            onClick={handleClick}
            >Sign In</button>
           </div>
           <p className='text-center'>Don't have an account?
           <Link to="/signup">
           <button onClick={handleClick} className='underline ml-1'>Sign Up</button>

           </Link>
           </p>
        </div>
    </div>
  )
}

export default SignIn