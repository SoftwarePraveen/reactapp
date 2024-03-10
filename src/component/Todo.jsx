import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, clearById, clearTodo, editTodos } from '../reducer/todos'

const Todo = () => {
    const [taskValue,setTaskValue]=useState('')
    const [editIndex,setEditIndex]=useState(null)
    const dispatch=useDispatch()
    const lists=useSelector((state)=>state.todosReducer.list)

    const handleChange=(e)=>{
        setTaskValue(e.target.value)
    }
    const handleEditEvent = (index) => {
        setEditIndex(index);
        setTaskValue(lists[index]);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            dispatch(editTodos({ editIndex, taskValue }));
        } else {
            dispatch(addTask(taskValue));
        }
        setEditIndex(null);
        setTaskValue('');
    }
    
  return (
    <div>
        <h3>Task</h3>
        <div>
            <input type="text" placeholder='Enter Task' onChange={handleChange} value={taskValue} name="" id="" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
            {
                lists.length!==0?lists.map((item,index)=>{
                    return (
                        <div className='content' key={index+1}>
                            <p style={{margin:"0px"}} className='item'>{item}</p>
                            <button onClick={()=>handleEditEvent(index)} >Edit</button>
                            <button onClick={()=>dispatch(clearById(index+1))}>X</button>
                        </div>
                    )
                }):(<h4>Add Task Here</h4>)
            }
            {
                lists.length!==0?<button onClick={()=>dispatch(clearTodo())}>Clear</button>:""
            }
        </div>
    </div>
  )
}

export default Todo