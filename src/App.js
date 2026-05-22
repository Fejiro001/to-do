import { useEffect, useReducer, useRef } from "react";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import { tasksReducer } from "./reducers/tasksReducer";

const createNewDate = () => {
  const date = new Date().toLocaleString("en-ca", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
  return date;
};

function App() {
  const localTasks = JSON.parse(localStorage.getItem("my-tasks")) ?? [];
  const [tasks, dispatch] = useReducer(tasksReducer, [], () => {
    return localTasks;
  });
  const inputRef = useRef("");

  useEffect(() => {
    localStorage.setItem("my-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;

    if (text !== "") {
      const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 0;
      const date = createNewDate();
      const isCompleted = false;
      const newTask = { id, text, date, isCompleted };
      dispatch({ type: "CREATE", payload: newTask });
    }

    // Clear the input
    inputRef.current.value = "";
  };

  const updateTask = (e, task) => {
    e.preventDefault();
    const newDate = createNewDate();
    dispatch({ type: "EDIT", payload: { ...task, date: newDate } });
  };

  const completeTask = (task) => {
    dispatch({ type: "COMPLETE", payload: task });
  };

  const deleteTask = (task) => {
    dispatch({ type: "DELETE", payload: task });
  };

  return (
    <>
      <Header />
      <main>
        <div className="container main-content">
          <CreateTask inputRef={inputRef} createTask={createTask} />
          <TaskList
            tasks={tasks}
            updateTask={updateTask}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </div>
      </main>
    </>
  );
}

export default App;

