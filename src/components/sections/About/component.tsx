"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center gap-24"
    >
      <div className="container px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* Photo Container */}
        <div className="w-full max-w-sm md:w-1/2 flex justify-center">
        <div className="relative bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 rounded-full h-48 w-48 md:h-64 md:w-64 shadow-md">
                    <Image
              src="/assets/images/profil/profil.png"
              alt="Photo de profil"
              fill
              className="object-cover rounded-full p-0"
              style={{ objectPosition: "center 10%" }}
              priority
            />
          </div>
        </div>

        {/* Content container */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight max-md:text-center">
              À propos de moi
            </h2>
            <p className="text-muted-foreground">
              En tant que développeur web passionné, je me spécialise dans
              l'écosystème JavaScript, en mettant l'accent sur React, Next.js,
              Node.js, Nest.js et TypeScript. Mon parcours de reconversion
              professionnelle m’a non seulement offert une nouvelle direction,
              mais a aussi attisé ma motivation et ma soif d'apprentissage. Je
              considère chaque projet comme une opportunité de croissance
              personnelle et technique, et chaque défi que je rencontre renforce
              ma détermination à exceller dans ce domaine.
            </p>
          </div>

          <Button
            className="w-full sm:w-auto mt-4"
            size="lg"
            onClick={() =>
              window.open("/assets/documents/CV_Alexis_ESTRINE.pdf")
            }
          >
            <Download className="mr-2 h-4 w-4" />
            Télécharger mon CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
