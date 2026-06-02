import React from 'react';

const NewTask = () => {
  return (

   <div className='h-full flex-shrink-0 w-[300px] p-5 bg-yellow-600 rounded-xl '>
          <div className='flex items-center justify-between '>
            <h3 className='bg-red-600 text-white rounded text-sm py-1 px-3'> High</h3>
            <h4 className='text-white text-sm'> 20 feb 2024</h4>
          </div>
          <h2 className='text-white text-2xl font-semibold mt-5'> Make a youtube video </h2>
          <p className='text-gray-200 text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className='mt-5'>
            <button className='bg-blue-500 text-white py-1 px-2 text-sm rounded hover:bg-blue-900'>Accept Task</button>
          </div>
      </div>
  );
};

export default NewTask;
