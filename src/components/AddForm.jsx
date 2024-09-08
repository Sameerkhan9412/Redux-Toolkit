import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddForm = () => {
    const [task,setTask]=useState("");
    const dispatch=useDispatch()
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(task)
        dispatch(addTodo(task))
        setTask(" ");
    }
  return (
    <>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={(e)=>setTask(e.target.value)} />
            <button>Add Task</button>
        </form>
    </>
  )
}

export default AddForm