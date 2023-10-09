import * as React from "react";

const Projects = () => {
  const projectList = [
    "Spring Source Code Generator",
    "NuhArc",
    "Dublin bikes time series analysis",
    "portfolio",
    "github issue finder",
    "airbnb price estimator",
    "Fashion Generator using GANs",
  ];

  const bgColors = ["yellow", "blue", "red", "green", "teal", "cyan", "fuchsia"];

  return (
    <section className="projects min-h-screen">
      <div className="font-roboto-medium text-3xl sm:text-5xl md:text-5xl lg:text-5xl flex justify-center items-center mb-1/25 sm:mb-1/50 md:mb-1/50 lg:mb-1/50">
        My Work
      </div>
      <br />

      <div className="project-list flex">
        {projectList.map((child, index) => (
          <div className="mx-24 mt-2" key={index}>
            <div className={`flex items-center rounded-[4rem] px-3 py-1 h-128 w-168 text-md font-roboto-light leading-5 bg-${bgColors[index]}-200`}>
              {child}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
