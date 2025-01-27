import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { Scene3DControlsProvider } from "@/contexts/Scene3DControlsContext";

export default function Home() {
  return (
    <LoadingProvider>
      <div className="relative min-h-screen overflow-hidden">
        <div className="relative flex flex-col gap-32 pb-32">
          <Scene3DControlsProvider>
            <Hero />
          </Scene3DControlsProvider>
          <About />
          <Skills />
          <Projects />
        </div>
      </div>
    </LoadingProvider>
  );
}
