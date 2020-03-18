import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.scss";
import ToDoHeader from "./ToDoHeader/ToDoHeader";
import ToDoInput from "./ToDoInput/ToDoInput";
import ToDoList from "./ToDoList/ToDoList";

class App extends React.Component {
  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false
  };

  handleChange = event => {
    this.setState({
      item: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    console.log(newItem);

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false
    });
  };

  render() {
    return (
      <div className={styles.App}>
        <ToDoHeader>Todo List Input</ToDoHeader>
        <ToDoInput
          item={this.state.item}
          handleChangeFn={this.handleChange}
          handleSubmitFn={this.handleSubmit}
        />
        <ToDoHeader>Todo List</ToDoHeader>
        <ToDoList items={this.state.items} />
      </div>
    );
  }
}

export default App;
