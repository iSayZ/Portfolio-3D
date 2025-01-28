"use client";

import FadeInOnScroll from "@/components/template/animations/FadeInOnScroll";
import SlideInOnScroll from "@/components/template/animations/SlideInOnScroll";
import { Button } from "@/components/ui/button";
import { contentsConfig } from "@/config/contents.config";
import { cvPath } from "@/config/links.config";
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
          <SlideInOnScroll>
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
          </SlideInOnScroll>
        </div>

        {/* Content container */}
        <div className="flex flex-col gap-6 md:w-1/2">
        <FadeInOnScroll moveY={50}>
          <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight max-md:text-center">
                {contentsConfig.about.title}
              </h2>
              <p className="text-muted-foreground">
                {contentsConfig.about.description}
              </p>
          </div>

            <Button
              className="w-full mt-4"
              size="lg"
              onClick={() => window.open(cvPath)}
            >
              <Download className="mr-2 h-4 w-4" />
              Télécharger mon CV
            </Button>
        </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
