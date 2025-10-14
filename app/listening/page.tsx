import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Listening',
  description: 'Gestiona recursos auditivos, subtítulos y evaluaciones basadas en audio.',
};

const ListeningView = dynamic(() => import('./components/ListeningView'), {
  // ssr: false, // Úsalo si integras reproductores o análisis de audio del lado del cliente.
});

export default function ListeningPage() {
  return (
    <Suspense fallback={<div className="text-sm text-classroom-muted">Cargando experiencias auditivas…</div>}>
      <ListeningView />
    </Suspense>
  );
}
