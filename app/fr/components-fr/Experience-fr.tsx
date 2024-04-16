import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLOREZ MAINTENANT
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">Concepteur Développeur /</span> d&apos;Applications
          </p>
          <p className="text-gray-300">2023 - PRESENT, CANNES</p>
        </div>
        <p className="text-gray-300 pt-5">
        Après avoir découvert FreeCodeCamp et terminé leurs cours, j&apos;ai développé une passion pour la programmation et j&apos;ai commencé à créer des composants, des landing pages, du contenu de marketing d&apos;affiliation, des outils de scraping web, des applications et plus encore. J&apos;ai ensuite suivi une formation en développement JavaScript React à OpenClassrooms, ce qui m&apos;a permis d&apos;améliorer mes compétences et d&apos;acquérir de solides bases dans la création d&apos;applications web dynamiques et responsives.
          <br />
          <br /> Je possède désormais une compréhension approfondie du React moderne, des hooks, du contexte, des composants fonctionnels. Je maîtrise la logique de JavaScript et TypeScript, ainsi que bien évidemment HTML et CSS pour créer des composants webs et des layouts. 
          <br />
          <br /> J&apos;ai aussi déjà utilisé Jest pour faire du testing. Redux, Zustand pour la gestion du state. Je sais aussi optimiser la vitesse de chargement des pages, et améliorer les classements SEO. Ma communication est claire, attentive et précise aussi bien en français qu&apos;en anglais.
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
