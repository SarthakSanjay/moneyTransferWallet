import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Users = () => {
    const [users , setUsers] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/user/all')
        .then(res =>{
            setUsers(res.data.user )
        })
    },[])
  return (
    <div className='h-1/2 w-full px-4 font-semibold'>
        <h1>Users</h1>
        <input className='border h-10 w-full outline-none px-2 my-2 rounded-md' placeholder='Search users...'/>
        {users.map((user)=>{
            return <div className='h-18 w-full flex justify-between px-4 my-1 items-center' key={user._id}>
                <div className='flex gap-2 items-center'>
                    <div className='bg-[#e2e8f0] flex justify-center items-center rounded-full h-14 w-14'>{user.firstname.charAt(0).toUpperCase()}</div>
                    <h1>{user.firstname} {user.lastname}</h1>
                </div>

                <button
                onClick={()=>{
                    navigate("/send?id=" + user._id + "&name=" + user.firstname)
                }}
                 className='h-10 w-[200px] bg-black text-white rounded-md'>Send Money</button>


            </div>
        })}
    </div>
  )
}

export default Users