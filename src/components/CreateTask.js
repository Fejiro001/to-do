import { FaPlus } from "react-icons/fa";

function CreateTask(props) {
  return (
    <form onSubmit={props.createTask} className="create-task-form">
      <input
        ref={props.inputRef}
        name="newTask"
        type="text"
        placeholder="What needs to be done?"
      />
      <button className="primary-button" type="submit">
        <FaPlus />
        Add
      </button>
    </form>
  );
}

export default CreateTask;
