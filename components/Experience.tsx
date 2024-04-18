import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="pt-[35px] text-center text-6xl font-semibold   text-white">
        EXPERIENCE
      </h1>
      <p className=" text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text pb-24 pt-2  text-center font-semibold tracking-[0.5em] text-transparent">
        EXPLORE NOW
      </p>
      <div className=" 2xl container mx-auto ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-xl font-semibold text-gray-300">
            React Applications Developer
          </p>
          <p className="text-gray-300">2023 - PRESENT, CANNES</p>
        </div>
        <p className="pt-14 tracking-wider text-gray-300 [word-spacing:0.16rem] text-lg">
          After discovering FreeCodeCamp and completing their courses, I
          developed a passion for programming and started creating components,
          landing pages, affiliate marketing content, web scraping tools,
          applications, and more.
          <br />
          <br />
          I then took a training course in JavaScript React development at
          OpenClassrooms, which allowed me to improve my skills and gain solid
          foundations in creating dynamic and responsive web applications.
          <br />
          <br />
          I now have a deep understanding of modern React, hooks, context, and
          functional components. I understand the logics of JavaScript and
          TypeScript, as well as HTML and CSS to create web components and
          layouts.
          <br />
          <br />I have also used Jest for testing. Redux, Zustand for state
          management. I also know how to optimize page loading speed and improve
          SEO rankings. My communication is clear, attentive, and precise in
          both French and English.
        </p>

        <div className="flex flex-col pt-8 sm:flex-row">
          <div className="mr-2  mt-5 w-max cursor-pointer  rounded-3xl  border border-[#2E2E2E] bg-transparent  px-5 py-2 text-white">
            React
          </div>
          <div className="mr-2  mt-5  w-max cursor-pointer  rounded-3xl  border border-[#2E2E2E] bg-transparent  px-5 py-2 text-white">
            JavaScript
          </div>
          <div className="mr-2  mt-5 w-max cursor-pointer  rounded-3xl  border border-[#2E2E2E] bg-transparent  px-5 py-2 text-white">
            Typescript
          </div>
          <div className="mt-5  w-max cursor-pointer  rounded-3xl  border border-[#2E2E2E] bg-transparent  px-5 py-2 text-white">
            Next.js
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
