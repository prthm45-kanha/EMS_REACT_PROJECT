import React, { useEffect, useState } from 'react'
import Login from './component/Auth/Login'
import EmployeDashboard from './component/Dashboard/EmployeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import {setLocalStorage,getLocalStorage } from './utils/LocalStorage'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'


const App = () => {

//  useEffect(() => {
// getLocalStorage()

//  }, )

const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
 const authData=useContext(AuthContext)
 
 
useEffect(()=>{
  const loggedInUser=localStorage.getItem('loggedInUser')
  
  if(loggedInUser){
    const userData=JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }
},[])
 

  const handleLogin =(email,password)=>{
     if(email=='agrawalpratham2706@gmail.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      
     }
      else if(authData ){
        const employee= authData.employees.find((e)=>email==e.email && e.password==password)

        if(employee){

          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
        }
      }
      else{
        alert('Invalid credentials')
      }
  }



  return (
    <div className='bg-black h-screen w-screen'>
    {!user?<Login handleLogin={handleLogin} />:''}
     {user=='admin'?<AdminDashboard changeUser={setUser} />:(user =='employee'?<EmployeDashboard changeUser={setUser} data={loggedInUserData}/>:null)}
    
    </div>
  )
}

export default App
