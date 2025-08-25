import Header from "./components/Header";
import TodoForm from "./components/ToDoForm.jsx";
import ToDoList from "./components/ToDoList.jsx";
import "./styles/globalStyle.css";
import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">To Do List</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
