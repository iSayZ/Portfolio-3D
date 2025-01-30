import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ProjectsState {
  visibleProjects: number;
  setVisibleProjects: (count: number) => void;
}

export const useProjectsStore = create<ProjectsState>()(
  persist(
    (set) => ({
      visibleProjects: 3,
      setVisibleProjects: (count) => set({ visibleProjects: count }),
    }),
    {
      name: "projects-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
