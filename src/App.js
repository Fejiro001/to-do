import { useEffect, useReducer, useRef } from "react";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "CREATE":
      return [...tasks, action.payload];
    case "EDIT":
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    case "COMPLETE":
      return;
    case "DELETE":
      return;
    default:
      return tasks;
  }
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

  const createNewDate = () => {
    const date = new Date().toLocaleString({
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
    return date;
  };

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

  const editTask = (task) => {
    const newDate = createNewDate();
    dispatch({ type: "EDIT", payload: { ...task, date: newDate } });
  };

  const completeTask = (task) => {
    // TODO: Implement complete task functionality
  };

  const deleteTask = () => {
    // TODO: Implement delete task functionality
  };

  return (
    <>
      <Header />
      <main>
        <div className="container main-content">
          <CreateTask inputRef={inputRef} createTask={createTask} />
          <TaskList
            tasks={tasks}
            editTask={editTask}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </div>
      </main>
    </>
  );
}

export default App;

