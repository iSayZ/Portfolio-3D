import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useOverlay } from "@/contexts/OverlayContext";
import { useIsScreenLarge } from "@/hooks/useIsLargeScreen";
import Image from "next/image";
import { useEffect, useState } from "react";

const HelpFor3DInteraction: React.FC = () => {
  const { isOpen } = useOverlay();
  const isLargeScreen = useIsScreenLarge(768);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      setShowHint(true);
    }
  }, [isOpen]);

  if (isOpen) return null;

  const content = isLargeScreen ? (
    <AlertDescription>
      <div className="flex flex-col items-center">
        <span className="text-sm mb-4">
          ● Clic gauche et glisse pour pivoter
          <br />● Pince ou utilise la molette pour zoomer
          <br />
          <br />
          Tu peux également utiliser les boutons de contrôle,
          <br /> ainsi que les flèches du clavier !
        </span>
      </div>
    </AlertDescription>
  ) : (
    <AlertDescription>
      <div className="flex flex-col items-center">
        <span className="text-sm mb-4">
          ● Glisse pour pivoter
          <br />● Pince pour zoomer
        </span>
        <div className="flex items-center justify-center">
          <Image
            src="/assets/images/icons/hand-drag.gif"
            alt="Hint for interaction"
            width={50}
            height={50}
            className="rounded-md"
            priority
          />
        </div>
        <br />
        <p>Tu peux également utiliser les boutons de contrôle !</p>
      </div>
    </AlertDescription>
  );

  return (
    <>
      {showHint && (
        <div className="relative w-full h-screen flex justify-center items-center z-50 px-4">
          <Alert className="bg-secondary text-secondary-foreground p-4 rounded-lg shadow-md border-none text-center max-w-max">
            <AlertTitle className="text-lg font-bold mb-2">
              Contrôles de la Scène 3D
            </AlertTitle>
            {content}
            <div className="flex justify-center mt-4">
              <Button onClick={() => setShowHint(false)}>J'ai compris !</Button>
            </div>
          </Alert>
        </div>
      )}
    </>
  );
};

export default HelpFor3DInteraction;
