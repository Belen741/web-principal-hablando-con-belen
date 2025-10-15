'use client';

import { useId, useState } from 'react';
import TranscriptBlock from './TranscriptBlock';
import QuizBlock from './QuizBlock';
import type { Lesson } from '../data/types';

export default function LessonCard({ lesson }: { lesson: Lesson }) {
  const [showTranscript, setShowTranscript] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const transcriptId = `${lesson.id}-${useId().replace(/:/g, '')}`;

  const toggleTranscript = () => {
    setShowTranscript((prev) => {
      const next = !prev;
      if (!next) {
        setShowTranslation(false);
      }
      return next;
    });
  };

  return (
    <article className="rounded-2xl border bg-white/70 p-4 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">{lesson.title}</h2>
      </div>

      <audio controls className="my-3 w-full">
        <source src={lesson.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="flex flex-wrap gap-2">
        <button
          className="rounded-xl border px-3 py-1 text-sm font-semibold hover:bg-neutral-100"
          onClick={toggleTranscript}
        >
          {showTranscript ? 'Hide transcript' : 'Show transcript'}
        </button>
        {showTranscript ? (
          <button
            className="rounded-xl border px-3 py-1 text-sm font-semibold hover:bg-neutral-100"
            onClick={() => setShowTranslation((prev) => !prev)}
          >
            {showTranslation ? 'Hide translation' : 'Show translation'}
          </button>
        ) : null}
      </div>

      {showTranscript ? (
        <TranscriptBlock
          transcriptHtml={lesson.transcriptHtml}
          translationHtml={lesson.translationHtml}
          transcriptId={transcriptId}
          showTranslation={showTranslation}
          fileName={`${lesson.id}-transcript.pdf`}
        />
      ) : null}

      <div className="mt-4">
        <QuizBlock questions={lesson.quiz} tryAnotherHref="#listening-top" />
      </div>
    </article>
  );
}
