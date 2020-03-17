import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import ToDoButton from "../ToDoButton/ToDoButton";

class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <ToDoItem />
        <ToDoButton> clear list </ToDoButton>
      </div>
    );
  }
}

export default ToDoList;
