import { SiGithub, SiLinkedin, SiX, SiGmail } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">
          Contact me! <span className="wave">👋</span>
        </h2>

        <p className="text-lg mb-8">
          I'm always excited to hear about and explore new projects and
          opportunities. Whether you have a question, want to discuss a
          potential collaboration or just want to say hi, feel free to reach
          out!
        </p>

        <div className="flex flex-wrap gap-6">
          <Link
            href="mailto:john.doe@example.com"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <SiGmail className="w-5 h-5" />
            <span>d.gregharis@gmail.com</span>
          </Link>

          <Link
            href="https://github.com/gregharis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <SiGithub className="w-5 h-5" />
            <span>GitHub</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/dgregharis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <SiLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="https://www.x.com/IamAbovExcuse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <SiX className="w-5 h-5" />
          </Link>
        </div>

        <div className="mt-12 text-lg">
          <p>Currently based in Abuja, Nigeria 🇳🇬</p>
          <p className="mt-2">Open to remote opportunities worldwide 🌎</p>
        </div>
      </div>
    </section>
  );
}
