import { useEffect, useRef, useState } from "react";
import { FaCircleCheck, FaTrash, FaPencil } from "react-icons/fa6";
import DeleteModal from "./DeleteModal";
import EditTask from "./EditTask";

function Task(props) {
  const { task, updateTask, completeTask, deleteTask } = props;
  const [isEditing, setEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [showModal, setShowModal] = useState(false);
  const [doNotShowAgain, setDoNotShowAgain] = useState(
    sessionStorage.getItem("doNotShowModal") === "true"
  );
  const textRef = useRef(null);

  // Focus on the textarea when editing is true
  useEffect(() => {
    if (isEditing && textRef.current) {
      textRef.current.focus();
      // Move the cursor to the end of the text
      const length = textRef.current.value.length;
      textRef.current.setSelectionRange(length, length);
    }
  }, [isEditing]);

  const handleTextEdit = () => {
    setEditText(task.text);
    setEditing(true);
  };

  const handleDelete = () => {
    const skipConfirm = sessionStorage.getItem("doNotShowModal") === "true";

    if (skipConfirm) {
      deleteTask(task);
      setShowModal(false);
    } else {
      setShowModal(true);
    }
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
                  onClick={handleDelete}
                  className="delete">
                  <FaTrash />
                </button>
              </li>
            </ul>
          </>
        ) : (
          <EditTask
            task={task}
            editText={editText}
            setEditText={setEditText}
            updateTask={updateTask}
            setEditing={setEditing}
            textRef={textRef}
          />
        )}
      </div>
    </>
  );
}

export default Task;
