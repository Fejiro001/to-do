import logo from "../media/logo.svg";

function Header() {
  return (
    <header>
      <div className="logo">
        <img
          className="logo-image"
          src={logo}
          alt="My Tasks application logo"
        />
        <h1 className="app-title">My Tasks</h1>
        <div className="task-count">
          <p>10 pending</p>
          <span>•</span>
          <p>5 done</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
