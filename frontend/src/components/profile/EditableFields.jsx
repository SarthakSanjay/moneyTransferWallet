import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { GrEdit } from 'react-icons/gr'
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { apiBaseURL } from '../../constant';
const EditableFields = ({user , label , save , setSave,fieldToUpdate , setIsDisabled }) => {
    const [edit , setEdit] = useState(false)
    const [inputValue , setInputValue] = useState('')
    const navigate = useNavigate()
    const handelChange = (e) =>{
             setInputValue(e.target.value)
    }
    const checkField = (fieldToUpdate , inputValue) =>{
        if(fieldToUpdate === 'email'){
            return {
                "username" : inputValue
            }
        }else{
            return {
                "firstname": inputValue.split(' ')[0],
                "lastname": inputValue.split(' ')[1]  
              }
        }
    }
    const updateFields = (value) =>{
        axios.put(`${apiBaseURL}/api/v1/user/update`,
            checkField(fieldToUpdate ,value),
        {
          headers:{
            'Authorization' : `Bearer ${Cookies.get('token')}`
        }}).then(res => {
                if(res.status === 200){
                    window.location.reload()
                }
          })
          .catch(error => {
            console.error(error.message);
          });
        console.log(inputValue);
    }
    useEffect(() => {
        if (save) {
          updateFields(inputValue);
        //   setSave(false);
        }
      }, [save, setSave,fieldToUpdate])
  return (
    <div className='w-full '>
            <label className='text-[15px] px-1 md:px-2'>{label}</label>
                <div className='h-10 w-full   bg-black/40 px-1 flex justify-between items-center rounded-md text-[18px]'>
                {
                    edit ?
                    <input onChange={handelChange} autoFocus className='h-8 outline-none bg-transparent w-full  px-3 mr-2' /> 
                    : 
                    <span className='overflow-x-scroll px-2 text-sm md:text-xl'>
                    {label === 'Email' ? `${user.username}` : `${user.firstname +" " +user.lastname}`}
                </span>
                }

                <span onClick={()=>{
                    setEdit(!edit)
                    setIsDisabled(false)
                }} className='h-10 flex items-center  px-2'>
                {edit ? <RxCross2 /> :
                <GrEdit />}
                </span>
                </div>
            </div>
  )
}

export default EditableFields