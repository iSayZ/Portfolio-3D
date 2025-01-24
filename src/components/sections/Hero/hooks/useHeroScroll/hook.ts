import { useEffect } from "react";

interface UseHeroScrollProps {
  showOverlay: boolean;
  offset?: number;
}

export const useHeroScroll = ({
  showOverlay,
  offset = 96,
}: UseHeroScrollProps) => {
  useEffect(() => {
    let isScrolling = false;
    let touchStartY = 0;

    const scrollToAbout = () => {
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        const targetPosition =
          aboutSection.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    };

    const handleWheel = (e: Event) => {
      if (!showOverlay) return;

      const wheelEvent = e as WheelEvent;
      e.preventDefault();

      if (isScrolling || wheelEvent.deltaY < 0) return;

      isScrolling = true;
      scrollToAbout();
    };

    const handleTouchStart = (e: Event) => {
      if (!showOverlay) return;
      touchStartY = (e as TouchEvent).touches[0].clientY;
    };

    const handleTouchEnd = (e: Event) => {
      if (!showOverlay || isScrolling) return;

      const touchEvent = e as TouchEvent;
      const touchEndY = touchEvent.changedTouches[0].clientY;
      const touchDiff = touchStartY - touchEndY;

      if (touchDiff > 50) {
        isScrolling = true;
        scrollToAbout();
      }
    };

    const heroSection = document.querySelector("#hero");
    if (heroSection) {
      heroSection.addEventListener("wheel", handleWheel, { passive: false });
      heroSection.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      heroSection.addEventListener("touchend", handleTouchEnd, {
        passive: false,
      });
    }

    return () => {
      if (heroSection) {
        heroSection.removeEventListener("wheel", handleWheel);
        heroSection.removeEventListener("touchstart", handleTouchStart);
        heroSection.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [showOverlay, offset]);
};
