import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="theme-toggle">
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {theme === "dark" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
}

export default ThemeToggle;
