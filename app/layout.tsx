import type { Metadata } from 'next';
import { AnalyticsInitializer } from '@/components/analytics/AnalyticsInitializer';
import { MainNav } from '@/components/navigation/MainNav';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'LinguaShell Platform',
    template: '%s | LinguaShell Platform',
  },
  description:
    'Cascarón base para una plataforma de idiomas con enfoque modular y rendimiento optimizado.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen">
        <AnalyticsInitializer />
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-4 px-4 py-6 lg:flex-row lg:gap-8">
          <aside className="order-last w-full rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm lg:order-first lg:w-64">
            <h2 className="text-lg font-semibold text-slate-900">Agenda rápida</h2>
            <p className="mt-2 text-sm text-classroom-muted">
              Organiza clases, eventos y recordatorios para tu comunidad lingüística.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="rounded-lg bg-classroom-background/60 p-3">
                ✅ Sala abierta para conversaciones informales.
              </li>
              <li className="rounded-lg bg-classroom-background/60 p-3">
                📌 Añade aquí enlaces a recursos prioritarios.
              </li>
            </ul>
          </aside>
          <div className="order-first flex w-full flex-1 flex-col gap-6">
            <header className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-widest text-classroom-muted">LinguaShell</p>
                  <h1 className="text-3xl font-bold text-slate-900">Salón de clase digital</h1>
                  <p className="mt-1 text-sm text-classroom-muted">
                    Conecta módulos especializados y expande tu ecosistema de aprendizaje.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-classroom-accent/10" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-900">Equipo LinguaShell</p>
                    <p className="text-sm text-classroom-muted">Siempre listo para nuevas integraciones</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <MainNav />
              </div>
            </header>
            <main className="flex-1 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
