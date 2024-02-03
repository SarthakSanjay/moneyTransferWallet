import React from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import { Outlet } from 'react-router-dom'
import DashboardMenu from '../components/DashboardMenu'

const Dashboard = () => {
  return (
    <div className='h-screen md:h-screen w-screen bg-white dark:bg-[#191a19]'>
        <AppBar />
        <Balance />
        <DashboardMenu />
        <Outlet />
    </div>
  )
}

export default Dashboard