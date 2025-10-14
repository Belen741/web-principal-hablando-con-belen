import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Speaking',
  description: 'Habilita sesiones de conversación guiada con herramientas de seguimiento y feedback.',
};

const SpeakingView = dynamic(() => import('./components/SpeakingView'), {
  // ssr: false, // Cambia a false cuando incorpores reconocimiento de voz o WebRTC.
});

export default function SpeakingPage() {
  return (
    <Suspense fallback={<div className="text-sm text-classroom-muted">Cargando experiencias orales…</div>}>
      <SpeakingView />
    </Suspense>
  );
}
