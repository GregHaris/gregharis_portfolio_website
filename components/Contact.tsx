import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiGmail,
} from '@icons-pack/react-simple-icons';
import Link from 'next/link';

interface ContactLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

const contactLinks: ContactLinkProps[] = [
  {
    href: 'mailto:d.gregharis@gmail.com',
    icon: SiGmail,
    label: 'd.gregharis@gmail.com',
  },
  { href: 'https://github.com/gregharis', icon: SiGithub, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/dgregharis',
    icon: SiLinkedin,
    label: 'LinkedIn',
  },
  { href: 'https://www.x.com/IamAbovExcuse', icon: SiX, label: 'X.com' },
];

const linkStyles = `
  inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors
  text-foreground hover:text-white dark:hover:text-black
  hover:bg-black dark:hover:bg-white
`;

const ContactLink: React.FC<ContactLinkProps> = ({
  href,
  icon: Icon,
  label,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${linkStyles} w-full sm:w-auto`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </Link>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">
          Contact me! <span className="wave">👋</span>
        </h2>

        <p className="text-lg mb-8">
          I&apos;m always excited to hear about and explore new projects and
          opportunities. Whether you have a question, want to discuss a
          potential collaboration or just want to say hi, feel free to reach
          out!
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
          {contactLinks.map((link, index) => (
            <ContactLink key={index} {...link} />
          ))}
        </div>

        <div className="mt-12 text-lg">
          <p>Currently based in Abuja, Nigeria 🇳🇬</p>
          <p className="mt-2">Open to remote opportunities worldwide 🌎</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
