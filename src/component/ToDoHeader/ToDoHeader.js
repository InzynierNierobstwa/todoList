import React from "react";
import styles from "./ToDoHeader.module.scss";

const ToDoHeader = ({ children }) => {
  return (
    <div className={styles.header__wrapper}>
      <h1 className={styles.header__header}>{children}</h1>
    </div>
  );
};

export default ToDoHeader;
