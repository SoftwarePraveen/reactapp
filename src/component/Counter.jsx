import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament } from '../reducer/Counter'

const Counter = () => {
    const counter=useSelector((state)=>state.counterReducers.value)
    const dispatch=useDispatch()
    return (
    <div>
        <h3>Counter</h3><h3>{counter}</h3>
        <div>
            <button onClick={()=>dispatch(increament())}>+</button>
            <button onClick={()=>dispatch(decreament())}>-</button>
        </div>
    </div>
  )
}

export default Counter