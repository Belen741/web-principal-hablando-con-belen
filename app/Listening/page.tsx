'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import AdsRight from './components/AdsRight';
import LeftNav from './components/LeftNav';
import { LEVELS } from './data/levels';

const LevelGate = dynamic(() => import('./components/LevelGate'), {
  ssr: false,
  loading: () => <div className="p-6 text-sm">Loading…</div>,
});

export default function ListeningPage() {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);

  return (
    <div id="listening-top" className="grid grid-cols-12 gap-4 p-4">
      <aside className="col-span-2 hidden lg:block">
        <LeftNav />
      </aside>

      <main className="col-span-12 space-y-6 lg:col-span-8">
        {!activeLevel ? (
          <section className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {LEVELS.map((level) => (
              <button
                key={level.id}
                onClick={() => setActiveLevel(level.id)}
                className="rounded-2xl border bg-white/70 p-6 text-left text-xl font-semibold shadow-sm backdrop-blur transition hover:shadow-md"
                aria-label={`Open ${level.title}`}
              >
                <span className="block text-3xl font-bold">{level.id}</span>
                <span className="mt-2 block text-sm text-neutral-600">{level.description}</span>
              </button>
            ))}
          </section>
        ) : (
          <LevelGate level={activeLevel} onBack={() => setActiveLevel(null)} />
        )}
      </main>

      <aside className="col-span-2 hidden lg:block">
        <AdsRight />
      </aside>
    </div>
  );
}
