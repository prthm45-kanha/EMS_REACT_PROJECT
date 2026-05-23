import React from 'react';
import Header from '../Others/Header';
import TaskListNumbers from '../Others/TaskListNumbers';
import TaskLists from '../TaskList/TaskLists';

const EmployeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
  <Header/>
  <TaskListNumbers/>
  <TaskLists/>
    </div>
  );
};

export default EmployeDashboard;
