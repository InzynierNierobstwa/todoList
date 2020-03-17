import React from "react";
import styles from "./App.module.scss";
import ToDoHeader from "./ToDoHeader/ToDoHeader";
import ToDoInput from "./ToDoInput/ToDoInput";
import ToDoList from "./ToDoList/ToDoList";

function App() {
  return (
    <div className={styles.App}>
      <ToDoHeader>Todo List Input</ToDoHeader>
      <ToDoInput />
      <ToDoHeader>Todo List</ToDoHeader>
      <ToDoList />
    </div>
  );
}

export default App;
