import React from "react";
import About from "./components-fr/About-fr";
import Banner from "./components-fr/Banner-fr";
import Experience from "./components-fr/Experience-fr";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "./components-fr/Navbar-fr";
import Projects from "./components-fr/Projects-fr";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <main className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <StarsCanvas />
        <Navbar />
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
