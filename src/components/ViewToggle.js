import { FaList } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";

function ViewToggle() {
  return (
    <ul className="view-toggle">
      <li>
        <button className="active">
          <BsFillGridFill />
        </button>
      </li>
      <li>
        <button>
          <FaList />
        </button>
      </li>
    </ul>
  );
}

export default ViewToggle;
