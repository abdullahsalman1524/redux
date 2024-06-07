import { configureStore } from "@reduxjs/toolkit"

// store ko saree reducer ka bataa dena ha

import todoReducer from "../feature/todoSlice"

// abhi tak hum ne store bnaa liya ha
export const store = configureStore({
  // list all the reducers
  reducer: {
    todo: todoReducer,
  },
})
