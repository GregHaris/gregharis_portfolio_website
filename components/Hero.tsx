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

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4 pt-16">
      <h1 className="text-8xl font-bold mb-6 text-center">Grëg Häris</h1>
      <h2 className="text-3xl mb-8 text-center">
        {' '}
        <TypewriterAnimation />
      </h2>
      <div className="flex space-x-4 mb-12">
        <Link
          href="https://www.linkedin.com/in/dgregharis"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <SiLinkedin className="w-6 h-6" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          href="https://github.com/gregharis"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <SiGithub className="w-6 h-6" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="https://www.x.com/IamAbovExcuse"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
        >
          <SiX className="w-5 h-5" />
        </Link>
        <Link
          href="/gregharisCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <FileText className="w-6 h-6" />
          <span className="sr-only">CV</span>
        </Link>
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
}
