import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="pt-[35px] text-center text-6xl font-semibold   text-white">
        EXPERIENCE
      </h1>
      <p className=" text-1xl bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text  pb-24 pt-2 text-center  font-semibold tracking-[0.5em] text-transparent">
        EXPLOREZ MAINTENANT
      </p>
      <div className="container mx-auto">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="text-xl font-semibold">
              Développeur d&apos;applications
            </span>
          </p>
          <p className="text-gray-300">2023 - PRESENT, CANNES</p>
        </div>
        <p className="pt-14 tracking-wider text-gray-300 [word-spacing:0.16rem] text-lg">
          Après avoir découvert FreeCodeCamp et terminé leurs cours, j&apos;ai
          développé une passion pour la programmation et j&apos;ai commencé à
          créer des composants, des landing pages, du contenu de marketing
          d&apos;affiliation, des outils de scraping web, des applications et
          plus encore.
          <br />
          <br />
          J&apos;ai ensuite suivi une formation en développement JavaScript
          React à OpenClassrooms, ce qui m&apos;a permis d&apos;améliorer mes
          compétences et d&apos;acquérir de solides bases dans la création
          d&apos;applications web dynamiques et responsives.
          <br />
          <br /> Je possède désormais une compréhension approfondie du React
          moderne, des hooks, du contexte, des composants fonctionnels. Je
          maîtrise la logique de JavaScript et TypeScript, ainsi que bien
          évidemment HTML et CSS pour créer des composants webs et des layouts.
          <br />
          <br /> J&apos;ai aussi déjà utilisé Jest pour faire du testing. Redux,
          Zustand pour la gestion du state. Je sais aussi optimiser la vitesse
          de chargement des pages, et améliorer les classements SEO. Ma
          communication est claire, attentive et précise aussi bien en français
          qu&apos;en anglais.
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
