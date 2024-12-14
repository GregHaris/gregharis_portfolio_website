'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
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
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Function to animate 4 random skills
  const animateRandomSkills = useCallback(() => {
    const randomSkills = new Set<string>();
    while (randomSkills.size < 4) {
      const randomIndex = Math.floor(Math.random() * skills.length);
      randomSkills.add(skills[randomIndex].name);
    }
    setAnimatedSkills(Array.from(randomSkills));
  }, []);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Start animation on both mobile and desktop
  useEffect(() => {
    const intervalId = setInterval(animateRandomSkills, 2000);
    return () => clearInterval(intervalId);
  }, [animateRandomSkills]);

  return (
    <section id="skills" className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {skills.map((skill) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              isMobile={isMobile}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
              animatedSkills={animatedSkills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable SkillItem component
interface SkillItemProps {
  skill: { name: string; icon: string };
  isMobile: boolean;
  hoveredSkill: string | null;
  setHoveredSkill: (name: string | null) => void;
  animatedSkills: string[];
}

const SkillItem: React.FC<SkillItemProps> = ({
  skill,
  isMobile,
  hoveredSkill,
  setHoveredSkill,
  animatedSkills,
}) => (
  <motion.div
    className="flex flex-col items-center justify-center p-4 rounded-lg transition-colors duration-500 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800"
    onHoverStart={() => !isMobile && setHoveredSkill(skill.name)}
    onHoverEnd={() => !isMobile && setHoveredSkill(null)}
    whileHover={!isMobile ? { scale: 1.05 } : {}}
    whileTap={!isMobile ? { scale: 0.95 } : {}}
  >
    <AnimatePresence>
      <motion.div
        className="w-12 h-12 sm:w-16 sm:h-16 mb-2 relative"
        initial={{ opacity: 0.6 }}
        animate={{
          opacity:
            animatedSkills.includes(skill.name) || hoveredSkill === skill.name
              ? 1
              : 0.6,
        }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          fill
          className="object-contain"
        />
      </motion.div>
    </AnimatePresence>
    <span className="text-sm font-medium text-center">{skill.name}</span>
  </motion.div>
);
