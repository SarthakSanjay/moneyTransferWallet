import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { CiDark } from 'react-icons/ci'
import { MdOutlineLightMode } from 'react-icons/md'
import ProfileButtons from '../profile/ProfileButtons'
import useDarkMode from '../../hooks/useDarkMode'

const DarkMode = () => {
    
  const {theme ,toggleDarkMode} = useDarkMode()
   
  return (
    <button className={`mx-5 border-2 text-xl h-10 w-10 flex justify-center items-center font-semibold rounded-full ${theme === 'dark'?'text-white':'text-black'} border-black dark:border-white`} onClick={toggleDarkMode}>
    {theme === 'dark'  ?<MdOutlineLightMode />: <CiDark /> }

</button>
  )
}

export default DarkMode