import { HelpFor3DInteractionProps } from "./types";

const HelpFor3DInteraction: React.FC<HelpFor3DInteractionProps> = ({
  isOpen,
}) => {
  return (
    <>
      {!isOpen && (
        <div
          className={`absolute bottom-6 left-6 p-4 bg-primary backdrop-blur-sm rounded-lg text-primary-foreground text-sm ${isOpen ? "opacity-0" : "opacity-100"}`}
        >
          <p>🖱️ Clic gauche : Rotation</p>
          <p>⚙️ Molette : Zoom</p>
        </div>
      )}
    </>
  );
};

export default HelpFor3DInteraction;
