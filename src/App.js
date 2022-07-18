import TaskApp from "./components/TaskApp";
import { useState } from "react";
import { createContext } from "react";
import taskstodos from "./data/tasks.json";

function App() {
  return (
    <div>
      {/* Code Here */}
      <TaskApp />
    </div>
  );
}

export default App;

export const Context = createContext();

export const Provider = ({ children }) => {
  const [todos, setTodos] = useState(taskstodos);

  const add = (e) => {
    setTodos([...todos, e]);
  };

  const remove = (i) => {
    setTodos(todos.filter((e) => e.id !== i));
  };

  const update = (i, v) => {
    setTodos(todos.map((e) => (e.id === i ? { ...e, count: v } : e)));
  };

  return (
    <Context.Provider value={{ todos, add, remove, update }}>
      {children}
    </Context.Provider>
  );
};
