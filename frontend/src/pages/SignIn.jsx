import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const SignIn = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    
    const handlePassword = (e) =>{
        e.preventDefault()
        setPassword(e.target.value)
    }
    const handleFirstName = (e) =>{
        e.preventDefault()
        setFirstName(e.target.value)
    }
    const handleLastName = (e) =>{
        e.preventDefault()
        setLastName(e.target.value)
    }
    const handleEmail = (e) =>{
        e.preventDefault()
        setEmail(e.target.value)
    }
    const handleClick = () =>{
        // console.log(firstName , lastName , email)
        axios.post()
    }
  return (
    <div className=' h-screen w-screen flex justify-center items-center bg-black/40'>
        <form className='h-max w-[400px] rounded-md border py-3 px-5 bg-white'>
            <h1 className='text-center font-bold text-3xl'>Sign In</h1>
            <p className='text-center my-2 px-4'>Enter your credentials to access your account</p>
           <div className='flex flex-col justify-center h-[320px] '>
           
            <label>Email</label>
            <input 
            className='border h-10 outline-none px-2 my-2 rounded-md' 
            placeholder='johndoe@example.com'
            onChange={handleEmail}
            />
            <label>Password </label>
            <input 
            className='border h-10 outline-none px-2 my-2 rounded-md' 
            placeholder='John' 
            onChange={handlePassword}
            />
            <button 
            className='bg-black text-white h-10 rounded-md my-2'
            onClick={handleClick}
            >Sign In</button>
           </div>
           <p className='text-center'>Don't have an account?
           <Link to="/signup">
           <button className='underline ml-1'>Sign Up</button>

           </Link>
           </p>
        </form>
    </div>
  )
}

export default SignIn