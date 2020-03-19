import React from "react";
import styles from "./ToDoButtonAdd.module.scss";

const ToDoButtonAdd = ({ children, keepDate }) => {
  return (
    <button type="submit" className={styles.button} onClick={keepDate}>
      {children}
    </button>
  );
};

export default ToDoButtonAdd;
