import React, { useEffect } from 'react'
import Login from './component/Auth/Login'
import EmployeDashboard from './component/Dashboard/EmployeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { getLocalStorage } from './utils/LocalStorage'

const App = () => {

 useEffect(() => {
getLocalStorage()

 }, )



 
  return (
    <div className='bg-black h-screen w-screen'>
    <Login/>
    {/* <EmployeDashboard/> */}
    {/* <AdminDashboard/> */}
    
    </div>
  )
}

export default App
