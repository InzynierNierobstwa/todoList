import React from "react";
import styles from "./ToDoInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import ToDoButton from "../ToDoButton/ToDoButton";

class ToDoInput extends React.Component {
  render() {
    return (
      <div>
        <form className={styles.form}>
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
            ></input>
          </div>
        </form>
        <ToDoButton> add item </ToDoButton>
      </div>
    );
  }
}

export default ToDoInput;
