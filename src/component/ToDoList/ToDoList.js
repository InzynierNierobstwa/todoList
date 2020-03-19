import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import ToDoButtonClear from "../ToDoButtonClear/ToDoButtonClear";

class ToDoList extends React.Component {
  render() {
    const { items, clearListFn, handleDeleteFn, handleEditFn } = this.props;
    return (
      <div>
        {items.map(item => {
          return (
            <ToDoItem
              key={item.id}
              title={item.title}
              date={item.date}
              handleDelete={() => handleDeleteFn(item.id)}
              handleEdit={() => handleEditFn(item.id)}
            />
          );
        })}
        <ToDoButtonClear clearList={clearListFn}> clear list </ToDoButtonClear>
      </div>
    );
  }
}

export default ToDoList;
