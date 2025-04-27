import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggleDarkMode} className="text-2xl p-2">
      {darkMode ? (
        <FiSun className="text-yellow-400" />
      ) : (
        <FiMoon className="text-gray-800" />
      )}
    </button>
  );
};

export default DarkMode;
