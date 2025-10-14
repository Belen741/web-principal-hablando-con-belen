import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Grammar',
  description: 'Estructura las reglas del idioma con ejemplos prácticos y actividades guiadas.',
};

const GrammarView = dynamic(() => import('./components/GrammarView'), {
  // ssr: false, // Actívalo si usas APIs del navegador o editores pesados.
});

export default function GrammarPage() {
  return (
    <Suspense fallback={<div className="text-sm text-classroom-muted">Cargando módulos gramaticales…</div>}>
      <GrammarView />
    </Suspense>
  );
}
