import React from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter";
import { useContext } from "react";
import { Context } from "../../App";


const Task = ({ task }) => {
  const { remove } = useContext(Context)

  return (
    <li data-testid="task" className={styles.task}>
      <div data-testid="task-text">{task.text}</div>
      <Counter countt={task.count} id={task.id} />
      <button data-testid="task-remove-button" onClick={() => {
        remove(task.id)
      }}>x</button>
    </li>
  );
};

export default Task;
