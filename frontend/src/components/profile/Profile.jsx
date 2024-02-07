import React, { useState } from 'react'
import { IoSettingsOutline} from "react-icons/io5";
import { MdOutlineAccountBalance } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { removeAllCookies } from '../../utils/usefullFuncitons';
import { useNavigate } from 'react-router-dom';
import LogoutModal from '../LogoutModal';
import ProfileButtons from './ProfileButtons';
import Account from './Account';
import Settings from './Settings';
import Help from './Help';
import LogoutBtn from './LogoutBtn';


const Profile = ({showProfile , user}) => {
    const [selected , setSelected] = useState('')
    const [logoutModal , setLogoutModal] = useState(false)
    const navigate = useNavigate()
    function logout(){
        removeAllCookies() 
        navigate('/signin')
    }
   
    if(selected === 'acc'){
        return <Account user={user} showProfile={showProfile} setSelected={setSelected} />
    }
    if(selected === 'sett'){
        return <Settings showProfile={showProfile} setSelected={setSelected}/>
    }
    if(selected === 'help'){
        return <Help showProfile={showProfile} setSelected={setSelected} />
    }
  return (
    <div className={` ${showProfile? 'h-1/2 w-2/3 md:w-1/4  py-10 px-4 ':'w-0 h-0 p-0'} transition-all duration-500 ease-in-out absolute top-24 right-0 mx-2 rounded-lg  text-white bg-blue-900/80 dark:bg-emerald-800/80
    flex justify-center items-start flex-col text-2xl z-10`}>
    {logoutModal ? 
    <LogoutModal  setLogoutModal={setLogoutModal} logout={logout} showProfile={showProfile} />
     : ''}
    {showProfile ? <>
         
        <ProfileButtons icon={<MdOutlineAccountBalance />} check={'acc'} text={"Account"} setSelected={setSelected} />

        <ProfileButtons icon={<IoSettingsOutline />} check={'sett'} text={"Settings"} setSelected={setSelected}/>

        <ProfileButtons icon={<FiHelpCircle />} check={'help'} text={"Help"} setSelected={setSelected}/>

       <LogoutBtn setLogoutModal={setLogoutModal} logoutModal={logoutModal} />
        
    </> : ''}
        
    </div>
  )
}

export default Profile