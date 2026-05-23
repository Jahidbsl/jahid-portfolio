import Image from "next/image";
import LiquidHero from "./components/LiquidHero";
import FeaturedProjects from "./components/FeaturedProjects";
import ProjectsGrid from "./components/ProjectsGrid";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <LiquidHero />
      <FeaturedProjects />
      <About />
    </>
  );
}
