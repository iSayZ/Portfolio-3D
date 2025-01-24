"use client";

import { useOverlay } from "@/contexts/OverlayContext";
import { useEffect, useState } from "react";
import { ThemeToggleButton } from "../Theming/ThemeToggleButton";
import BurgerMenu from "../BurgerMenu/component";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NavBar: React.FC = () => {
  const { isOpen } = useOverlay();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);

  // Tracks whether the user has scrolled past the hero section and updates the isScrolled state to stylize the NavBar
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      setIsScrolled(heroSection ? heroSection.getBoundingClientRect().bottom < 0 : true);
    };
      
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 py-1 px-4 md:px-6 flex justify-between items-center z-40 ${isOpen ? "" : "pointer-events-none"} transition-all duration-200 ease-in-out ${isScrolled ? 'bg-background/80 backdrop-blur-sm' : ''}`}>
      <Button variant="ghost" onClick={() => router.push("/")} className={`${isScrolled ? "text-foreground" : "text-slate-50"} hover:bg-transparent font-mono text-4xl lot z-40 mt-[0.6rem]`}>AE</Button>
                  <div
        className={`flex gap-4 z-40 ${isOpen ? "opacity-100" : "hidden"}`}
      >
                <div className={`flex items-center justify-center ${isScrolled ? "text-foreground" : "text-slate-50"}`}>
                    <ThemeToggleButton />
                </div>
                <BurgerMenu isScrolled={isScrolled} />
      </div>
    </nav>
  );
};

export default NavBar;
