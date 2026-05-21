import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Header />
      <main>
        <CreateTask />
        <TaskList />
      </main>
    </>
  );
}

export default App;

