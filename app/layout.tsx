import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import Footer from '@components/Footer';
import { ThemeProvider } from '@components/ThemeProvider';
import Navbar from '@components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Grëg Häris - Software Developer',
  description:
    'Portfolio website of Grëg Häris, a software developer specializing in web applications.',
  icons: '/logo.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
