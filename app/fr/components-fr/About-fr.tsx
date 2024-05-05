
const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">A PROPOS</h1>
        <p className=" tracking-[0.5em] text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl pb-24 pt-2">
          EXPLOREZ MAINTENANT
        </p>
        <p className="text-gray-300 text-center text-lg tracking-wide [word-spacing:0.16rem]">
          En tant que développeur, j&apos;aime trouver des solutions pratiques et efficaces. Je suis très attentif aux attentes des clients, et cherche toujours des solutions adaptées à vos besoins.
          <br />
          <br />
          Animé par une passion pour la création de solutions élégantes, mon objectif consiste à traduire vos idées en code rapide et fiable, et à créer des expériences utilisateurs fluides et agréables.
        </p>
      </div>
    </section>
  );
};

export default About;
