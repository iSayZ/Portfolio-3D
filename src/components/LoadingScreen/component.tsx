import { useEffect } from "react";

const LoadingScreen: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      {/* Container principal */}
      <div className="flex flex-col items-center max-w-sm mx-auto px-4">
        {/* Logo "AE" */}
        <h1 className="lot text-9xl text-primary mb-12 animate-pulse">
          AE
        </h1>

        {/* Section de chargement */}
        <div className="w-full space-y-6">
          {/* Barre de progression */}
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary animate-loading-bar" />
          </div>

          {/* Textes */}
          <div className="text-center space-y-3">
            <p className="text-foreground text-xl font-medium">
              Chargement de l&apos;univers
            </p>
            <p className="text-muted-foreground text-sm">
              Première visite ? Le chargement peut prendre quelques secondes...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;