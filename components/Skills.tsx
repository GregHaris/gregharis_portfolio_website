'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
}

// SkillItem component to encapsulate the skill icon and name
const SkillItem: React.FC<{ skill: Skill; isHovered: boolean }> = ({
  skill,
  isHovered,
}) => (
  <motion.div
    className="flex flex-col items-center justify-center p-4 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="w-12 h-12 sm:w-16 sm:h-16 mb-2 relative"
      initial={{ opacity: 0.6 }}
      animate={{ opacity: isHovered ? 1 : 0.6 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={skill.icon}
        alt={skill.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain"
      />
    </motion.div>
    <motion.span
      className="text-sm font-medium text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {skill.name}
    </motion.span>
  </motion.div>
);

const skills: Skill[] = [
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'HTML5', icon: '/icons/html.svg' },
  { name: 'CSS', icon: '/icons/css.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'Express', icon: '/icons/express.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              onTouchStart={() => setHoveredSkill(skill.name)}
              onTouchEnd={() => setHoveredSkill(null)}
            >
              <SkillItem
                skill={skill}
                isHovered={hoveredSkill === skill.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
