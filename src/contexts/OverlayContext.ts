import { create } from "zustand";

type OverlayStore = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const useOverlay = create<OverlayStore>((set) => ({
  isOpen: true,
  setIsOpen: (value) => set({ isOpen: value }),
}));
