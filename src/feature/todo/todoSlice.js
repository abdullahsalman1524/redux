// slice is bigger version of reducer function

// this nanoid is to generate a unique id
import { createSlice, nanoid } from "@reduxjs/toolkit";

// store is start ma state kia ho gi
const initialState = {
  todos: [
    {
      id: nanoid(),
      title: "Learn Redux Toolkit",
      completed: false,
    },
    {
      id: nanoid(),
      title: "Learn React",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // state is the initial state
    // action contains the payload that will have id, values.
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        title: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id!== action.payload);
    }
  },
});

// export induvidual reducers, in ka faida components ma ho ga.
export const {addTodo, removeTodo} = todoSlice.actions;

// store ko b sareee reducers ke bary ma info chahiayya
// saree reducers export karny hoty hain
export default  todoSlice.reducer
