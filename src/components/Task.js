import { useState } from "react";
import {
  FaCircleCheck,
  FaTrash,
  FaPencil,
  FaCheck,
  FaX
} from "react-icons/fa6";

function Task(props) {
  const { task, updateTask, completeTask, deleteTask } = props;
  const [isEditing, setEditing] = useState(false);

  const editTask = () => {
    setEditing(true);
  };

  return (
    <>
      {!isEditing ? (
        <>
          <h2 className="task-title">{task.text}</h2>
          <p className="task-date">{task.date}</p>
          <hr />
          <ul className="task-actions">
            <li title="Complete Task">
              <button className="complete">
                <FaCircleCheck />
              </button>
            </li>
            <li title="Edit Task">
              <button onClick={editTask} className="edit">
                <FaPencil />
              </button>
            </li>
            <li title="Delete Task">
              <button className="delete">
                <FaTrash />
              </button>
            </li>
          </ul>
        </>
      ) : (
        <>
          <form className="edit-task-form">
            <input type="text" />
            <button className="save-edit">
              <FaCheck />
            </button>
            <button onClick={() => setEditing(false)} className="close-edit">
              <FaX />
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default Task;
