import React from "react";

import styles from "../styles/ProjectList.module.css";

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
        className="font-roboto-medium text-3xl sm:text-5xl md:text-5xl lg:text-5xl flex justify-center items-center
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
                  px-3 py-3 h-36 w-48 text-xl 
                  md:px-6 md:py-6 md:h-72 md:w-116 md:text-3xl 
                  lg:px-6 lg:py-6 lg:h-72 lg:w-116 lg:text-3xl 
                  font-montserrat-bold font-semibold rounded-2xl leading-normal`}
                style={{
                  backgroundColor: `var(--saturated-${bgColors[index]})`,
                  color: `var(--darker-${bgColors[index]})`,
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
