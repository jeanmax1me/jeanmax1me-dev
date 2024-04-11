
const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">A PROPOS</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLOREZ MAINTENANT
        </p>
        <p className="text-gray-300 text-center ">
          En tant que développeur, Je mélange la logique et la créativité. Actuellement immergé dans l&apos;univers de JavaScript, mon expertise se concentre sur React et Next.js, où je marie technologie et innovation en toute fluidité.
          <br />
          <br />
          Animé par une passion pour la création de solutions élégantes, je navigue dans le paysage en constante évolution du développement logiciel. Mon parcours consiste à traduire des concepts en code, à créer des expériences utilisateurs fluides et à adapter mes solutions aux besoins des clients.
        </p>
      </div>
    </section>
  );
};

export default About;
