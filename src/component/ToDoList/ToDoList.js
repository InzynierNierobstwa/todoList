import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import ToDoButton from "../ToDoButton/ToDoButton";

class ToDoList extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map(item => {
          return <ToDoItem key={item.id} title={item.title} />;
        })}
        <ToDoButton> clear list </ToDoButton>
      </div>
    );
  }
}

export default ToDoList;
