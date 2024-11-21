import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// This would typically come from a database or API
const projects = [
  {
    id: '1',
    title: 'Project 1',
    description: 'A web application for managing personal finances.',
    fullDescription: 'This project is a comprehensive web application designed to help users manage their personal finances effectively. It includes features such as expense tracking, budget planning, and financial goal setting. Built with React for the frontend and Node.js for the backend, it offers a responsive and intuitive user interface coupled with robust data management.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubLink: 'https://github.com/johndoe/project1',
    liveLink: 'https://project1.johndoe.com',
  },
  // Add more projects here...
]

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/#projects" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6">
          <ArrowLeft className="mr-2" /> Back to all projects
        </Link>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="relative w-full h-96 mb-6">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <p className="text-lg mb-6">{project.fullDescription}</p>
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside mb-6">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            View on GitHub
          </Link>
          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
            View Live Demo
          </Link>
        </div>
      </div>
    </div>
  )
}

