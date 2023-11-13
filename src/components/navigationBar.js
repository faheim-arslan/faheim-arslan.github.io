import React, { useState, useEffect } from "react";
import "../fonts/montserrat/Montserrat-Medium.ttf";

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
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Faheim</div>
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
  // return (
  //   <nav className="bg-black text-white p-4">
  //     <div className="container mx-auto">
  //       <div className="flex items-center justify-between">
  //         <div className="text-2xl font-montserrat">Your Logo</div>
  //         <ul className="flex space-x-4">
  //           <li className="hover:text-gray-300 font-montserrat">Home</li>
  //           <li className="hover:text-gray-300 font-montserrat">Experience</li>
  //           <li className="hover:text-gray-300 font-montserrat">Projects</li>
  //           <li className="hover:text-gray-300 font-montserrat">Contact</li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default NavigationBar;
