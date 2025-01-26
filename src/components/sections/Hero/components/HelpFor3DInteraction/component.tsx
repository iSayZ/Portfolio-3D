import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useOverlay } from "@/contexts/OverlayContext";
import { useIsScreenLarge } from "@/hooks/useIsLargeScreen";
import Image from "next/image";
import { useEffect, useState } from "react";

const HelpFor3DInteraction: React.FC = () => {
  const { isOpen } = useOverlay();
  const isLargeScreen = useIsScreenLarge(768);
  const [showMobileHint, setShowMobileHint] = useState(true);

  useEffect(() => {
    if (!isLargeScreen && !isOpen) {
      setShowMobileHint(true);
    }
  }, [isLargeScreen, isOpen]);

  if (isOpen) return null;

  if (isLargeScreen) {
    return (
      <div className="absolute bottom-6 left-6 p-4 bg-secondary/70 backdrop-blur-sm rounded-lg text-secondary-foreground text-sm">
        <p>🖱️ Clic gauche : Rotation</p>
        <p>⚙️ Molette : Zoom</p>
      </div>
    );
  }

  return (
    <>
      {showMobileHint && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Alert className="bg-secondary text-secondary-foreground p-4 rounded-lg shadow-md border-none text-center">
            <AlertTitle className="text-lg font-bold mb-2">
              Interaction mobile
            </AlertTitle>
            <AlertDescription>
              <div className="flex flex-col items-center">
                <span className="text-sm mb-4">
                  ● Glissez pour explorer
                  <br />● Pincez pour zoomer
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
              </div>
            </AlertDescription>
            <div className="flex justify-center mt-4">
              <Button onClick={() => setShowMobileHint(false)}>
                J'ai compris !
              </Button>
            </div>
          </Alert>
        </div>
      )}
    </>
  );
};

export default HelpFor3DInteraction;
