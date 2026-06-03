import React from 'react';
import Header from '../Others/Header';
import CreateTask from '../Others/CreateTask';
import AllTask from '../Others/AllTask';

const AdminDashboard = () => {
  return (
    <div className='p-10 h-200 bg-black w-full'>
      <Header/>
      <CreateTask/>
      <AllTask/>

      
    </div>
  );
};

export default AdminDashboard;
