import React from "react";
import styles from "./ToDoButton.module.scss";

const ToDoButton = ({ children }) => {
  return (
    <button type="submit" className={styles.button}>
      {children}
    </button>
  );
};

export default ToDoButton;
