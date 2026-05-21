import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container main-content">
          <CreateTask />
          <TaskList />
        </div>
      </main>
    </>
  );
}

export default App;

