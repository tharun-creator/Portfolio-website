import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tharun Kumar H | Full Stack AI Developer Portfolio',
  description: 'Full Stack AI Developer building end-to-end web applications, Generative AI models, and scalable cloud solutions.',
  keywords: ['Tharun Kumar H', 'Full Stack AI Developer', 'React', 'Next.js', 'Generative AI', 'TypeScript', 'Tailwind CSS', 'Chennai Developer'],
  authors: [{ name: 'Tharun Kumar H' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#09090b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#09090b] text-[#f4f4f5] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
