import React, {useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

   const [userData, setUserData] = useContext(AuthContext)
      
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskdate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const[newtask, setNewTask] = useState({})
    
 
    const submitHandler=(e)=>{
        e.preventDefault()
       

        setNewTask({taskTitle,taskDescription,taskdate,category,active:false,newTask:true,completed:false,failed:true })
          
        const data=userData
       

      
        data.forEach((elem)=>{
          if(assignTo==elem.firstName){
           elem.tasks.push(newtask)
           elem.taskNumbers.newTask+=1
           
          }
        })
        setUserData(data)
         console.log(data)
        

         setTaskTitle('')
        setCategory('')
        setTaskDate('')
        setAssignTo('')
        setTaskDescription('')
       
    }
  return (
    <div className='text-white  bg-[#1C1C1C] mt-7 rounded p-6'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}
         className='flex items-start justify-between flex-wrap text-white'
         >
     
        <div className='w-1/2 '>
        <div>
            <h3 className='text-sm mb-1'>Task Title</h3>
            <input
            value={taskTitle}
            onChange={(e)=>{
                setTaskTitle(e.target.value)
            }}
             className=' text-sm py-1 px-3 w-4/5 border-[1px] border-emerald-500 rounded outline-none bg-transparent ' type='text' placeholder='Make a UI design'/>
        </div>

        <div>
           <h3 className='text-sm mb-1 mt-2'>Category</h3>
           <input
           value={category}
           onChange={(e)=>{
            setCategory(e.target.value)
           }}
             className=' text-sm py-1 px-3 w-4/5 border-[1px] border-emerald-500 rounded outline-none bg-transparent '  type='text' placeholder='design,dev,etc'/>
        </div>

        <div>
            <h3 className='text-sm mb-1 mt-2'>Date</h3>
            <input
              value={taskdate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
              className=' text-sm py-1 px-3 w-4/5 border-[1px] border-emerald-500 rounded outline-none bg-transparent ' type='date'/>
        </div>

        <div>
            <h3 className='text-sm mb-1 mt-2'>Assign to</h3>
             <input
               value={assignTo}
               onChange={(e)=>{
                 setAssignTo(e.target.value)
               }}
               className=' text-sm py-1 px-3 w-4/5 border-[1px] border-emerald-500 rounded outline-none bg-transparent ' type='text' placeholder='employe name'/>
        </div>

        </div>
       

        <div className='w-1/2 flex flex-col items-start' >
        <h3 className='text-sm  mb-2'>Description</h3>
        <textarea 
        value={taskDescription}
        onChange={(e)=>{
            setTaskDescription(e.target.value)
        }}
        className='w-full h-40  py-2 px-4 rounded outline-none border-[1px] border-emerald-500 bg-transparent' placeholder='Detailed description of the task'/>
         <button className=' text-sm bg-emerald-600 hover:bg-emerald-800 py-3 px-5 rounded mt-4 w-full  '>Create Task</button>
        </div>

            </form>      
      </div>
  );
};

export default CreateTask;
