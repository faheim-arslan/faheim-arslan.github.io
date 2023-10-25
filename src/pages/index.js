import * as React from "react";
// import NavigationBar from "../components/navigationBar";
import About from "../components/about";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Projects from "../components/projects";


const IndexPage = () => {
  return (
    <div>
      <main className="portfolio">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
