import { FaCheckCircle, FaTrash, FaPencilAlt } from "react-icons/fa";

function Task(props) {
  const { task, editTask, completeTask, deleteTask } = props;

  return (
    <>
      <h2 className="task-title">{task.text}</h2>
      <p className="task-date">{task.date}</p>
      <hr />
      <ul className="task-actions">
        <li className="complete" title="Complete Task">
          <FaCheckCircle />
        </li>
        <li className="edit" title="Edit Task">
          <FaPencilAlt />
        </li>
        <li className="delete" title="Delete Task">
          <FaTrash />
        </li>
      </ul>
    </>
  );
}

export default Task;
