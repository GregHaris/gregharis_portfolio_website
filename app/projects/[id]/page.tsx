import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SiGithub } from '@icons-pack/react-simple-icons';

const projects = [
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
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <ArrowLeft className="mr-2" /> Back to all projects
        </Link>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="relative w-full h-96 mb-6">
          <Image
            src={project.image1}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-lg mb-6">{project.fullDescription}</p>
        <div className="relative w-full h-96 mb-6">
          <Image
            src={project.image2}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside mb-6">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            <SiGithub className="inline" />
            <span>View on GitHub</span>
          </Link>
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            View Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
