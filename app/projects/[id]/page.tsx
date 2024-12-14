// app/projects/[id]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SiGithub } from '@icons-pack/react-simple-icons';

import ProjectImage from '@/components/ProjectImage';
import ProjectLinks from '@/components/ProjectLinks';
import { Project } from '@/types/Project';

import gregChatbot from '@/projects/gregChatbot';

// Array of projects
const projects: Project[] = [gregChatbot];

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  // Find the project by ID
  const project = projects.find((p) => p.id === params.id);

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
        {/* First Image: Use object-fit: cover */}
        <ProjectImage
          src={project.image1}
          alt={project.title}
          objectFit="cover"
        />
        <div className="space-y-6 pb-4">{project.fullDescription}</div>
        {/* Second Image: Use object-fit: contain */}
        <ProjectImage
          src={project.image2}
          alt={project.title}
          objectFit="contain"
        />
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
