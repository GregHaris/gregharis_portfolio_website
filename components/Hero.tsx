'use client';

import { ArrowDownIcon, FileText } from 'lucide-react';
import { SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4 pt-16">
      <h1 className="text-8xl font-bold mb-4 text-center">Grëg Häris</h1>
      <h2 className="text-3xl mb-8 text-center">Software Developer</h2>
      <p className="text-xl mb-12 max-w-2xl text-center">
        Crafting elegant solutions to complex problems
      </p>
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
          href="/john-doe-cv.pdf"
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
