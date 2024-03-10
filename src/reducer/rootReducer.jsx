import { combineReducers } from "@reduxjs/toolkit";
import { todosReducer } from "./todos";
import { counterReducers } from "./Counter";
import { shopRedcuer } from "./ShopReducer";

export const rootReducer=combineReducers({
    todosReducer,
    counterReducers,
    shopRedcuer
})