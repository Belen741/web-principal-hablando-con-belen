import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Interactive Stories',
  description: 'Crea aventuras ramificadas y juegos narrativos que refuercen la práctica del idioma.',
};

const InteractiveStoriesView = dynamic(() => import('./components/InteractiveStoriesView'), {
  // ssr: false, // Actívalo para motores de juego que dependan del navegador.
});

export default function InteractiveStoriesPage() {
  return (
    <Suspense fallback={<div className="text-sm text-classroom-muted">Armando historias interactivas…</div>}>
      <InteractiveStoriesView />
    </Suspense>
  );
}
