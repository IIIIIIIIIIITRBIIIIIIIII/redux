import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/taskSlice/taskSlice'

const Task = ({task}) => {
const dispatch=useDispatch()
  return (
    <div>
        <h3>{task.title}</h3>
        <button>update</button>
        <button onClick={()=>dispatch(deleteTask(task))}>don't</button>
    </div>
  )
}

export default Task