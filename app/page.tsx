import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Panel general',
  description: 'Resumen de la plataforma LinguaShell con accesos rápidos y próximos lanzamientos.',
};

export default function HomePage() {
  const highlights = [
    'Activa o desactiva módulos según tus necesidades.',
    'Conecta herramientas externas mediante rewrites y APIs.',
    'Optimiza cada sección con componentes ligeros y accesibles.',
  ];

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Bienvenido al cascarón LinguaShell</h2>
          <p className="text-classroom-muted">
            Usa esta base para construir experiencias inmersivas de aprendizaje de idiomas. Cada módulo se
            carga bajo demanda para mantener una experiencia veloz y enfocada.
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-classroom-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Image
            src="/classroom.svg"
            alt="Ilustración de un salón de clases"
            fill
            sizes="(min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </div>
      </section>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {["Plan curricular", "Historias interactivas", "Analítica de progreso"].map((item) => (
          <article
            key={item}
            className="rounded-2xl border border-dashed border-classroom-accent/60 bg-white/80 p-4 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
            <p className="mt-2 text-sm text-classroom-muted">
              Añade aquí widgets, indicadores o accesos directos relevantes para tu operación diaria.
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
