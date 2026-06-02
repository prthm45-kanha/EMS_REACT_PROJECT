import React from 'react';
import Header from '../Others/Header';
import TaskListNumbers from '../Others/TaskListNumbers';
import TaskLists from '../TaskList/TaskLists';

const EmployeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-141 w-full'>
      <h1 >{data.id}</h1>
  <Header data={data}/>
  <TaskListNumbers data={data}/>
  <TaskLists data={data}/>
    </div>
  );
};

export default EmployeDashboard;
