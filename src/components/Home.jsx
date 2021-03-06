import { TodoContext } from "./TodoApp";
import React, { useContext } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Home = () => {
  const [
    todoList,
    handleTodo,
    handleDelete,
    handleComplete,
    deletedTodoList,
    handleRestore,
    handlePermanentDelete,
    historylog,
    backtoHome,
  ] = useContext(TodoContext);

  return (
    <>
      <>
        <AddTodo />
        <TodoList />
      </>
    </>
  );
};

export default Home;
