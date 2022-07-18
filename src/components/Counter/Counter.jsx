import React from "react";
import { useContext } from "react";
import { Context } from "../../App";
import styles from "./counter.module.css";

const Counter = ({ countt, id }) => {
  let count = 0;

  const { update } = useContext(Context)

  const counter = (v) => {
    if (v === -1 && countt <= 1) {
      update(id, countt);
    } else {
      count = countt + v;
      update(id, count);
    }
  }

  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={() => counter(1)}>+</button>
      <span data-testid="task-counter-value">{countt}</span>
      <button data-testid="task-counter-decrement-button" onClick={() => counter(-1)}>-</button>
    </div>
  );
};

export default Counter;
