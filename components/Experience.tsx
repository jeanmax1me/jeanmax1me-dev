import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">Self-taught /</span> Developer
          </p>
          <p className="text-gray-300">2020 - PRESENT, CANNES</p>
        </div>
        <p className="text-gray-300 pt-5">
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
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Next.js
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
