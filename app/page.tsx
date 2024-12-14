import About from '@components/About';
import Contact from '@components/Contact';
import Hero from '@components/Hero';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import Navbar from '@components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
