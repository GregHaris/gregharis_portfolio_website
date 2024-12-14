import Image from 'next/image';
import Link from 'next/link';

// Define a TypeScript interface for the project object
interface Project {
  id: string;
  title: string;
  description: React.ReactNode;
  image: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: "Greg's Chatbot",
    description:
      "A conversational AI powered by Groq AI's llama3, built with a focus on user experience.",
    image: '/greg-chatbot2.png?height=500&width=500',
  },
];

export default function Projects() {
  // Determine the grid layout based on the number of projects
  const gridCols = projects.length === 1 ? 'grid-cols-1' : 'sm:grid-cols-2';
  return (
    <section id="projects" className="py-20 bg-background text-foreground px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className={`grid ${gridCols} gap-8 place-items-center`}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable ProjectCard component with explicit type for 'project'
function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="block w-full max-w-sm mx-auto"
    >
      <div className="bg-card text-card-foreground p-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 w-full">
        <div className="relative w-full h-48 sm:h-64 mb-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="rounded object-cover"
          />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">
          {project.title}
        </h3>
        <div>{project.description}</div>
      </div>
    </Link>
  );
}
