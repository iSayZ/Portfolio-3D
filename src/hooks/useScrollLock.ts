import { useEffect } from "react";

export const useScrollLock = (lock: boolean) => {
  useEffect(() => {
    if (lock) {
      // Save current scroll position
      const scrollPosition = window.scrollY;

      // Prevent scrolling
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollPosition}px`;

      return () => {
        // Restore scrolling
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
        // Restore scroll position
        window.scrollTo(0, scrollPosition);
      };
    }
  }, [lock]);
};
