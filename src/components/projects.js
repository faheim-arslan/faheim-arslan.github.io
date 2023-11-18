import React from "react";

import styles from "../styles/ProjectList.module.css";
import "../styles/custom_cursor.css";

const Projects = () => {
  const projectList = [
    "Spring Source Code Generator",
    "NuhArc",
    "Dublin bikes time series analysis",
    "Portfolio",
    "Github issue finder",
    "Airbnb price estimator",
    "Fashion Generator using GANs",
  ];

  const bgColors = [
    "yellow",
    "blue",
    "red",
    "green",
    "teal",
    "cyan",
    "fuchsia",
  ];

  return (
    <section className="projects min-h-screen">
      <div
        className="font-roboto_medium dark:text-slate-200 text-3xl sm:text-5xl md:text-5xl lg:text-5xl flex justify-center items-center
       mb-1/25 sm:mb-1/50 md:mb-1/50 lg:mb-1/50"
      >
        My Work
      </div>
      <br />

      <div
        className="main-project-panel 
          md:px-48 md:py-24 
          lg:px-48 lg:py-24 
          flex"
      >
        <div className="projects-container flex flex-wrap justify-center">
          {projectList.map((child, index) => (
            <div className="project-panel mx-auto mt-4" key={index}>
              <div
                className={`panel items-center shadow-xl 
                  px-3 py-3 h-36 w-48 text-xl hover:text-2xl
                  md:px-6 md:py-6 md:h-72 md:w-116 md:text-3xl md:hover:text-4xl
                  lg:px-6 lg:py-6 lg:h-72 lg:w-116 lg:text-3xl lg:hover:text-4xl 
                  font-montserrat_bold font-semibold rounded-2xl leading-normal
                  transition-transform transform duration-400 ease-in-out hover:scale-105
                `}
                style={{
                  backgroundColor: `var(--saturated-${bgColors[index]})`,
                  color: `var(--darker-${bgColors[index]})`,
                  transition: "transform 0.3s", // Add a transition for smooth transform animation
                  transform: "scale(1)", // Set the initial transform
                }}
                // Apply the brightness filter on hover
                onMouseEnter={(e) => {
                  if (window.innerWidth > 768) {
                    e.currentTarget.style.filter = "saturate(200%)"; // Adjust the brightness value
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.cursor = "none";
                  }
                }}
                // Reset the brightness on mouse leave for the current element
                onMouseLeave={(e) => {
                  if (window.innerWidth > 768) {
                    e.currentTarget.style.filter = "saturate(100%)"; // Reset to the initial brightness
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.cursor = "auto";
                  }
                }}

                onMouseMove={(e) => {

                }}
              >
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
