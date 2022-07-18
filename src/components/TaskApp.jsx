import React from "react";
import { TaskHeader } from "./TaskHeader";
import { AddTask } from "./AddTask";
import { Tasks } from "./Tasks";
import styles from "./taskApp.module.css";

const TaskApp = () => {
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask />
      <Tasks />
    </div>
  );
};

export default TaskApp;
