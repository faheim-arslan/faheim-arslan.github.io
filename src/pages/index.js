import * as React from "react";
// import NavigationBar from "../components/navigationBar";
import About from "../components/about";
import Contact from "../components/contact";


const IndexPage = () => {
  return (
    <div>
      <main>
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
