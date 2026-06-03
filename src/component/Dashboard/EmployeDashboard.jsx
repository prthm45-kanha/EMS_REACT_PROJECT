import React from 'react';
import Header from '../Others/Header';
import TaskListNumbers from '../Others/TaskListNumbers';
import TaskLists from '../TaskList/TaskLists';

const EmployeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-141 w-full'>
    
  <Header changeUser={props.changeUser} data={props.data}/>
  <TaskListNumbers data={props.data}/>
  <TaskLists data={props.data}/>
    </div>
  );
};

export default EmployeDashboard;
