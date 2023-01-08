import { configureStore } from '@reduxjs/toolkit'
import taskreducer from "./taskSlice/taskSlice"

export const store = configureStore({
  reducer: {task:taskreducer},
})
