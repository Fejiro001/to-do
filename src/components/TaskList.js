import Task from "./Task";
import { LuClipboardList } from "react-icons/lu";

function TaskList(props) {
  const { tasks, editTask, completeTask, deleteTask } = props;

  return (
    <section className="task-section">
      {tasks.length > 0 ? (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-list-item">
              <Task
                task={task}
                editTask={editTask}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-tasks">
          <LuClipboardList />
          <p>No tasks yet</p>
          <p>Add a task above to get started</p>
        </div>
      )}
    </section>
  );
}

export default TaskList;
