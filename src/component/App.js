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
    editItem: false,
    taskDate: "task date"
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
      title: this.state.item,
      date: this.state.taskDate
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

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filteredItems });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);
    console.log(selectedItem);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };

  keepDate = () => {
    const now = new Date();
    const clock = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`;
    const day = `${now.getDate()} . ${now.getMonth() +
      1} . ${now.getFullYear()}`;
    const time = `godz ${clock} dnia ${day}`;
    this.setState({ taskDate: time });
  };

  render() {
    return (
      <div className={styles.App}>
        <ToDoHeader>Todo List Input</ToDoHeader>
        <ToDoInput
          item={this.state.item}
          handleChangeFn={this.handleChange}
          handleSubmitFn={this.handleSubmit}
          editItem={this.state.editItem}
          keepDateFn={this.keepDate}
        />
        <ToDoHeader>Todo List</ToDoHeader>
        <ToDoList
          items={this.state.items}
          clearListFn={this.clearList}
          handleDeleteFn={this.handleDelete}
          handleEditFn={this.handleEdit}
          keepDateFn={this.keepDate}
        />
      </div>
    );
  }
}

export default App;
