import { backgrounds } from "./constants";

export type BackgroundType = keyof typeof backgrounds;

export interface BackgroundControlsProps {
  currentBackground: BackgroundType;
  onBackgroundChange: (type: BackgroundType) => void;
}