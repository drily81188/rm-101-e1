import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Context } from "../../App";
import styles from "./addTask.module.css";

const AddTask = () => {
  const { todos, add } = useContext(Context)
  const [task, setTask] = useState("");

  const change = (e) => {
    setTask(e.target.value);
  };

  const submit = () => {

    const newTask = {
      id: todos.length + 1,
      text: task,
      done: false,
      count: 1

    }
    add(newTask);

    setTask("");
  };

  return (
    <div className={styles.addTask}>
      <input todos-testid="add-task-input" placeholder="Add Task..." value={task} onChange={change} type="text" />
      <button todos-testid="add-task-button" onClick={submit}>+</button>
    </div>
  );
};

export default AddTask;
