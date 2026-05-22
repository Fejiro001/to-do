import { FaList } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";

function ViewToggle(props) {
  const { view, setView } = props;

  return (
    <ul className="view-toggle">
      <li>
        <button
          className={view === "grid" ? "active" : ""}
          onClick={() => setView("grid")}>
          <BsFillGridFill />
        </button>
      </li>
      <li>
        <button
          className={view === "list" ? "active" : ""}
          onClick={() => setView("list")}>
          <FaList />
        </button>
      </li>
    </ul>
  );
}

export default ViewToggle;
