import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {
    const tasks = useSelector ((store) => store.task)
  return (
    <div>
        {tasks.map((task,i)=><Task key={i} task={task} />)}
    </div>
  )
}

export default ListTask