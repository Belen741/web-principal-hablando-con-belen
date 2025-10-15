import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-4xl font-bold">Hablando con Belén</h1>
      <p className="text-lg text-neutral-600">
        Welcome! Start exploring the Listening practice levels to discover transcripts, translations, quizzes, and more.
      </p>
      <Link
        href="/Listening"
        className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow hover:bg-neutral-700"
      >
        Go to Listening
      </Link>
    </main>
  );
}
