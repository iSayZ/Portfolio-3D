"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import WindowsIcon from "@/components/template/HubIcons/WindowsIcon";
import StandardIcon from "@/components/template/HubIcons/StandardIcon";

const HubPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-screen flex flex-col justify-between py-12 md:py-0">
      <div className="flex-1 flex items-center justify-center px-4">
        <motion.div
          className="w-full max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo Section */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h1 className="lot text-8xl md:text-9xl text-primary animate-pulse">
              AE
            </h1>
            <p className="text-foreground font-medium text-lg mt-4">
              Choisissez votre expérience
            </p>
          </motion.div>

          {/* Cards Container */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 px-4"
            variants={itemVariants}
          >
            {/* Windows Portfolio Card */}
            <Link
              href="https://windows.estrine-alexis.fr/"
              className={`${isMobile ? "cursor-not-allowed" : ""}`}
              onClick={(e) => isMobile && e.preventDefault()}
            >
              <div
                className={`group relative h-64 rounded-xl overflow-hidden transition-all duration-300
                  ${
                    isMobile
                      ? "bg-card/50 cursor-not-allowed"
                      : "bg-card hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                  }`}
              >
                <div className="absolute inset-0 bg-primary/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                  <WindowsIcon
                    className={`w-16 h-16 mb-4 ${isMobile ? "text-muted-foreground" : "text-primary"}`}
                  />
                  <h2
                    className={`text-xl font-semibold mb-2 ${isMobile ? "text-muted-foreground" : "text-foreground"}`}
                  >
                    Portfolio Windows 11
                  </h2>
                  <p className="text-sm text-muted-foreground max-w-[250px]">
                    {isMobile
                      ? "Disponible uniquement sur ordinateur"
                      : "Une expérience immersive inspirée de Windows 11"}
                  </p>
                </div>
              </div>
            </Link>

            {/* Standard Portfolio Card */}
            <Link href="/portfolio">
              <div className="group relative h-64 rounded-xl overflow-hidden bg-primary hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center text-primary-foreground">
                  <StandardIcon className="w-16 h-16 mb-4" />
                  <h2 className="text-xl font-semibold mb-2">
                    Portfolio Standard
                  </h2>
                  <p className="text-sm opacity-90 max-w-[250px]">
                    Une expérience élégante avec une touche de 3D
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Description Text */}
          <motion.p
            className="text-center text-muted-foreground text-sm mt-8"
            variants={itemVariants}
          >
            Les deux versions offrent une expérience unique pour découvrir mon
            travail
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HubPage;
