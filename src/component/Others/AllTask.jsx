import React from "react";
import { useContext } from 'react'
import { AuthContext } from "../../context/AuthProvider";
 
const AllTask = () => {
     
       const authData=useContext(AuthContext)
       console.log(authData)

  return (
    <div className='bg-[#1C1C1C] mt-6 rounded h-48  p-5' >

      <div className='flex items-center bg-red-400 mb-2 rounded justify-between py-2 px-4'>
        <h2 className='w-1/5 bg-red-700'> Employee Name</h2>
        <h3 className='w-1/5 bg-red-700'>New Task</h3>
        <h5 className='w-1/5 bg-red-700'>Active Task</h5>
        <h5 className='w-1/5 bg-red-700'>Completed</h5>
        <h5 className='w-1/5 bg-red-700'>Failed</h5>


     </div>

    <div className=' h-[80%] overflow-y-auto'>
       {authData.employees.map(function(elem){
         
         return <div className='border-2 border-emerald-600 flex items-center  mb-2 rounded justify-between py-2 px-4'>
        <h2 className='w-1/5 text-white font-semibold'> {elem.firstName}</h2>
        <h3 className='w-1/5 text-blue-900 font-bold'> {elem.tasks[0].taskTitle}</h3>
        <h5 className='w-1/5 text-yellow-300'>{elem.taskNumbers.active}</h5>
        <h5 className='w-1/5 text-green-800'>{elem.taskNumbers.completed}</h5>
        <h5 className='w-1/5 text-red-800 font-bold'>{elem.taskNumbers.failed}</h5>


     </div>

     })}
    </div>
 

    </div>
  );
};

export default AllTask;
