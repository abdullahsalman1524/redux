import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../../feature/todo/todoSlice'

// to display all the todos
const Todos = () => {

  // is se saree todo aa jain gay.
  // initial state ma se todos leny hain, and they are accessible thorught state.todos
  const myAllTodos = useSelector(state => state.todos)
debugger
  const dispatch = useDispatch();

  return (
    <div>
      <div>All Todos</div>

      {myAllTodos.map((todo)=> (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>

      ))}
    </div>
  )
}

export default Todos
