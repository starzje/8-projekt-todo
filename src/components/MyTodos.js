import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const MyTodos = () => {
  return (
    <div className='h-screen flex-1 p-7 gradient-white'>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default MyTodos;
