import React from "react";
import Booki from "@/components/cards/booki";
import Fisheye from "@/components/cards/fisheye";
import Kasa from "@/components/cards/kasa";
import Ohmyfood from "@/components/cards/ohmyfood";
import Canneshotel from "@/components/cards/canneshotel";
import Dashboard from "@/components/cards/dashboard";
import Ecommerce from "@/components/cards/ecommerce";
import Lespetitsplats from "@/components/cards/lespetitsplats";
import Tase from "@/components/cards/tase";
import Zephyra from "@/components/cards/zephyra";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="pt-[35px] text-center text-6xl font-semibold text-white">
        PROJECTS
      </h1>
      <p className=" text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text  pb-5 text-center font-light tracking-[0.5em]  text-transparent ">
        EXPLOREZ MAINTENANT
      </p>
      <div className="mx-auto mt-7 max-w-[1100px]">
        <div className="mx-auto flex flex-wrap justify-between gap-10 px-10">
          <Booki />
          <Fisheye />
          <Kasa />
          <Ohmyfood />
          <Canneshotel />
          <Dashboard />
          <Ecommerce />
          <Lespetitsplats />
          <Tase />
          <Zephyra />
        </div>
      </div>
    </section>
  );
};

export default Projects;
