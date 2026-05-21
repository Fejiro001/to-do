import { FaCheckCircle, FaTrash, FaPencil } from "react-icons/fa";

function Task() {
  return (
    <>
      <h2>Current task</h2>
      <p>Current date and time</p>
      <hr />
      <ul className="task-actions">
        <li>
          <FaCheckCircle />
        </li>
        <li>
          <FaPencil />
        </li>
        <li>
          <FaTrash />
        </li>
      </ul>
    </>
  );
}

export default Task;
