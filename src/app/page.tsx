import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="bg-background flex flex-col gap-24">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
