import { FaPlus } from "react-icons/fa";

function CreateTask() {
  return (
    <form>
      <input type="text" placeholder="What needs to be done?" />
      <button>
        <FaPlus />
        Add
      </button>
    </form>
  );
}

export default CreateTask;
