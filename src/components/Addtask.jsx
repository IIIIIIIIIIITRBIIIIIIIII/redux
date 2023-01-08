import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice/taskSlice';

const Addtask = () => {
    const [newUpdate, setNewUpdate] = useState({title:""});
    const dispatch = useDispatch()
  return (
    <div>
        <input value={newUpdate.title} type="text" placeholder='newTODO' onChange={(e)=>setNewUpdate({...newUpdate,title:e.target.value})}/>
        <button onClick={()=>{
            dispatch(addTask(({...newUpdate,isDone:false,id:Math.floor(Math.random()*10000000)}))){
        
             setNewUpdate({title: ""})
        }}}>add</button>
    </div>
  )
}

export default Addtask