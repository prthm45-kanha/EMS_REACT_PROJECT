import React from 'react'

const Header = () => {
  return (
    <div className='text-white flex justify-between items-end '>
        <h1 >
         <span className="text-2xl">Hello,</span> <br />
         <span className="text-3xl font-semibold">Pratham 👋</span>
        </h1>
        <button className='bg-red-600 rounded-sm font-medium py-1 px-4 text-lg'>Log Out</button>
    </div>
  )
}

export default Header
