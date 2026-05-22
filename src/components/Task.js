import { useEffect, useRef, useState } from "react";
import {
  FaCircleCheck,
  FaTrash,
  FaPencil,
  FaCheck,
  FaX
} from "react-icons/fa6";
import DeleteModal from "./DeleteModal";

function Task(props) {
  const { task, updateTask, completeTask, deleteTask } = props;
  const [isEditing, setEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [showModal, setShowModal] = useState(false);
  const [doNotShowAgain, setDoNotShowAgain] = useState(
    sessionStorage.getItem("doNotShowModal") === "true"
  );
  const textRef = useRef(null);

  const handleTextEdit = () => {
    setEditText(task.text);
    setEditing(true);
  };

  // Focus on the textarea when editing is true
  useEffect(() => {
    if (isEditing && textRef.current) {
      textRef.current.focus();

      // Move the cursor to the end of the text
      const length = textRef.current.value.length;
      textRef.current.setSelectionRange(length, length);
    }
  }, [isEditing]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleDelete = () => {
    deleteTask(task);
    setShowModal(false);
  };

  return (
    <>
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        doNotShowAgain={doNotShowAgain}
        setDoNotShowAgain={setDoNotShowAgain}
        handleDelete={handleDelete}
      />
      <div
        className={`task-list-item ${task.isCompleted ? "task-completed" : ""}`}>
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
                  className="complete">
                  <FaCircleCheck />
                </button>
              </li>
              <li title="Edit Task">
                <button onClick={handleTextEdit} className="edit">
                  <FaPencil />
                </button>
              </li>
              <li title="Delete Task">
                <button
                  onClick={doNotShowAgain ? handleDelete : handleShowModal}
                  className="delete">
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
              }}
              onBlur={() => setEditing(false)}>
              <textarea
                value={editText}
                ref={textRef}
                name="editedTask"
                onChange={(e) => setEditText(e.target.value)}></textarea>
              <div className="edit-form-actions">
                <button title="Save Edit" className="save-edit" type="submit">
                  <FaCheck />
                </button>
                <button
                  title="Close Edit"
                  onClick={() => setEditing(false)}
                  className="close-edit"
                  type="button">
                  <FaX />
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default Task;
