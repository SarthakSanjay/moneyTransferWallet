import React from 'react'
import { GoCircleSlash } from 'react-icons/go'
import Back from './Back'
import ProfileButtons from './ProfileButtons'
import useDarkMode from '../../hooks/useDarkMode'
import { CiDark } from 'react-icons/ci'
import { MdOutlineLightMode } from 'react-icons/md'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { apiBaseURL } from '../../constant'
const Settings = ({showProfile ,setSelected}) => {
    const { theme , toggleDarkMode } = useDarkMode()
    const navigate = useNavigate()
    const deactivateAcc = () =>{
      axios.delete(`${apiBaseURL}/api/v1/user/deactivate`,{
        headers:{
          'Authorization': `Bearer ${Cookies.get('token')}`
        }
      }).then(res =>{
        if(res.status === 200){
          navigate('/signup')
        }
      })
    }
  return (
    <div className={` ${showProfile? 'h-1/2 w-2/3 md:w-1/4 py-10 px-2 ':'w-0 h-0 p-0'} transition-all duration-500 ease-in-out absolute top-24 right-0 mx-2 rounded-lg  text-white bg-blue-900/80 dark:bg-emerald-800/80
        flex justify-center items-start flex-col text-2xl z-10`}>
        <div className={`${showProfile ? 'block' : 'hidden'} w-full`}>
        <Back setSelected={setSelected} />
        <div onClick={deactivateAcc}>
        <ProfileButtons icon={<GoCircleSlash />}  text={"Deactivate Account"} />

        </div>
        <div className='md:hidden'>

        {
            theme ==="light" ? 
            <div onClick={()=>{toggleDarkMode()}}>

            <ProfileButtons icon={ <CiDark /> } text={"Enable DarkMode"}/>
            </div>
            :
            <div onClick={()=>{toggleDarkMode()}}>
            <ProfileButtons icon={ <MdOutlineLightMode /> } text={"Enable LightMode"}/>
            </div>
        }
        </div>
        
        
       
        </div>
           
        
            
        </div>
  )
}

export default Settings