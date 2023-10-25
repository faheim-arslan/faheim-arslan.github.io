import * as React from "react";
import TypingHeader from "./typingHeader";

const About = () => {
  return (
    <section className="about mx-auto flex columns-2 min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4 px-1/25 py-1/5">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:py-24 sm:pb-1/25 md:pb-1/25 pb-1/25">
          <h1 className="font-roboto-bold text-4xl font-semibold sm:text-7xl md:text-7xl lg:text-7xl">Faheim Arslan</h1>
          <TypingHeader />
        </header>
        <div className="about-content pt-24 lg:w-2/3 lg:py-24 flex-grow-2">
          <h2 className="font-roboto-medium text-3xl sm:text-5xl md:text-5xl lg:text-5xl">About</h2>
          <p className="font-montserrat-regular text-xl sm:text-2xl md:text-2xl lg:text-2xl mt-3">
          Hello, I'm Faheim, a creative software engineer with 3+ years of full-stack web development experience. I blend technical expertise with an artistic touch to bring innovative digital solutions to life. Beyond code, I'm an aspiring artist and an adventurous soul.
          </p>
          <br />

          <h2 className="font-roboto-medium text-3xl sm:text-5xl md:text-5xl lg:text-5xl">What Sets Me Apart</h2>
          <p className="font-montserrat-regular text-xl sm:text-2xl md:text-2xl lg:text-2xl mt-3">
            I don't just create software; I craft digital experiences. My
            passion for art fuels my attention to detail, ensuring every project
            I undertake is not only functional but visually stunning. As an
            adventurer, I bring a sense of curiosity and fearlessness to
            problem-solving, pushing the boundaries of what's possible.
          </p>
          <br />
        </div>
      </div>
    </section>
  );
};

export default About;
