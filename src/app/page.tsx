import { About } from "@/components/sections/About";
import { Footer } from "@/components/template/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import BurgerMenu from "@/components/template/BurgerMenu/component";
import { NavBar } from "@/components/template/NavBar";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative flex flex-col gap-32 pb-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
