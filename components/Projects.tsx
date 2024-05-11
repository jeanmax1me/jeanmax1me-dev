import React from "react";
import Booki from "./cards/booki";
import Fisheye from "./cards/fisheye";
import Kasa from "./cards/kasa";
import Ohmyfood from "./cards/ohmyfood";
import Canneshotel from "./cards/canneshotel";
import Dashboard from "./cards/dashboard";
import Ecommerce from "./cards/ecommerce";
import Lespetitsplats from "./cards/lespetitsplats";
import Tase from "./cards/tase";
import Zephyra from "./cards/zephyra";
import Crontab from "./cards/crontab";
import Visithome from "./cards/visithome";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="pt-[35px] text-center text-6xl font-semibold text-white">
        PROJECTS
      </h1>
      <p className=" text-1xl bg-gradient-to-r from-purple-700 to-orange-500  bg-clip-text pb-16 pt-2 text-center  font-semibold tracking-[0.5em] text-transparent ">
        EXPLORE NOW
      </p>
      <div className="pb-16 pt-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-20 lg:grid-cols-2">
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
           <Crontab />
           <Visithome />
        </div>
      </div>
    </section>
  );
};

export default Projects;
