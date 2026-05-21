import { useReducer } from "react";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const tasksReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      const newState = [...state, action.payload];
      localStorage.setItem("my-tasks", JSON.stringify(newState));
      return newState;
    case "EDIT":
      return;
    case "COMPLETE":
      return;
    case "DELETE":
      return;
    default:
      return state;
  }
};

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  const createTask = (text) => {
    const index = tasks.length ? tasks[tasks.length - 1].index + 1 : 0;
    const date = new Date().toLocaleString({
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
    const isCompleted = false;
    const newTask = { index, text, date, isCompleted };
    dispatch({ type: "CREATE", payload: newTask });
  };

  const editTask = () => {
    // TODO: Implement edit task functionality
  };

  const completeTask = () => {
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
          <CreateTask createTask={createTask} />
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

