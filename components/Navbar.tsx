'use client';

import Link from 'next/link';
import { Moon, Sun, Menu, X } from 'lucide-react';
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
    className={`${linkStyles} px-4 py-2 w-full text-left`}
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks: NavLinkProps[] = [
    {
      label: 'About',
      onClick: () => handleLinkClick('about'),
    },
    {
      label: 'Projects',
      onClick: () => handleLinkClick('projects'),
    },
    {
      label: 'Skills',
      onClick: () => handleLinkClick('skills'),
    },
    {
      label: 'Contact',
      onClick: () => handleLinkClick('contact'),
    },
  ];

  const handleLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="sm:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <div className="hidden sm:flex items-center space-x-4">
              {navLinks.map((link, index) => (
                <NavLink key={index} {...link} />
              ))}
              <Link
                href="https://dev.to/gregharis"
                className={`${linkStyles} px-4 py-2`}
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
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <NavLink key={index} {...link} />
              ))}
              <Link
                href="https://dev.to/gregharis"
                className={`${linkStyles} block px-4 py-2 text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                  setIsMenuOpen(false);
                }}
                className={`${linkStyles} w-full text-left px-4 py-2 text-base font-medium`}
              >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
