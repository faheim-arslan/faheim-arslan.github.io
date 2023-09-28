import * as React from "react";

const About = () => {
  // return <section className="about container h-screen mx-auto flex flex-col space-y-1/2 justify-center">
  return (
    <section className="about mx-auto flex columns-2 min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4 px-1/4 py-1/5">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
          <h1 className="font-roboto text-4xl">Faheim Arslan</h1>
          <h2 className="font-montserrat text-2xl">Software Engineer</h2>
        </header>
        <div className="about-content pt-24 lg:w-1/2 lg:py-24">
          <h2 className="font-roboto text-2xl">About</h2>
          <p className="font-montserrat">
            I'm Faheim Arslan, a passionate software engineer with a unique
            blend of technical expertise and artistic flair. With over 3 years
            of experience as a full-stack web developer, I've had the
            opportunity to bring innovative digital solutions to life. But my
            journey doesn't stop at code – I'm also an accomplished artist and
            an adventurous spirit.
          </p>
          <br />

          <h2 className="font-roboto text-2xl">What Sets Me Apart</h2>
          <p className="font-montserrat">
            I don't just create software; I craft digital experiences. My
            passion for art fuels my attention to detail, ensuring every project
            I undertake is not only functional but visually stunning. As an
            adventurer, I bring a sense of curiosity and fearlessness to
            problem-solving, pushing the boundaries of what's possible.
          </p>
          <br />

          <h2 className="font-roboto text-2xl">Get in Touch</h2>
          <p className="font-montserrat">
            Whether you're interested in collaborating on a project, discussing
            art, or sharing adventure stories, I'm just a click away. Let's
            connect and explore new horizons together.
          </p>
          <br />
        </div>
      </div>
    </section>
  );
};

export default About;
