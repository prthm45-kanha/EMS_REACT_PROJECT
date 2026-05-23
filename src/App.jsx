import React from 'react'
import Login from './component/Auth/Login'
import EmployeDashboard from './component/Dashboard/EmployeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'

const App = () => {
  return (
    <div className='bg-black h-screen w-screen'>
    {/* <Login/> */}
    {/* <EmployeDashboard/> */}
    <AdminDashboard/>
    </div>
  )
}

export default App
