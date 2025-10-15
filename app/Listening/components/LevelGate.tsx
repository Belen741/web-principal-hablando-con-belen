'use client';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import { LEVEL_IDS } from '../data/levels';

const levelComponents: Record<(typeof LEVEL_IDS)[number], ComponentType> = {
  A1: dynamic(() => import('../levels/A1'), { ssr: false }),
  A2: dynamic(() => import('../levels/A2'), { ssr: false }),
  B1: dynamic(() => import('../levels/B1'), { ssr: false }),
  B2: dynamic(() => import('../levels/B2'), { ssr: false }),
  C1: dynamic(() => import('../levels/C1'), { ssr: false }),
  C2: dynamic(() => import('../levels/C2'), { ssr: false }),
};

export default function LevelGate({ level, onBack }: { level: string; onBack: () => void }) {
  const LevelComponent = levelComponents[level as (typeof LEVEL_IDS)[number]];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{level}</h1>
        <button
          onClick={onBack}
          className="text-sm font-semibold underline underline-offset-2"
          aria-label="Back to levels"
        >
          Back
        </button>
      </div>
      {LevelComponent ? (
        <LevelComponent />
      ) : (
        <p className="rounded-xl border bg-red-50 p-4 text-sm text-red-600">Level not found.</p>
      )}
    </div>
  );
}
