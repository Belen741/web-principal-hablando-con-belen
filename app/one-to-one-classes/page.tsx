import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'One-to-one Classes',
  description: 'Coordina clases personalizadas con agendas, materiales y seguimiento dedicado.',
};

const OneToOneClassesView = dynamic(() => import('./components/OneToOneClassesView'), {
  // ssr: false, // Habilítalo cuando integres videollamadas o pizarras colaborativas solo-cliente.
});

export default function OneToOneClassesPage() {
  return (
    <Suspense fallback={<div className="text-sm text-classroom-muted">Cargando clases personalizadas…</div>}>
      <OneToOneClassesView />
    </Suspense>
  );
}
