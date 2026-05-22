import { useEffect, useReducer, useRef, useState } from "react";
import { tasksReducer } from "./reducers/tasksReducer";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TaskFilter from "./components/TaskFilter";
import ViewToggle from "./components/ViewToggle";
import TaskList from "./components/TaskList";

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
  const [filter, setFilter] = useState("ALL");
  const [view, setView] = useState("grid");
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

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const pendingTasks = tasks.filter((task) => !task.isCompleted);
  const completedTasks = tasks.filter((task) => task.isCompleted);
  const displayedTasks =
    filter === "ACTIVE"
      ? pendingTasks
      : filter === "COMPLETED"
        ? completedTasks
        : tasks;

  return (
    <>
      <Header pendingTasks={pendingTasks} completedTasks={completedTasks} />
      <main>
        <div className="container main-content">
          <CreateTask inputRef={inputRef} createTask={createTask} />
          <div className="filter-view-container">
            <div className="invisible-element"></div>
            <TaskFilter filter={filter} onFilterChange={handleFilterChange} />
            <ViewToggle view={view} setView={setView} />
          </div>
          <TaskList
            view={view}
            tasks={displayedTasks}
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
