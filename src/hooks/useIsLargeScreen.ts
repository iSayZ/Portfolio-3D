import { useState, useEffect } from "react";

export function useIsScreenLarge(breakpoint: number = 768): boolean {
  const [isScreenLarge, setIsScreenLarge] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= breakpoint : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
    
    // Status update function
    const handleResize = () => setIsScreenLarge(mediaQuery.matches);
    
    // Listen to the changes
    mediaQuery.addEventListener("change", handleResize);
    
    // Clean the listener
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [breakpoint]);

  return isScreenLarge;
}
