import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className="container mx-auto">
        <div className="flex-col flex md:flex-row mt-7">
          <Link
            href="https://github.com/jeanmax1me/ecommerce-nextjs"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5 max-w-[393px]">
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="Yuni Ecommerce"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Yuni</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI for an ecommerce website, along with full
                  API integration in Next.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/jeanmax1me/kasa"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5 max-w-[393px]">
              <Image
                src="/SecondProject.png"
                height={150}
                width={150}
                alt=" Kasa"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Kasa</p>
                <p className="text-gray-500 text-[10px]">
                  Refactoring an ASP.Net project in JavaScript with Node.js for
                  the back-end, and React for the front-end.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row">
          <Link
            href="https://github.com/jeanmax1me/canneshotel"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5 max-w-[393px]">
              <Image
                src="/ThirdProject.png"
                height={150}
                width={150}
                alt="CannesHotel"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">CannesHotel</p>
                <p className="text-gray-500 text-[10px]">
                  A travel affiliate metasearch engine website in Next.js
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/jeanmax1me/zephyrastudio"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5 max-w-[393px]">
              <Image
                src="/FourthProject.png"
                height={150}
                width={150}
                alt="ZephyraStudio"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Zephyra Studio
                </p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI template for a digital studio using
                  Next.js
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
