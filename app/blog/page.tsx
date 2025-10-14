import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Publica artículos, historias y novedades para tu comunidad lingüística.',
};

const BlogView = dynamic(() => import('./components/BlogView'), {
  // ssr: false, // Actívalo si integras un editor visual que dependa de APIs del navegador.
});

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="text-sm text-classroom-muted">Cargando bitácora…</div>}>
      <BlogView />
    </Suspense>
  );
}
