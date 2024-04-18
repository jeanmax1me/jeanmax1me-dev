import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl pb-24 pt-2">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center text-lg tracking-wider [word-spacing:0.16rem]">
          As a developer, I thrive on the intricate dance
          between logic and creativity. Currently immersed in the world
          of JavaScript, my expertise centers around React and Next.js, where I seamlessly
          blend technology with innovation.
          <br />
          <br />
          With a fervor for crafting elegant solutions, I navigate the
          ever-evolving landscape of software development. My journey involves
          translating concepts into code, creating seamless user experiences,
          and tayloring my solutions to the client needs.
        </p>
      </div>
    </section>
  );
};

export default About;
