import {configureStore} from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice";

//store->actions->reducers

export const store = configureStore ({
  reducer: todoReducer, //abhi koi reducer nhi hai isliye krdiya h
}); //kuch kuch cheeze pass krni hoti hai
