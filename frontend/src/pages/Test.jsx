import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiBaseURL } from '../constant'

const Test = () => {
    const [data, setData] = useState('')
    useEffect(()=>{
        axios.get('https://money-transfer-wallet-backend.vercel.app')
        .then(res => setData(res.data.msg))
    })
    console.log(apiBaseURL);
  return (
    <div>start {data} hello</div>
  )
}

export default Test