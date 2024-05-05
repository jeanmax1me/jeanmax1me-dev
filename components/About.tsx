import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="relative flex h-full flex-col items-center justify-center overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex max-w-[900px]  flex-col flex-wrap items-center   justify-around">
        <h1 className="text-6xl font-semibold text-white">ABOUT ME</h1>
        <p className=" text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text pb-24 pt-2  font-semibold tracking-[0.5em] text-transparent">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center text-lg tracking-wide [word-spacing:0.16rem]">
  As a developer, I enjoy finding practical and efficient solutions. I am very attentive to clients&apos; expectations and always seek solutions tailored to your needs.
  <br />
  <br />
  Driven by a passion for creating elegant solutions, my goal is to translate your ideas into fast and reliable code, and to create smooth and enjoyable user experiences.
</p>

      </div>
    </section>
  );
};

export default About;
