import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function CreateTask(props) {
  const { createTask, inputRef } = props;
  const [isEmpty, setEmpty] = useState(true);

  return (
    <form onSubmit={createTask} className="create-task-form">
      <input
        ref={inputRef}
        name="newTask"
        type="text"
        placeholder="What needs to be done?"
        onChange={(e) => setEmpty(e.target.value.trim() === "")}
        autoFocus
      />
      <button className="primary-button" type="submit" disabled={isEmpty}>
        <FaPlus />
        Add
      </button>
    </form>
  );
}

export default CreateTask;
