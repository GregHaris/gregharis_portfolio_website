'use client';

import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import Logo from './Logo';

interface NavLinkProps {
  label: string;
  onClick: () => void;
}

const linkStyles = `
  hover:text-gray-500 dark:hover:text-gray-300
`;

const NavLink: React.FC<NavLinkProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className={`${linkStyles} px-4 py-2 w-full sm:w-auto text-center`}
  >
    {label}
  </button>
);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  const navLinks: NavLinkProps[] = [
    { label: 'About', onClick: () => scrollToSection('about') },
    { label: 'Projects', onClick: () => scrollToSection('projects') },
    { label: 'Skills', onClick: () => scrollToSection('skills') },
    { label: 'Contact', onClick: () => scrollToSection('contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-16 py-4 sm:py-0">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} />
            ))}
            <Link
              href="https://dev.to/gregharis"
              className="hover:text-gray-600 dark:hover:text-gray-300"
            >
              Blog
            </Link>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {mounted &&
                (theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                ))}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
