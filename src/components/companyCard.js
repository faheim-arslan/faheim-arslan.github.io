import * as React from "react";

const CompanyCard = ({companyName, companyWebsite, designation, duration, techstack, logo}) => {
    
  const openWebsite = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={`${companyName} flex flex-col items-center`}>
      <img src={logo} alt={companyName} />
      <p
        className="designation_company_name font-roboto-light text-md cursor-pointer hover:pointer"
        onClick={() => openWebsite(`${companyWebsite}`)}
      >
        {designation} | {companyName} &#8599;
      </p>
      <p className="text-md">{duration}</p>
      <ul className="mt-2 flex flex-wrap">
        {techstack.map((child, index) => (
          <li className="mr-1.5 mt-2">
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
