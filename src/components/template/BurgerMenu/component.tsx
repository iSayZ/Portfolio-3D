"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { BurgerMenuProps } from "./types";
import { sections } from "@/config/navigation.config";

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollToSection();

  const handleClick = (id: string) => {
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`p-5 ${isScrolled ? "text-foreground" : "text-slate-50"}`}
        >
          <MenuIcon className="size-10" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-[400px] bg-background/80 backdrop-blur-sm border-none">
        <div className="flex flex-col gap-8 mt-16">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className="text-2xl font-medium text-left text-foreground hover:text-primary transition-colors"
            >
              {section.name}
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BurgerMenu;
