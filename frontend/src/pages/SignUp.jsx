import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import DarkMode from '../components/buttons/DarkMode'
import { apiBaseURL } from '../constant'
const SignUp = () => {
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()
    const handleFirstName = (e) =>{
        setFirstName(e.target.value)
    }
    const handleLastName = (e) =>{
        setLastName(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleClick = () =>{
      axios.defaults.withCredentials = true

       axios.post(`${apiBaseURL}/api/v1/user/register`,{
            username:email,
            firstname:firstName,
            lastname:lastName,
            password:password
          }
          // , { withCredentials: true }
          )
          .then(res =>{
            Cookies.set('token',res.data.token)
            if(res.status === 201){
                navigate('/dashboard/users')
            }
          }).catch((error) => console.log(error.message))
    }
  return (
    <div className=' h-screen w-screen flex justify-center items-center dark:bg-[#191a19] bg-black/40'>
    <div className='absolute top-10 '><DarkMode /></div>
        <div className='h-max w-[400px] rounded-md border dark:border-none py-3 px-5 bg-white dark:bg-emerald-600/90 dark:text-white'>
            <h1 className='text-center font-bold text-3xl '>Sign Up</h1>
            <p className='text-center my-2 px-4'>Enter your information and create an account</p>
           <div className='flex flex-col justify-center h-[450px] '>
           <label>First Name</label>
            <input 
            className='border h-10 outline-none px-2 my-2 rounded-md dark:bg-black/50 dark:border-none' 
            placeholder='John' 
            onChange={handleFirstName}
            />
            <label>Last Name</label>
            <input 
            className='border h-10 outline-none px-2 my-2 rounded-md dark:bg-black/50 dark:border-none' 
            placeholder='Doe'
            onChange={handleLastName}
            />
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
            className='bg-black dark:bg-[#191a19] text-white h-10 rounded-md my-2'
            onClick={handleClick}
            >Sign up</button>
           </div>
           <p className='text-center'>Already have an account?
           <Link to="/signin">
           <button className='underline ml-1'>Login</button>

           </Link>
           </p>
        </div>
    </div>
  )
}

export default SignUp