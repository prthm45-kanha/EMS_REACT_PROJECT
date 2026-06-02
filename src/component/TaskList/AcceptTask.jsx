import React from 'react';

const AcceptTask = () => {
  return (
   <div className='h-full flex-shrink-0 w-[300px] p-5 bg-red-900 rounded-xl '>
          <div className='flex items-center justify-between '>
            <h3 className='bg-red-600 text-white rounded text-sm py-1 px-3'> High</h3>
            <h4 className='text-white text-sm'> 20 feb 2024</h4>
          </div>
          <h2 className='text-white text-2xl font-semibold mt-5'> Make a youtube video </h2>
          <p className='text-gray-200 text-sm mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 text-white py-1 px-2 text-sm rounded hover:bg-green-600'>
                    Mark as Completed
                </button>
                <button className='bg-red-500 text-white py-1 px-2 text-sm rounded hover:bg-red-600'>
                    Mark as Failed
                </button>
            </div>
      </div>
  );
};

export default AcceptTask;
