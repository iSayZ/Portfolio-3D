export interface OverlayProps {
  isOpen: boolean;
  onToggle: (value: boolean) => void;
  hasExplored: boolean;
}