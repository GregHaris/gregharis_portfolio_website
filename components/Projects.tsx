import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: '1',
    title: 'Project 1',
    description: 'A web application for managing personal finances.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    id: '2',
    title: 'Project 2',
    description: 'An e-commerce platform built with React and Node.js.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    id: '3',
    title: 'Project 3',
    description: 'A real-time chat application using WebSockets.',
    image: '/placeholder.svg?height=300&width=400',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background text-foreground px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="block"
            >
              <div className="bg-card text-card-foreground p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
