import React, { useEffect, useRef } from 'react';
import TypeIt from 'typeit';

const TypingHeader = () => {
  const typeItRef = useRef(null);

  useEffect(() => {
    typeItRef.current = new TypeIt('#aboutTags', {
      strings: ["Software Engineer", "Digital Artist", "Adventurer"],
      loop: true,
      breakLines: false,
      speed: 100,
      deleteSpeed: 100,
      lifeLike: true
    }).go();
  }, []);

  return <div className="font-montserrat-regular text-2xl sm:text-3xl md:text-4xl lg:text-4xl" id="aboutTags" />;
};

export default TypingHeader;
