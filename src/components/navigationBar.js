import * as React from "react";
import '../fonts/montserrat/Montserrat-Medium.ttf';
import '../fonts/satoshi/Satoshi-Regular.ttf';

const NavigationBar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-montserrat">Your Logo</div>   
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300 font-satoshi">Home</li>
            <li className="hover:text-gray-300 font-satoshi">Projects</li>
            <li className="hover:text-gray-300 font-satoshi">Experience</li>
            <li className="hover:text-gray-300 font-satoshi">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
