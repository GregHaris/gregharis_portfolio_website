export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: React.ReactNode; 
  image1: string;
  image2: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}
