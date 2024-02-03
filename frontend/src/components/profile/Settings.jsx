import React from 'react'
import { GoCircleSlash } from 'react-icons/go'
import Back from './Back'
import ProfileButtons from './ProfileButtons'
import DarkMode from '../buttons/DarkMode'
import useDarkMode from '../../hooks/useDarkMode'
import { CiDark } from 'react-icons/ci'
import { MdOutlineLightMode } from 'react-icons/md'

const Settings = ({showProfile ,setSelected}) => {
    const { theme , toggleDarkMode } = useDarkMode()
  return (
    <div className={` ${showProfile? 'h-1/2 w-1/2 md:w-1/4 py-10 px-2 ':'w-0 h-0 p-0'} transition-all duration-500 ease-in-out absolute top-24 right-0 mx-2 rounded-lg  text-white bg-blue-900/80 dark:bg-emerald-800/80
        flex justify-center items-start flex-col text-2xl z-10`}>
        <div className={`${showProfile ? 'block' : 'hidden'} w-full`}>
        <Back setSelected={setSelected} />
        <ProfileButtons icon={<GoCircleSlash />}  text={"Deactivate Account"} />
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