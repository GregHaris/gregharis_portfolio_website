
import { Project } from '@/types/Project';

const gregChatbot: Project = {
  id: 'greg-chatbot',
  title: "Greg's Chatbot",
  description:
    'An AI-powered chatbot built with React, TypeScript, Node.js, TailwindCSS, Next.js, and more.',
  fullDescription: (
    <>
      <p>
        Greg's Chatbot is an AI-powered chatbot built with React, TypeScript,
        Node.js, TailwindCSS, Next.js, and other modern technologies to provide
        seamless and intelligent conversational experiences. Key features
        include AI-powered conversations using the Llama 3 AI model via Groq's
        API, secure user authentication with Auth0, efficient database
        management with Prisma and PostgreSQL, and a responsive design built
        with TailwindCSS and Radix UI.
      </p>
      <p>
        The chatbot also supports syntax highlighting for code snippets and
        integrates with Vercel Analytics for performance monitoring. This
        ensures that the chatbot is not only functional but also optimized for
        speed and usability.
      </p>
      <p>
        With its modern stack and robust features, Greg's Chatbot is a perfect
        example of how AI and web development can come together to create a
        powerful tool for communication and interaction.
      </p>
    </>
  ),
  image1: '/greg-chatbot.png?height=500&width=500',
  image2: '/greg-chatbot.gif', // Replace with the path to your GIF
  technologies: [
    'React',
    'TypeScript',
    'Node.js',
    'TailwindCSS',
    'Next.js',
    'Prisma',
    'PostgreSQL',
    'Auth0',
    'Vercel Analytics',
    'Groq AI',
  ],
  githubLink: 'https://github.com/GregHaris/greg-chatbot/',
  liveLink: 'https://gregchatbot.vercel.app',
};

export default gregChatbot;
