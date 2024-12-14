import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SiGithub } from '@icons-pack/react-simple-icons';

// Define a TypeScript interface for the project object
interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image1: string;
  image2: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

// ProjectImage component to display project images
const ProjectImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="relative w-full h-96 mb-6">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover rounded-lg"
    />
  </div>
);

// ProjectLinks component to display GitHub and Live Demo links
const ProjectLinks: React.FC<{ githubLink: string; liveLink: string }> = ({
  githubLink,
  liveLink,
}) => (
  <div className="flex space-x-4">
    <Link
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
    >
      <SiGithub className="inline" />
      <span>View on GitHub</span>
    </Link>
    <Link
      href={liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
    >
      View Live Demo
    </Link>
  </div>
);

const projects: Project[] = [
  {
    id: '1',
    title: "Greg's Chatbot",
    description:
      'An AI-powered chatbot built with React, TypeScript, Node.js, TailwindCSS, Next.js, and more.',
    fullDescription:
      "Greg's Chatbot is an AI-powered chatbot built with React, TypeScript, Node.js, TailwindCSS, Next.js, and other modern technologies to provide seamless and intelligent conversational experiences. Key features include AI-powered conversations using the Llama 3 AI model via Groq's API, secure user authentication with Auth0, efficient database management with Prisma and PostgreSQL, and a responsive design built with TailwindCSS and Radix UI. The chatbot also supports syntax highlighting for code snippets and integrates with Vercel Analytics for performance monitoring.",
    image1: '/greg-chatbot.png?height=500&width=500',
    image2: '/greg-chatbot2.png?height=500&width=500',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'TailwindCSS',
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'Auth0',
      'Vercel Analytics',
      'Groq AI',
    ],
    githubLink: 'https://github.com/GregHaris/greg-chatbot/',
    liveLink: 'https://gregchatbot.vercel.app',
  },
];

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  // Await the params object to resolve it
  const { id } = params;

  // Find the project by ID
  const project = projects.find((p) => p.id === id);

  // If no project is found, return a 404 page
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-black dark:text-slate-400 hover:underline mb-6"
        >
          <ArrowLeft className="mr-2" /> Back to all projects
        </Link>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <ProjectImage src={project.image1} alt={project.title} />
        <p className="text-lg mb-6">{project.fullDescription}</p>
        <ProjectImage src={project.image2} alt={project.title} />
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside mb-6">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <ProjectLinks
          githubLink={project.githubLink}
          liveLink={project.liveLink}
        />
      </div>
    </div>
  );
}
