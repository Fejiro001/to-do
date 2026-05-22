import { FaCircle } from "react-icons/fa6";
import logo from "../media/logo.svg";
import ThemeToggle from "./ThemeToggle";

function Header(props) {
  const { pendingTasks, completedTasks } = props;

  return (
    <header>
      <div className="container header-container">
        <div className="header-left">
          <img
            className="logo-image"
            src={logo}
            alt="My Tasks application logo"
          />
          <div className="header-content">
            <h1 className="app-title">My Tasks</h1>
            <div className="task-count">
              <p>{pendingTasks.length || 0} pending</p>
              <FaCircle className="dot-icon" />
              <p>{completedTasks.length || 0} done</p>
            </div>
          </div>
        </div>
        <div className="header-right">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
