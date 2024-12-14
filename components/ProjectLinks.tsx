import Link from 'next/link';
import { SiGithub } from '@icons-pack/react-simple-icons';

interface ProjectLinksProps {
  githubLink: string;
  liveLink: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({
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

export default ProjectLinks;
