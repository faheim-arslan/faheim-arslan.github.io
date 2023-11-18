import * as React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Experience = ({ data }) => {
  const openWebsite = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl flex flex-col justify-center items-center px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="companies-header font-montserrat_regular dark:text-slate-200 text-xl sm:text-3xl md:text-4xl lg:text-4xl mb-1/25 sm:mb-1/50 md:mb-1/50 lg:mb-1/50">
        I'm proud to have worked with some remarkable companies
      </div>

      <div className="companies flex flex-col sm:flex-row md:flex-row lg:flex-row items-start justify-center space-x-4 px-1/8 lg:px-1/4">

        {data.allMdx.edges.map(({ node }) => (
          <div
            className={`${node.frontmatter.title} flex flex-1 flex-col items-center mt-12`}
          >
            <GatsbyImage image={getImage(node.frontmatter.image.childImageSharp)} alt={node.frontmatter.title} />
            <p
              className="designation_company_name font-roboto_light dark:text-slate-200 text-md cursor-pointer hover:pointer"
              onClick={() => openWebsite(`${node.frontmatter.website}`)}
            >
              {node.frontmatter.designation} | {node.frontmatter.title} &#8599;
            </p>
            <p className="text-md dark:text-slate-200">{node.frontmatter.duration}</p>
            <ul className="mt-2 flex flex-wrap mx-1/50 sm:mx-1/25 md:mx-1/25 lg:mx-1/8">
              {node.frontmatter.stack.map((child, index) => (
                <li className="mr-1.5 mt-2" key={index}>
                  <div className="flex items-center rounded-full bg-slate-200 px-3 py-1 text-md font-roboto_light leading-5">
                    {child}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;