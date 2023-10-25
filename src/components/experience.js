import * as React from "react";

import techsophy_logo from "../images/techsophy_logo.png";
import mastercard_logo from "../images/mastercard_logo.png";
import CompanyCard from "./companyCard";

const Experience = () => {
  const mastercardStack = ["Spring Framework", "Java", "JUnit", "Postgres"];
  const techsophyStack = [
    "Java",
    "Spring Boot",
    "Spring Framework",
    "Javascript",
    "React",
    "MongoDB",
    "SQL Server",
    "MongoDB Aggregations",
    "Docker",
    "Highcharts",
  ];

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl flex flex-col justify-center items-center px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="companies-header font-montserrat-regular text-xl sm:text-3xl md:text-4xl lg:text-4xl mb-1/25 sm:mb-1/50 md:mb-1/50 lg:mb-1/50">
        I'm proud to have worked with some remarkable companies
      </div>

      <div className="companies flex flex-col sm:flex-row md:flex-row lg:flex-row items-center space-x-4 px-1/8 lg:px-1/4">
        <CompanyCard
          companyName={"Mastercard"}
          companyWebsite={"https://www.mastercard.ie/en-ie.html"}
          designation={"Software Engineer"}
          duration={"2022 - Present"}
          techstack={mastercardStack}
          logo={mastercard_logo}
        />
        <CompanyCard
          companyName={"Techsophy"}
          companyWebsite={"https://www.techsophy.com/"}
          designation={"Associate Software Engineer"}
          duration={"2018 - 2020"}
          techstack={techsophyStack}
          logo={techsophy_logo}
        />
      </div>
    </div>
  );
};

export default Experience;
