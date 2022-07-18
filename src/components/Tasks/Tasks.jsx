import React from "react";
import styles from "./tasks.module.css";
import { Task } from "../Task";
import { useContext } from "react";
import { Context } from "../../App";


const Tasks = () => {
  const { todos } = useContext(Context)
  return (
    <>
      <ul todos-testid="tasks" className={styles.tasks}>
        {todos.map((e) => (
          <Task key={e.id} task={e} />
        ))}
      </ul>
      <div todos-testid="tasks-empty" className={styles.empty}>
        {todos.length !== 0 ? null : "Empty list Add a new task above"}
      </div>
    </>
  );
};

export default Tasks;
