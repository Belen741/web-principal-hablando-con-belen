'use client';

import { useEffect, useMemo, useState } from 'react';
import type { QuizQuestion } from '../data/types';

export default function QuizBlock({
  questions,
  tryAnotherHref,
}: {
  questions: QuizQuestion[];
  tryAnotherHref?: string;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setAnswers({});
    setSubmitted(false);
  }, [questions]);

  const score = useMemo(() => {
    if (!submitted) return 0;
    return questions.reduce((total, question) => {
      const selected = question.options.find((option) => option.id === answers[question.id]);
      return total + (selected?.correct ? 1 : 0);
    }, 0);
  }, [answers, questions, submitted]);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  return (
    <div className="rounded-2xl border bg-white/80 p-4 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold">Quiz</h3>

      <ol className="space-y-4">
        {questions.map((question, index) => (
          <li key={question.id} className="space-y-2">
            <p className="font-medium">
              {index + 1}. {question.prompt}
            </p>
            <div className="space-y-1">
              {question.options.map((option) => {
                const checked = answers[question.id] === option.id;
                const isCorrect = submitted && option.correct;
                const isWrong = submitted && checked && !option.correct;
                return (
                  <label
                    key={option.id}
                    className={`flex items-center gap-2 rounded-lg border p-2 transition-colors ${
                      isCorrect ? 'border-green-500 bg-green-50' : ''
                    } ${isWrong ? 'border-red-500 bg-red-50' : ''}`.trim()}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      checked={checked}
                      onChange={() =>
                        setAnswers((prev) => ({ ...prev, [question.id]: option.id }))
                      }
                      className="h-4 w-4"
                    />
                    <span>{option.label}</span>
                  </label>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      {!submitted ? (
        <button
          className="mt-4 rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={() => setSubmitted(true)}
          disabled={!allAnswered}
        >
          Submit answers
        </button>
      ) : (
        <div className="mt-4 flex flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            Score: <strong>{score}</strong> / {questions.length}
          </p>
          <a
            href={tryAnotherHref ?? '#'}
            className="text-sm font-medium underline"
            aria-label="Try another listening"
          >
            Try another listening
          </a>
        </div>
      )}
    </div>
  );
}
