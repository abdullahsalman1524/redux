import React from "react";
import AddTodo from "./app/components/AddTodo";
import Todos from "./app/components/Todos";

const App = () => {
  return (
    <>
      <h1>Welcome to Todo apps</h1>
      <AddTodo />
      <Todos />
    </>
  );
};

export default App;
