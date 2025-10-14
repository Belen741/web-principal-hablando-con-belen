import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Forum',
  description: 'Activa conversaciones moderadas y conecta a tu comunidad lingüística.',
};

const ForumView = dynamic(() => import('./components/ForumView'), {
  // ssr: false, // Ideal si integras herramientas de chat en tiempo real basadas en WebSockets.
});

export default function ForumPage() {
  return (
    <Suspense fallback={<div className="text-sm text-classroom-muted">Preparando foros…</div>}>
      <ForumView />
    </Suspense>
  );
}
