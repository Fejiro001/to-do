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
  const [editText, setEditText] = useState(task.text);

  return (
    <>
      {!isEditing ? (
        <>
          <h2 className="task-title">{task.text}</h2>
          <p className="task-date">{task.date}</p>
          <hr />
          <ul className="task-actions">
            <li title="Complete Task">
              <button
                onClick={() =>
                  completeTask({ ...task, isCompleted: !task.isCompleted })
                }
                className={`complete ${task.isCompleted ? "task-completed" : ""}`}>
                <FaCircleCheck />
              </button>
            </li>
            <li title="Edit Task">
              <button onClick={() => setEditing(true)} className="edit">
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
          <form
            className="edit-task-form"
            onSubmit={(e) => {
              updateTask(e, { ...task, text: editText });
              setEditing(false);
            }}>
            <textarea
              name="editedTask"
              rows={3}
              onChange={(e) => setEditText(e.target.value)}>
              {editText}
            </textarea>
            <button className="save-edit" type="submit">
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
