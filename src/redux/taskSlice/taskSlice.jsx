import { createSlice } from '@reduxjs/toolkit'
 
const initialState = [{id:1, title:"update 1", isDone:false},
 {id:1, title:"update 2", isDone:false},
  {id:1, title:"update 3", isDone:false}]


export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask:(state,action)=>{
      state.push(action.payload)
    },
    deleteTask:(state,action)=>{
      return state.filter((el)=>el.id !== action.payload.id)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTask , deleteTask } = taskSlice.actions

export default taskSlice.reducer