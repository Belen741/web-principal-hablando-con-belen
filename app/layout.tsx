import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hablando con Belén - Listening',
  description: 'Listening practice hub with levels, transcripts, translations, and quizzes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
