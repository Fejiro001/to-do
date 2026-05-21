import logo from "../media/logo.svg";

function Header() {
  return (
    <header>
      <div className="logo">
        <img className="logo-image" src={logo} alt="My Tasks application logo" />
        <h1 className="app-title">My Tasks</h1>
      </div>
    </header>
  );
}

export default Header;
