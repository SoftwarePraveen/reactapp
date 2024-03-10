import { createSlice } from "@reduxjs/toolkit";

let initialState={
    value:0
}

const counterReducer=createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        increament:(state)=>{
            state.value+=1
        },
        decreament:(state)=>{
            if(state.value!==0){
                state.value-=1
            }
        }
    }
})

export const {increament,decreament}=counterReducer.actions
export const counterReducers=counterReducer.reducer


