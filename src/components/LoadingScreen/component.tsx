import { useEffect } from "react";

const LoadingScreen: React.FC = () => {
  useEffect(() => {
    // Disables scrolling when LoadingScreen is mounted
    document.body.style.overflow = "hidden";

    // Restore scroll when LoadingScreen is removed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900 z-50 text-center min-h-screen max-h-screen overflow-hidden">
      <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4" />
      <p className="text-white/80 text-lg">Chargement de l'univers...</p>
      <p className="text-white/60 text-sm mt-2">
        Première visite ? Le chargement peut prendre quelques secondes
      </p>
    </div>
  );
};

export default LoadingScreen;
