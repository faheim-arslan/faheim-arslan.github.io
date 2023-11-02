import * as React from "react";

import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CompanyCard = ({companyName, companyWebsite, designation, duration, techstack, logo}) => {
    
  const openWebsite = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={`${companyName} flex flex-1 flex-col items-center mt-12`}>
      <GatsbyImage image={getImage()} alt={companyName} />
      <p
        className="designation_company_name font-roboto-light text-md cursor-pointer hover:pointer"
        onClick={() => openWebsite(`${companyWebsite}`)}
      >
        {designation} | {companyName} &#8599;
      </p>
      <p className="text-md">{duration}</p>
      <ul className="mt-2 flex flex-wrap mx-1/50 sm:mx-1/25 md:mx-1/25 lg:mx-1/8">
        {techstack.map((child, index) => (
          <li className="mr-1.5 mt-2" key={index}>
            <div className="flex items-center rounded-full bg-slate-200 px-3 py-1 text-md font-roboto-light leading-5">
              {child}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyCard;

export const imageQuery = graphql`
query MyQuery {
  allMdx {
    edges {
      node {
        id
        frontmatter {
          designation
          duration
          title
          website
          image {
            childImageSharp {
              gatsbyImageData(
                width: 100
                blurredOptions: {width: 10}
                placeholder: BLURRED
                transformOptions: {cropFocus: CENTER}
                aspectRatio: 0.7
              )
            }
          }
        }
      }
    }
  }
}
`