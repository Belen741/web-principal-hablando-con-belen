import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Reading',
  description: 'Ofrece experiencias de lectura guiada con actividades de comprensión y resúmenes.',
};

const ReadingView = dynamic(() => import('./components/ReadingView'), {
  // ssr: false, // Úsalo cuando incluyas lectores interactivos dependientes del navegador.
});

export default function ReadingPage() {
  return (
    <Suspense fallback={<div className="text-sm text-classroom-muted">Cargando textos sugeridos…</div>}>
      <ReadingView />
    </Suspense>
  );
}
