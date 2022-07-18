import React from "react";
import { useContext } from "react";
import { Context } from "../../App";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  const { todos } = useContext(Context)
  let total = todos.length;
  let left = 0;

  todos.filter((task) => {
    return task.done === false ? left++ : null
  });

  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">You have {left} of </b>
      <b data-testid="header-total-task">{total} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;
