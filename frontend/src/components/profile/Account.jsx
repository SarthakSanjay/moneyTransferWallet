import React, { useState } from 'react'
import { GrEdit } from 'react-icons/gr'
import { IoReturnUpBackOutline } from 'react-icons/io5'
import EditableFields from './EditableFields'
import Back from './Back'
import axios from 'axios'

const Account = ({showProfile , user ,setSelected}) => {
    const [save , setSave] = useState(false)
    const [isDisabled , setIsDisabled] = useState(true)
  return (
    <div className={` ${showProfile? 'h-1/2 w-2/3 md:w-1/4 p-4 ':'w-0 h-0 p-0'} transition-all duration-500 ease-in-out  absolute top-24 right-0 mx-2 rounded-lg  text-white bg-blue-900/80 dark:bg-emerald-800/80
        flex justify-center items-start flex-col text-2xl z-10`}>
            <div className={`${showProfile ? 'block' : 'hidden'}  w-full`}>

                <Back setSelected={setSelected} />

                <EditableFields setIsDisabled={setIsDisabled} save={save} setSave={setSave} user={user} label={"Full name"} fieldToUpdate="fullname" />

                <EditableFields setIsDisabled={setIsDisabled} save={save} setSave={setSave} user={user} label={"Email"} fieldToUpdate="email"/>

                <button disabled={isDisabled}  className='bg-[#191a19] mx-auto disabled:opacity-70 rounded-lg text-base py-1 px-3' onClick={()=>{setSave(true)}}>Save</button>

            </div>
        </div>
  )
}

export default Account