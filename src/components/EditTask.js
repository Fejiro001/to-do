import { FaCheck, FaX } from "react-icons/fa6";

function EditTask(props) {
  const { task, editText, setEditText, updateTask, setEditing, textRef } = props;

  return (
    <form
      className="edit-task-form"
      onSubmit={(e) => {
        updateTask(e, { ...task, text: editText });
        setEditing(false);
      }}>
      <textarea
        value={editText}
        ref={textRef}
        name="editedTask"
        onChange={(e) => setEditText(e.target.value)}></textarea>
      <div className="edit-form-actions">
        <button
          title="Save Edit"
          className="save-edit"
          type="submit"
          disabled={editText.trim() === ""}>
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
  );
}

export default EditTask;
