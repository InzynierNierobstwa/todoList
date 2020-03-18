import React from "react";
import styles from "./ToDoInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import ToDoButton from "../ToDoButton/ToDoButton";

class ToDoInput extends React.Component {
  render() {
    const { item, handleChangeFn, handleSubmitFn } = this.props;
    return (
      <div>
        <form className={styles.form} onSubmit={handleSubmitFn}>
          <div className={styles.form__wrapper}>
            <div className={styles.form__inputWrapper}>
              <FontAwesomeIcon
                className={styles.form__inputIcon}
                icon={faBook}
                size="2x"
              />
            </div>
            <input
              type="text"
              placeholder="add a todo item"
              className={styles.form__input}
              value={item}
              onChange={handleChangeFn}
            ></input>
          </div>
          <ToDoButton> add item </ToDoButton>
        </form>
      </div>
    );
  }
}

export default ToDoInput;
