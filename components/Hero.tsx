'use client';

import { ArrowDownIcon, FileText } from 'lucide-react';
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiGmail,
} from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import { TypewriterAnimation } from './TypewriterAnimation';

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

const socialLinks: SocialLinkProps[] = [
  {
    href: 'https://www.linkedin.com/in/dgregharis',
    icon: SiLinkedin,
    label: 'LinkedIn',
  },
  { href: 'https://github.com/gregharis', icon: SiGithub, label: 'GitHub' },
  { href: 'https://www.x.com/IamAbovExcuse', icon: SiX, label: 'X' },
  { href: '/gregharisCV.pdf', icon: FileText, label: 'CV' },
];

const linkStyles = `
  hover:text-gray-600 dark:hover:text-gray-300 transition-colors
`;

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={linkStyles}
  >
    <Icon className="w-6 h-6" />
    <span className="sr-only">{label}</span>
  </Link>
);

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4 pt-16">
      <h1 className="text-8xl font-bold mb-6 text-center">Grëg Häris</h1>
      <h2 className="text-3xl mb-8 text-center text-gray-500">
        {' '}
        <TypewriterAnimation />
      </h2>
      <div className="flex space-x-4 mb-12">
        {socialLinks.map((link, index) => (
          <SocialLink key={index} {...link} />
        ))}
      </div>
      <button
        onClick={() =>
          document
            .getElementById('about')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        className="animate-bounce"
      >
        <ArrowDownIcon className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
