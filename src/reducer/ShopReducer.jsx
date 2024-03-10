import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState={
    shopData:[],
    cart:[],
    loading:true,
    error:null
}

export const fetchProduct=createAsyncThunk('prodcut/fetchProduct',async()=>{
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
    } catch (error) {
        throw new Error("Error fetching product data: " + error.message);
    }
})

const shopProduct=createSlice({
    name:"shop",
    initialState:initialState,
    reducers:{
        addtoCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeToCart: (state, action) => {
            const productId = action.payload;
            const indexToRemove = state.cart.findIndex(item => item.id === productId);
            if (indexToRemove !== -1) {
                state.cart.splice(indexToRemove, 1);
            }
        } 
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.shopData = action.payload
            state.loading=false
        })        

    }
})

export const {addtoCart,removeToCart}=shopProduct.actions
export const shopRedcuer=shopProduct.reducer