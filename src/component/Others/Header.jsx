import React from 'react'

const Header = ({data}) => {
   const loggedOutUser=()=>{
     localStorage.setItem('loggedInUser','')
     window.location.reload()
   }
  return (
    <div className='text-white flex justify-between items-end '>
        <h1 >
         <span className="text-2xl">Hello,</span> <br />
         <span className="text-3xl font-semibold">{data.firstName} 👋</span>
        </h1>
        <button onClick={loggedOutUser} className='bg-red-600 rounded-sm font-medium py-1 px-4 text-lg'>Log Out</button>
    </div>
  )
}

export default Header
