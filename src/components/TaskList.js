import Task from "./Task";
import { LuClipboardList } from "react-icons/lu";

function TaskList(props) {
  const { tasks, updateTask, completeTask, deleteTask, view, filter } = props;

  return (
    <section className="task-section">
      {tasks.length > 0 ? (
        <ul className={`task-list ${view}-view`}>
          {tasks.map((task) => (
            <li key={task.id}>
              <Task
                task={task}
                updateTask={updateTask}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-tasks">
          <LuClipboardList />
          <p>
            {filter === "ACTIVE"
              ? "No active tasks"
              : filter === "COMPLETED"
                ? "No completed tasks"
                : "No tasks"}
          </p>
          <p>
            {filter === "ACTIVE"
              ? "Add an active task above to get started"
              : filter === "COMPLETED"
                ? "Complete a task to see it here"
                : "Add a task above to get started"}
          </p>
        </div>
      )}
    </section>
  );
}

export default TaskList;
