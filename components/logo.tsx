import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Logo: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const logoSrc = theme === 'dark' ? '/greg-logo-white.png' : '/greg-logo.png';

  return <Image src={logoSrc} width={200} height={200} alt="Grëg Häris Logo" />;
};

export default Logo;
