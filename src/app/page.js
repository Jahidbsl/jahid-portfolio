import Image from "next/image";
import LiquidHero from "./components/LiquidHero";
import FeaturedProjects from "./components/FeaturedProjects";
import ProjectsGrid from "./components/ProjectsGrid";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Education from "./components/Education";

export default function Home() {
  return (
    <>
      <LiquidHero />
      <FeaturedProjects />
      <About />
      <Certifications/>
      <Education/>
    </>
  );
}
