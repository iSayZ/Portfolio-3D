"use client";

import { Button } from "@/components/ui/button";
import { useOverlay } from "@/contexts/OverlayContext";
import { MenuIcon } from "lucide-react";

const NavBar: React.FC = () => {
  const { isOpen } = useOverlay();

  return (
    <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
      <div className="text-slate-50 font-mono text-4xl lot z-40">AE</div>
      <div
        className={`flex gap-4 z-40 ${isOpen ? "opacity-100" : "opacity-0"}`}
      >
        {/* <ThemeToggleButton /> */}
        <Button variant="outline" className="px-2">
          <MenuIcon className="size-6" />
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
