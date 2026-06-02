import React from 'react';
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';

const TaskLists = ({data}) => {
  console.log(data)
  return (
    <div id='taskList' className=' flex overflow-x-auto  flex-nowrap  gap-5 h-[50%] mt-10 rounded-lg py-4 w-full'>

       {data .tasks.map((elem)=>{

        if(elem.active){
          return <AcceptTask/>
        }
        if(elem.NewTask){
          return <NewTask/>
        }
        if(elem.completed){
          return <CompleteTask/>
        }
        if(elem.failed){
          return <FailedTask/>
        }
       })}

     
     
      


      

    </div>
  );
};

export default TaskLists;
