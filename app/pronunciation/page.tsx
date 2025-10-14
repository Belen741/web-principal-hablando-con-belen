import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Pronunciation',
  description: 'Impulsa la pronunciación con recursos auditivos, feedback y métricas claras.',
};

const PronunciationView = dynamic(() => import('./components/PronunciationView'), {
  // ssr: false, // Úsalo para laboratorios de pronunciación que dependan de audio/video del navegador.
});

export default function PronunciationPage() {
  return (
    <Suspense fallback={<div className="text-sm text-classroom-muted">Cargando laboratorio de pronunciación…</div>}>
      <PronunciationView />
    </Suspense>
  );
}
