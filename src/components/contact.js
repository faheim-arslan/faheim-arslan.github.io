import * as React from "react";

const Contact = () => {
  const emailAddress = "faheimarslan@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-1/25 py-1/5">
      <h2 className="font-roboto_medium dark:text-slate-200 text-3xl sm:text-5xl md:text-5xl lg:text-5xl">
        Get in Touch
      </h2>
      <br />
      <p className="font-montserrat_regular dark:text-slate-200 text-xl sm:text-3xl md:text-4xl lg:text-4xl">
        Whether you're interested in collaborating on a project, discussing art,
        or sharing adventure stories, I'm just a click away. Let's connect and
        explore new horizons together.
      </p>
      <br />

      <p
        className="email-address font-roboto_light dark:text-amber-500 text-xl sm:text-4xl md:text-4xl lg:text-5xl hover:underline underline-offset-3 ml-auto cursor-pointer hover:pointer"
        onClick={handleEmailClick}
      >
        faheimarslan@gmail.com &#8599;
      </p>
    </div>
  );
};

export default Contact;
