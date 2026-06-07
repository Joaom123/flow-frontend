import { Project } from "@/models/projects";
import { create } from "zustand";

const mockProjects: Project[] = [
  {
    id: "1",
    name: "Project Alpha",
    description: "This is the first project.",
  },
  {
    id: "2",
    name: "Project Beta",
    description: "This is the second project.",
  },
  {
    id: "3",
    name: "Project Gamma",
    description: "This is the third project.",
  },
];

interface ProjectsStore {
  projects: Project[];
}

export const useProjectsStore = create<ProjectsStore>((set) => ({
  projects: mockProjects,
}));
