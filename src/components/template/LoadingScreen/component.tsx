import { useLoading } from "@/contexts/LoadingContext";
import { useScrollLock } from "@/hooks/useScrollLock";

const LoadingScreen: React.FC = () => {
    const { isLoading } = useLoading();
  
  useScrollLock(isLoading);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      {/* Main container */}
      <div className="flex flex-col items-center max-w-sm mx-auto px-4">
        {/* Logo */}
        <h1 className="lot text-9xl text-primary mb-12 animate-pulse">
          AE
        </h1>

        {/* Loading section */}
        <div className="w-full space-y-6">
          {/* Progress bar */}
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary animate-loading-bar" />
          </div>

          {/* Texts */}
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