import * as React from "react";
import { graphql } from "gatsby";

import About from "../components/about";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Projects from "../components/projects";
import NavigationBar from "../components/navigationBar";

const IndexPage = ({ data }) => {
  return (
    <div className="dark:bg-gray-800">
      <div>
        <NavigationBar />
      </div>
      <main className="portfolio">
        <About />
        <Experience data={data} />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            designation
            duration
            title
            website
            stack
            image {
              childImageSharp {
                gatsbyImageData(
                  blurredOptions: { width: 10 }
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
        }
      }
    }
  }
`;
