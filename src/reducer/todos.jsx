import { createSlice } from "@reduxjs/toolkit";

let initialState={
    list:[],
    loading:false
}

const todos=createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
        addTask:(state,action)=>{
            state.list.push(action.payload)
        },
        clearTodo:(state)=>{
            state.list=[]
        },
        clearById:(state,action)=>{
            state.list.splice(action.payload-1,1)
        },
        editTodos:(state,action)=>{
            state.list[action.payload.editIndex] = action.payload.taskValue;
        }
    }
})

export const {addTask,clearTodo,clearById,editTodos}=todos.actions
export const todosReducer=todos.reducer
