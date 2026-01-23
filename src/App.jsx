import { useEffect, useState } from "react";
import "./App.css";
import TaskList from "./components/tasklist";
import Input from "./components/input";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("my_tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    return [];
  });
  const [text, setText] = useState();

  useEffect(() => {
    if (tasks) {
      localStorage.setItem("my_tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = () => {
    const newTask = { id: Date.now(), text: text };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="main-container">
        <h1> Task manager</h1>
        <div className="h-flexbox" style={{ width: "50vw" }}>
          <Input
            placeholder="New task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <hr className="separator" />
        <div style={{ flex: "1" }}>
          <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
      </div>
    </>
  );
}

export default App;
