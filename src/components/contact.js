import * as React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-1/25 py-1/5">
      <h2 className="font-roboto-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Get in Touch</h2>
      <br />
      <p className="font-montserrat-regular text-xl sm:text-3xl md:text-4xl lg:text-4xl">
        Whether you're interested in collaborating on a project, discussing art,
        or sharing adventure stories, I'm just a click away. Let's connect and
        explore new horizons together.
      </p>
      <br />

      <p className="font-roboto-light text-xl sm:text-4xl md:text-4xl lg:text-5xl hover:underline underline-offset-3 ml-auto">
        faheimarslan@gmail.com &#8599;
      </p>
    </div>
  );
};

export default Contact;