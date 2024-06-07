import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../../feature/todo/todoSlice'

// idher form aay ga.
const AddTodo = () => {

  const [input, setInput] = useState("")
  // to use dispatch
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    // dispatch reuducer ko use karty hoay store ma change karta ha
    // input wali value action.payload ma chali jay gi
    dispatch(addTodo(input));
    setInput("")

  }

  return (
    <form className="w-full mb-4" onSubmit={addTodoHandler}>
      <label className="block font-semibold text-base text-black mb-2">Add Task</label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Please enter a task to do....."
        className="w-full px-4 py-2 border rounded-xl bg-off_white focus:ring-primary focus:border-primary"
      />
      <button type='submit'> Submit </button>
    </form>
  )
}

export default AddTodo
