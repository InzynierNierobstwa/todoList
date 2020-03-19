import React from "react";
import styles from "./ToDoItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class ToDoItem extends React.Component {
  render() {
    const { title, handleDelete, handleEdit, date } = this.props;

    return (
      <li className={styles.list__wrapper}>
        <h6 className={styles.list__name}>{date}</h6>
        <h6 className={styles.list__name}>{title}</h6>
        <div className={styles.list__icons}>
          <FontAwesomeIcon
            className={styles.list__icon}
            icon={faCheck}
            size="2x"
            onClick={handleEdit}
          />
          <FontAwesomeIcon
            className={styles.list__icon}
            icon={faTrash}
            size="2x"
            onClick={handleDelete}
          />
        </div>
      </li>
    );
  }
}

export default ToDoItem;
