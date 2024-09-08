// reducers:

import {createSlice, nanoid} from '@reduxjs/toolkit';
const initialState = {
  todos: [{id:"abc",task:"demo task0",isDone:false}], //initial state
};

// createSlice se hm apni slice create krenge. slice means bundle of reducers and actions for todos

export const todoSlice = createSlice ({
  //each slice have its name ,initial state and no. of reducers which is
  //multiple functions that we can define.
  name: 'todos',
  initialState,
  reducers: {
    //state,action
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        idDone: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo:(state,action)=>{
        //action.payload
        state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
    },
    markAsDone:(state,action)=>{
        // action.payload
        state.todos=state.todos.map((todo)=>{
            if(todo.id==action.payload){
                todo.isDone=true;
            }
        })
    }
  },
});


// exports these slices
export const {addTodo,deleteTodo,markAsDone}=todoSlice.actions; //action creators are generatd for each case reducer function
export default todoSlice.reducer;//isse saare reducers exports ho jate hai