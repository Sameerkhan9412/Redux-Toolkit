import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddForm from './AddForm';
import { deleteTodo } from '../features/todo/todoSlice';

const Todos = () => {
    const todos=useSelector((state)=>state.todos);
    const dispatch=useDispatch()
    console.log(todos);
    const clickHandler=(id)=>{
        console.log("delete",id);
        dispatch(deleteTodo(id));
    }
  return (
    <>
    <AddForm/>
    <h2>Todos</h2>
    <ul>
        {todos.map((todo)=>(
            <div>
                <li key={todo.id}>{todo.task} <button onClick={()=>clickHandler(todo.id)}>delete</button>
                </li>
                
            </div>
            
        ))}
    </ul>
    </>
  )
}

export default Todos