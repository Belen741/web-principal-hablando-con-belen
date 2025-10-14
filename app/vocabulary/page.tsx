import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Vocabulary',
  description: 'Gestiona colecciones de palabras y experiencias de memorización adaptativa.',
};

const VocabularyView = dynamic(() => import('./components/VocabularyView'), {
  // ssr: false, // Actívalo solo si agregas interacciones que dependan 100% del cliente.
});

export default function VocabularyPage() {
  return (
    <Suspense fallback={<div className="text-sm text-classroom-muted">Preparando recursos léxicos…</div>}>
      <VocabularyView />
    </Suspense>
  );
}
