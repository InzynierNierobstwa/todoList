import React from "react";
import styles from "./ToDoButtonClear.module.scss";

const ToDoButtonClear = ({ children, clearList }) => {
  return (
    <button type="submit" className={styles.button} onClick={clearList}>
      {children}
    </button>
  );
};

export default ToDoButtonClear;
