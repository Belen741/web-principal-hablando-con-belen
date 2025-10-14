import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Exam Preparation',
  description: 'Planifica simulacros y rutas de estudio para certificaciones lingüísticas.',
};

const ExamPreparationView = dynamic(() => import('./components/ExamPreparationView'), {
  // ssr: false, // Ideal cuando conectes herramientas de evaluación 100% cliente.
});

export default function ExamPreparationPage() {
  return (
    <Suspense fallback={<div className="text-sm text-classroom-muted">Preparando simulacros…</div>}>
      <ExamPreparationView />
    </Suspense>
  );
}
