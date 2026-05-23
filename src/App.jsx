import React from 'react'
import Login from './component/Auth/Login'
import EmployeDashboard from './component/Dashboard/EmployeDashboard'

const App = () => {
  return (
    <div className='bg-black h-screen w-screen'>
    {/* <Login/> */}
    <EmployeDashboard/>
    </div>
  )
}

export default App
