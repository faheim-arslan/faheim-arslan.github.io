import * as React from "react";
import TypingHeader from "./typingHeader";

const About = () => {
  return (
    <section className="about mx-auto flex columns-2 min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4 px-1/25 py-1/5">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:py-24 sm:pb-1/25 md:pb-1/25 pb-1/25">
          <h1 className="font-roboto-bold text-4xl sm:text-7xl md:text-7xl lg:text-7xl">Faheim Arslan</h1>
          <TypingHeader />
        </header>
        <div className="about-content pt-24 lg:w-2/3 lg:py-24 flex-grow-2">
          <h2 className="font-roboto-medium text-4xl sm:text-5xl md:text-5xl lg:text-5xl">About</h2>
          <p className="font-montserrat-regular text-xl sm:text-2xl md:text-2xl lg:text-2xl">
            I'm Faheim, a passionate software engineer with a unique blend of
            technical expertise and artistic flair. With over 3 years of
            experience as a full-stack web developer, I've had the opportunity
            to bring innovative digital solutions to life. But my journey
            doesn't stop at code – I'm also an accomplished artist and an
            adventurous spirit.
          </p>
          <br />

          <h2 className="font-roboto-medium text-4xl sm:text-5xl md:text-5xl lg:text-5xl">What Sets Me Apart</h2>
          <p className="font-montserrat-regular text-xl sm:text-2xl md:text-2xl lg:text-2xl">
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
