import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Recent from './recent/Recent'
import { capitalizeFirstLetter } from '../utils/usefullFuncitons'
import { apiBaseURL } from '../constant'


const Users = () => {
    const [users , setUsers] = useState([])
    const navigate = useNavigate()
    const [input , setInput] = useState('')
    function useDebounce(value){
        useEffect(()=>{
          let d =setTimeout(() => {
            axios.get(`${apiBaseURL}/api/v1/user/bulk?filter=${value}`,{
                headers:{
                    'Authorization' : `Bearer ${Cookies.get('token')}`
                }
            })
            .then(res => setUsers(res.data.user))
            // console.log(value);
          }, 300);
          return () =>{
            clearTimeout(d);
          }
        },[value])

      }
      useDebounce(input)
    useEffect(()=>{
        axios.get(`${apiBaseURL}/api/v1/user/all`,{
            headers:{
                'Authorization' : `Bearer ${Cookies.get('token')}`
            }
        })
        .then(res =>{
            setUsers(res.data.user )
        })
    },[])
    const handleSearch = (e) =>{
        setInput(e.target.value)
        
    }

  return (
    <div className='h-max  w-full flex flex-col-reverse  md:flex-row '>
    <div className='h-full md:h-5/6  w-full md:w-1/2 px-4 font-semibold'>
        <input onChange={handleSearch} className='border h-10 w-full outline-none px-2 my-2 rounded-md dark:bg-inherit dark:text-white dark:border-emerald-500' placeholder='Search users...'/>
        <div className='h-96 overflow-x-scroll w-full font-semibold'>
            {users.map((user)=>{
                return <div className='h-18 w-full flex justify-between px-4 my-1 items-center dark:text-[#d8e9a8]' key={user._id}>
                    <div className='flex gap-2 items-center'>
                        <div className='bg-[#e2e8f0] flex justify-center items-center rounded-full h-14 w-14 dark:text-black dark:bg-lime-600' >{user.firstname.charAt(0).toUpperCase()}</div>
                        <h1>{capitalizeFirstLetter(user.firstname)} {capitalizeFirstLetter(user.lastname)}</h1>
                    </div>

                <button
                onClick={()=>{
                    navigate("/send?id=" + user._id + "&name=" + user.firstname)
                }}
                 className='h-10 w-1/3 flex justify-center items-center gap-1 md:w-1/4 dark:bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-950 bg-black text-white rounded-md hover:scale-110  transition-all duration-300 mx-5 '>
                 <span>Send</span>
                 <span className='hidden md:block'>Money</span>
                  </button>


            </div>
        })}

    </div>
    </div>
        <Recent />
    </div>
  )
}

export default Users