import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="pt-[35px] text-center text-6xl font-semibold   text-white">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl pb-24 pt-2 text-center">
        EXPLORE NOW
      </p>
      <div className=" 2xl container mx-auto ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 text-xl font-semibold">
           React Applications 
            Developer
          </p>
          <p className="text-gray-300">2023 - PRESENT, CANNES</p>
        </div>
        <p className="pt-5 text-gray-300 tracking-wider [word-spacing:0.16rem]">
          After discovering FreeCodeCamp and finishing their courses, I found a
          passion for programming and started creating components, landing
          pages, affiliation marketing content, web scraping tools, full-stack
          apps and more. I have a strong foundation in creating dynamic and
          responsive web applications.
          <br />
          <br />I then enrolled into a Bachelor of Javascript Software
          Development at OpenClassrooms, and improved my proficiency in React.js
          to create fast, scalable, and dynamic web pages with excellent user
          experiences. I have a deep understanding of component-based
          architecture and state management, and I am well-versed in the latest
          web development trends and technologies.
        </p>
        <div className="flex flex-col sm:flex-row pt-8">
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
