import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex flex-nowrap mt-10 gap-5  justify-between'>

      <div className='rounded-xl py-6 px-9 w-[45%] bg-blue-400'>
        <h2 className='text-3xl font-semibold text-white'>0</h2>
        <h3 className='text-2xl font-medium text-white'>New Task</h3>
      </div>

      <div className='rounded-xl py-6 px-9 w-[45%] bg-yellow-600'>
        <h2 className='text-3xl font-semibold text-white'>3</h2>
        <h3 className='text-2xl font-medium text-white'>Completed</h3>
      </div>

      <div className='rounded-xl py-6 px-9 w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold text-white'>0</h2>
        <h3 className='text-2xl font-medium text-white'>Accepted</h3>
      </div>

      <div className='rounded-xl py-6 px-9 w-[45%] bg-red-500'>
        <h2 className='text-3xl font-semibold text-white'>1</h2>
        <h3 className='text-2xl font-medium text-white'>Failed</h3>
      </div>

    </div>
  )
}

export default TaskListNumbers
