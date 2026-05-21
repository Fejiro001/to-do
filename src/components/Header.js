import logo from "../media/logo.svg";

function Header() {
  return (
    <header>
      <div className="container header-container">
        <img
          className="logo-image"
          src={logo}
          alt="My Tasks application logo"
        />
        <div className="header-content">
          <h1 className="app-title">My Tasks</h1>
          <div className="task-count">
            <p>10 pending</p>
            <span>•</span>
            <p>5 done</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
