import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "../styles/ProjectList.module.css";

gsap.registerPlugin(ScrollTrigger);

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

  const bgColors = [
    "yellow",
    "blue",
    "red",
    "green",
    "teal",
    "cyan",
    "fuchsia",
  ];

  useEffect(() => {
    // Calculate the total width of the project items
    const projectListContainer = document.querySelector(".main-project-panel");
    const projectItems = document.querySelectorAll(".project-panel");
    const totalWidth = Array.from(projectItems).reduce(
      (acc, item) => acc + item.clientWidth,
      0
    );

    // Create a GSAP timeline for the scrolling animation
    gsap.to(projectItems, {
      ease: "none", // Adjust easing as needed
      scrollTrigger: {
        trigger: ".projects",
        pin: "true",
        start: "50% bottom",
        scrub: 1,
        markers: "true",
        anticipatePin: 1,
      },
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <section className="projects min-h-screen">
      <div className="font-roboto-medium text-3xl sm:text-5xl md:text-5xl lg:text-5xl flex justify-center items-center mb-1/25 sm:mb-1/50 md:mb-1/50 lg:mb-1/50">
        My Work
      </div>
      <br />

      <div
        className="main-project-panel p-48 flex"
        style={{ width: "100%", overflowX: "auto" }}
      >
        <div></div>
        <div className="projects-container flex">
          {projectList.map((child, index) => (
            <div className="project-panel mx-24 mt-2" key={index}>
              <div
                className={`panel flex items-center rounded-[4rem] shadow-xl px-3 py-1 h-128 w-168 text-md font-roboto-light leading-5`}
                style={{
                  backgroundColor: `var(--saturated-${bgColors[index]})`,
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
