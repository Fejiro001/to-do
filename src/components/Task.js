import { FaCheckCircle, FaTrash, FaPencilAlt } from "react-icons/fa";

function Task() {
  return (
    <>
      <h2 className="task-title">Current task</h2>
      <p className="task-date">Current date and time</p>
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
