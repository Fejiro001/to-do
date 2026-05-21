import Task from "./Task";

function TaskList() {
  return (
    <section>
      <ul>
        <li>
          <Task />
        </li>
      </ul>
      {/* If no tasks. I will display: No tasks yet. Add a task above to get started. */}
    </section>
  );
}

export default TaskList;
