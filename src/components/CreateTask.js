import { FaPlus } from "react-icons/fa";

function CreateTask() {
  return (
    <form className="create-task-form">
      <input type="text" placeholder="What needs to be done?" />
      <button className="primary-button">
        <FaPlus />
        Add
      </button>
    </form>
  );
}

export default CreateTask;
