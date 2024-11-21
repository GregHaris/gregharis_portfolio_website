'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const skills = [
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Express', icon: '/icons/express.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'GraphQL', icon: '/icons/graphql.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'AWS', icon: '/icons/aws.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 rounded-lg transition-colors duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800"
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-16 h-16 mb-2 relative"
                initial={{ opacity: 0.6 }}
                animate={{ opacity: hoveredSkill === skill.name ? 1 : 0.6 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
              <motion.span
                className="text-sm font-medium text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

