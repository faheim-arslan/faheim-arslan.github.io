import React, { useState, useEffect } from "react";

const NavigationBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Effect to update HTML class based on dark mode state
  useEffect(() => {
    // Get the HTML element
    const htmlElement = document.documentElement;

    // Toggle the 'dark' class based on the dark mode state
    isDarkMode
      ? htmlElement.classList.add("dark")
      : htmlElement.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <nav className="p-4 fixed w-full top-0 bg-white dark:bg-gray-800 shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-vinasans_regular text-gray-700 dark:text-white text-3xl">
          faheim.
        </div>
        <div>
          <button
            onClick={toggleDarkMode}
            className="bg-gray-600 text-white px-4 py-2 rounded-md"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
