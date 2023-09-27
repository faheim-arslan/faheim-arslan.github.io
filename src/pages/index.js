import * as React from "react";
import NavigationBar from "../components/navigationBar";
import About from "../components/about";

const IndexPage = () => {
  return (
    <div>
      <NavigationBar />
      <main>
        <About />
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
