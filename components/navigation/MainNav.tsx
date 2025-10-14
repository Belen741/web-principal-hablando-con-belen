'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const routes = [
  { href: '/grammar', label: 'Grammar' },
  { href: '/vocabulary', label: 'Vocabulary' },
  { href: '/reading', label: 'Reading' },
  { href: '/listening', label: 'Listening' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/interactive-stories', label: 'Interactive Stories' },
  { href: '/exam-preparation', label: 'Exam Preparation' },
  { href: '/pronunciation', label: 'Pronunciation' },
  { href: '/forum', label: 'Forum' },
  { href: '/blog', label: 'Blog' },
  { href: '/one-to-one-classes', label: 'One-to-one Classes' },
];

export function MainNav() {
  const router = useRouter();

  const handleMouseEnter = useCallback(
    (href: string) => () => {
      router.prefetch(href);
    },
    [router],
  );

  return (
    <nav aria-label="Secciones principales" className="flex flex-wrap gap-2">
      {routes.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          prefetch={false}
          onMouseEnter={handleMouseEnter(href)}
          className="rounded-full border border-transparent bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-classroom-accent hover:text-classroom-accent"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
