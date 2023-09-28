import * as React from "react";
import '../fonts/montserrat/Montserrat-Medium.ttf';

const NavigationBar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-montserrat">Your Logo</div>   
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300 font-montserrat">Home</li>
            <li className="hover:text-gray-300 font-montserrat">Experience</li>
            <li className="hover:text-gray-300 font-montserrat">Projects</li>
            <li className="hover:text-gray-300 font-montserrat">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
