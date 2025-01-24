import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { NavBar } from "@/components/template/NavBar";
import { useState } from "react";

export default function Home() {
  return (
    <div className="bg-background flex flex-col gap-32">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
